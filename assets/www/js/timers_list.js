j = $;

(function(){
	
	/*
	 */
	var TimersList = function(){
		this.initialize()
		
	};
	
	// Restore from db all timers objects from DB
	TimersList.prototype.initialize = function( obj ){
		// TODO
	}
	
	// behavior to be called from ui
	TimersList.prototype.add = function( obj ){
		// TODO - persist
		
		timeLeft.set( obj )
	}
	
	window.modules.TimersList = TimersList;
	
})()



