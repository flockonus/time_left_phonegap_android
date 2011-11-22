j = $;

(function(){
	
	/*
	 * TimeLeft (Singleton)
	 * Control the focused timer's background and alerts
	 */
	var TimeLeft = function(){
		this.eElapsedBar = j('#elapsedBar')
		this.eRemain = j('#remain')
		
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
		var iDelta = (new Date() - this.current.start) / 60/1000
		var percent = (iDelta / this.current.deltaMin) * 100
		if( percent >= 100 ){
			
			// TODO STOP AND ALARM!
			vibrate()
			
			this.runningTick = false;
			clearInterval( this.runningTick )
		} else {
			// TODO: Colocar o pretty escrito lá! :D
			this.eElapsedBar.css('width', percent+"%")
			console.log( iDelta, percent )
		}
	};
	
	
	// wait for stuff ready and go!
	$(function(j){
		window.timeLeft = new TimeLeft();
	})
	
	
})()



