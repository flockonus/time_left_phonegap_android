j = $;

(function(){
	
	/*
	 * Inputs (singleton)
	 * Simple class, manipulate several inputs and outcomes
	 */
	var Inputs = function(){
		// bind the add button from within the minute add form
		j('#addCont').click( this.addClicked )
		
		// FIXME vai pra classe de mananger bind the menu symbol 
		j('#formAddFromMin').submit( this.submitAdd )
	};
	
	Inputs.prototype.addClicked = function(e) {
		
		j('#addMinutes').val('10')
	  
	  if( j(this).text() == '≡' ){
		  Transitions.showAdd( '#addContent' )
	  } else {
	  	Transitions.hideAdd( '#addContent' )
	  }
	  
	  return false;
	}
	
	Inputs.prototype.submitAdd = function() {
		// TODO persist
		
		var plusMin = parseInt( j('#addMinutes').val() )
		var now = new Date()
		var endTime = (new Date()).add( plusMin ).minutes()
		
		var newT = {
			label: j('#addTimerLabel').val(),
			start: now,
			end: endTime,
			deltaMin: (endTime - now) / 60/1000
		}
		
		timersList.add( newT )
		
		console.log( 'adding Timer:', newT )
		
		Transitions.hideAdd( '#addContent' )
		return false;
	};
	
	
	
	// wait for stuff ready and go!
	$(function(j){
		window.inputs = new Inputs();
	})
	
	
})()



