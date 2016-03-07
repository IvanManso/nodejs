"use strict";

var fs = require("fs");

function versionModulo(moduleName, callback){
	fs.readFile("./node_modules/" + moduleName + "/package.json", {encoding: "utf8"}, function(error, data){
	if(error){
		console.log("Ha habido un error: \n", err);
	}
	else{  //o lanzar excepción o return; o return console.log(...);
		var paquete = JSON.parse(data); //package palabra reservada en uso estricto
		var version = paquete["_nodeVersion"];
 		console.log("La versión del módulo es: \n", version);
	}
	console.log("FIN");
});

}

versionModulo("chance", function(err, str){
	if(err){
		console.log("Ha ocurrido un error: \n", err);
		return;
	}
	console.log("La versión del módulo es: ", str);

});