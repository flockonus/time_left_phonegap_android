$(function(j){
  
  var Transitions = {}
  // uma funcao que...
  // - faça slide de uma tela branca com os dados que eu preciso capturar, no tamanho certo.
  
  Transitions.showAdd = function( id ) {
  	
  	var jAddContent = j(id)
  	var w = ( 100 * parseFloat(jAddContent.css('width')) / parseFloat(jAddContent.parent().css('width')) );
  	
  	if( w <= 5 )
  		jAddContent.show()
  	
  	if( w <= 68 ){
  		jAddContent.css('width', (w+2.5)+"%")
  		setTimeout( Transitions.showAdd, 20, id)
  	} else { // Appear done
  		j('#addCont').text('✕')
  	}
  };
  
  Transitions.hideAdd = function( id ) {
  	
  	var jAddContent = j(id)
  	var w = ( 100 * parseFloat(jAddContent.css('width')) / parseFloat(jAddContent.parent().css('width')) );
  	
  	if( w >= 3.5 ){
  		jAddContent.css('width', (w-3.5)+"%")
  		setTimeout( Transitions.hideAdd, 20, id)
  	} else { // Hidding done
  		j('#addCont').text('≡')
  		jAddContent.hide()
  	}
  };
  
  
  window.Transitions = Transitions
  
})