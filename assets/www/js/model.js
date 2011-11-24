/*
 * Implements persistence using Phonegap localStorage API
 * 
 * - http://docs.phonegap.com/en/1.2.0/phonegap_storage_storage.md.html
 * 
 * **This could become a module by itself, handy
 */

j = $;


(function(){
	
	/*
	 */
	var Models = function( modelName ){
		/*if( window.openDatabase ){
			this.db = window.openDatabase("TimeLeft", "1.0", "TimeLeft DB", 500*1024);
		} else {
			this.db = null
		}*/
		this.reg = new RegExp("^"+modelName+"\\.(.+)")
		
		console.log( this.reg );
		
		this.lastKey = this.findLastID();
	};
	
	Models.prototype.loadAll = function() {
		var k = null
	  var all = []
		
		for( k in localStorage ){
			if( localStorage.hasOwnProperty(k) ){
				// only recon keys on format: ["timeLeft.1", "1"]
				var matchResult = k.match( this.reg )
				if( matchResult && matchResult.length == 2 ){
					console.log('key', k, localStorage.getItem(k) )
					// TODO collect inside var all
				} else {
					console.log('ignored', k, localStorage.getItem(k) )
				}
			}
		}
		
		// TODO sort all by finishTime attr, and return
	};
	
	Models.prototype.add = function() {
		
	}
	
	Models.prototype.remove = function() {
		
	}
	
	// iterates all valid entries and finds the current last id
	Models.prototype.findLastID = function() {
		// FIXME
		return 1
	}
	
	window.modules.Models = Models;
	
})()



