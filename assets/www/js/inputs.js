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
		var rawVal = j('#addMinutes').val()
		//var rawVal = "2.3"
		var plusMin = parseInt( rawVal )
		var plusSec = (parseFloat( rawVal ) - parseInt( rawVal )) * 60
		var now = new Date()
		var endTime = (new Date()).add( plusMin ).minutes()
		endTime =      ( endTime ).add( plusSec ).seconds()
		//console.log( ">>>", plusMin, plusSec, endTime )
		var newT = {
			label: j('#addTimerLabel').val(),
			start: now,
			end: endTime,
			delta: (endTime - now) / 60/1000 // x.y => min.seconds(1/10 fraction)
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



