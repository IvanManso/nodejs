"use strict";

var async = require("async");

console.log("Comienzo");

var escribeTras2Segundos = function(texto, callback){
	setTimeout(function(){
		console.log(texto);
		callback();
	}, 2000);

};

function enSerie(arr, fn){
	if(arr.length == 0){
		console.log("Fin");
		return;
	}
	// para comprobar el tipo de fn -> console.log(typeof fn);
	fn("texto" + arr.shift(), function(){
		enSerie(arr, fn);
	});
}

enSerie([1,2,3,4,5], escribeTras2Segundos);
