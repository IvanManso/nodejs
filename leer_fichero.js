"use strict";

var fs = require("fs");

fs.readFile('./package.json', {encoding: "utf8"}, function(error, data){
	if(error){
		console.log("Ha habido un error: \n", error);
	}
	else{  //o lanzar excepción o return; o return console.log(...);
		var paquete = JSON.parse(data); //package palabra reservada en uso estricto
 		console.log("Los datos del fichero son: \n", paquete);
	}
	console.log("FIN");
});