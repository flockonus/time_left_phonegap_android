j = $;

(function(){
	
	/*
	 */
	var TimersList = function(){
		this.timers = []
		this.initialize()
	};
	
	// Load from db all timers objects and add it to a visible list
	TimersList.prototype.initialize = function( obj ){
		// load the whole list and add it to a list, 
		// TODO ordered by the attr:end 
		var timers = timeModel.loadAll()
		// cleanup expired timers
		var i=0
		for (; i < timers.length; i++) {
			if( timers[i].end < new Date() ){
				console.warn("Descartando timer", timers[i].end)
			  timeModel.remove( timers[i]._id )
			  delete timers[i]
			} else {
				this.timers.push( timers[i] ) // no undefined allowed
			}
		};
		
		timeLeft.set( this.timers[this.timers.length-1] )
	}
	
	// behavior to be called from ui
	TimersList.prototype.add = function( obj ){
		
		// FIXME this behavior: only one timer is allowed, so deleting the last keeps it consistent
			if(timeModel.last()){ timeModel.remove( timeModel.last()._id ) }
		
		timeModel.add( obj )
		timeLeft.set( obj )
	}
	
	window.modules.TimersList = TimersList;
	
})()



