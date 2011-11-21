j = $;

(function(){
	
	/*
	 * TimeLeft (Singleton)
	 * Control the background and add/stop UI
	 */
	var TimeLeft = function(){
		
		this.set( null )
		
		// bind the add button from within the minute add form
		j('#addCont').click( this.addClicked )
		
		// FIXME vai pra classe de mananger bind the menu symbol 
		j('#formAddFromMin').submit( this.submitAdd )
	};
	
	TimeLeft.prototype.set = function( obj ){
		if(obj){
			 
		} else {
			j('#elapsedBar').css('width', "1%")
			j('#remain').text('--')
		}
	}
	
	TimeLeft.prototype.addClicked = function(e) {
		
		j('#addMinutes').val('10')
	  
	  if( j(this).text() == '≡' ){
		  Transitions.showAdd()
	  } else {
	  	Transitions.hideAdd()
	  }
	  
	  return false;
	}
	
	TimeLeft.prototype.submitAdd = function() {
		// TODO add logic
		// j('#addMinutes').val()
		
		Transitions.hideAdd()
		return false;
	};
	
	/*
	 * Function to update the timer (+bg), and alert
	 */
	TimeLeft.prototype.loop = function() {
		// TODO
	};
	
	
	// wait for stuff ready and go!
	$(function(j){
		window.timeLeft = new TimeLeft();
	})
	
	
})()



