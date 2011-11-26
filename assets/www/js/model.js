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
	var Model = function( modelName ){
		/*if( window.openDatabase ){
			this.db = window.openDatabase("TimeLeft", "1.0", "TimeLeft DB", 500*1024);
		} else {
			this.db = null
		}*/
		this.modelName = modelName
		this.reg = new RegExp("^"+modelName+"\\.(.+)")
		this.lastKey = this.findLastID();
	};
	
	if( !( JSON && JSON.stringify && JSON.parse) ){
		throw( new Error("Expected JSON object to be defined with stringify && parse!") )
	}
	
	// 0.o
	var encodeData = JSON.stringify
	
	// fix Date
	var decodeData = function( jsonString ) {
		var obj
		if( !(jsonString && typeof(jsonString) === 'string') )
			return null
		
		obj = JSON.parse( jsonString )
		
		// inspired by -> http://blog.activa.be/index.php/2010/03/handling-dates-in-json-responses-with-jquery-1-4-the-easy-way/
		var dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/
		var prop
		for( prop in obj )
			if ( obj.hasOwnProperty(prop) && typeof obj[prop] === 'string' && dateRegex.exec(obj[prop]))
				obj[prop] = new Date( obj[prop] )
		
		return obj
	};
	
	Model.prototype.loadAll = function( sort_prop, sort_order ) {
		var k = null
	  var all = []
		
		for( k in localStorage ){
			if( localStorage.hasOwnProperty(k) ){
				// only recon keys on format: ["timeLeft.1", "1"]
				var matchResult = k.match( this.reg )
				if( matchResult && matchResult.length == 2 )
					all.push( decodeData( localStorage.getItem(k) ) )
					
					//console.log('key', k, localStorage.getItem(k) )
				//} else {
				//	console.log('ignored', k, localStorage.getItem(k) )
				//}
			}
		}
		
		
		if( typeof( sort_prop ) == 'string' ){
			// TODO sort all by some property and order||ASC
			
		}
		
		return all
	};
	
	Model.prototype.get = function( id ){
		return decodeData( localStorage.getItem(this.modelName+'.'+id) )
	}
	
	Model.prototype.last = function( obj ){
		// FIXME this could fail if deleted/empty
		return this.get( this.lastKey )
	}
	
	Model.prototype.add = function( obj ){
		this.lastKey++
		obj._id = this.lastKey
		// does rely on being a JSON on client
		localStorage.setItem(this.modelName+'.'+this.lastKey, encodeData( obj ) )
		return obj._id
	}
	
	Model.prototype.remove = function(id){
		localStorage.removeItem( this.modelName+'.'+id )
	}
	
	// iterates all valid entries and finds the current last id
	Model.prototype.findLastID = function() {
		var last = 0
		// could be optimized by not using loadAll
		var all = this.loadAll()
		var i = 0
		for (; i < all.length; i++) {
			//console.log('elem', all[i])
			if(all[i]._id || 0 > last )
				last = all[i]._id
		};
		return last
	}
	
	window.modules.Model = Model;
	
})()



