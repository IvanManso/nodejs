"use strict";

var eventEmitter = new (require('events')).EventEmitter(); //otra manera en vez de asignar una variable con require

eventEmitter.on("llamada de telefono", function(){
	console.log("Ring Ring!");
});

eventEmitter.on("llamada de telefono", function(){
	console.log("brr brr");
});

eventEmitter.emit("llamada de telefono");