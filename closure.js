"use strict";

var creaAgente = function(_edad){
	 var edad = _edad;
	 return{
	 	/*ponNombre: function(nuevoNombre){
	 		nombre = nuevoNombre;
	 	} */
	 	dimeEdad : function(){
	 		console.log("yo tengo " + edad + " años");
	 		return edad;
	 	}
	 }
};

var agente = creaAgente(30);
var agente2 = creaAgente(20);

console.log(agente.dimeEdad(), agente2.dimeEdad());

setTimeout(agente.dimeEdad, 1000);
setTimeout(agente2.dimeEdad, 1000);

