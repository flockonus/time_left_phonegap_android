j = $;

(function(){
	
	/*
	 * TimeLeft (Singleton)
	 * Control the focused timer's background and alerts
	 */
	var TimeLeft = function(){
		this.eElapsedBar = j('#elapsedBar')
		this.eRemain = j('#remain')
		// holds the selected timer entry
		this.current = null;
		this.runningTick = false;
		this.set( null )
	};
	
	
	TimeLeft.prototype.set = function( obj ){
		if( this.runningTick  ){
			clearInterval( this.runningTick )
		}
		
		if(obj){
			this.current = obj
			this.loop()
			this.runningTick = setInterval( j.proxy(this.loop, this), 1000 )
		} else {
			
			this.runningTick = false
			this.current = null
			this.eElapsedBar.css('width', "1%")
			this.eRemain.text('--')
		}
	}
	
	/*
	 * Function to update the timer (+bg), and alert
	 */
	TimeLeft.prototype.loop = function() {
		// growing number, like: 0.010002, 0.020002, .. 1.1, 1.2 ..
		try{
		var elapsedDelta = (new Date() - this.current.start) / 60/1000
		var remainingDelta = this.current.delta - elapsedDelta
		var percent = (elapsedDelta / this.current.delta) * 100
		if( percent >= 100 ){
			
			// TODO STOP AND ALARM!
			
			this.eElapsedBar.css('width', 100+"%")
			this.eRemain.text("done!")
			clearInterval( this.runningTick )
			this.runningTick = false;
			vibrate()
		} else {
			// not great, but better than rouding problem
			remainingDelta = remainingDelta+""
			var elapsedMin = parseInt( remainingDelta )
			var elapsedSec = (parseFloat( remainingDelta ) - elapsedMin) * 60
			elapsedSec = Math.round( elapsedSec )
			if( elapsedSec < 10 )
				elapsedSec = "0"+elapsedSec
			
			this.eElapsedBar.css('width', percent+"%")
			this.eRemain.text(elapsedMin+":"+elapsedSec)
			//console.log( , percent )
		}
		} catch(e){console.log(e)}
	};
	
	
	window.modules.TimeLeft = TimeLeft;
	
	
})()



