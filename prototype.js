"use strict";

//creamos una función contructor

//var eventEmitter = newEventEmitter(); //otra manera en vez de asignar una variable con require


var Persona = function(name){
	this.name = name;
};


//crear una instancia

var luis = new Persona("luis");

console.log(luis.name);

//cambiar su prototype (para añadir métodos a el prototype de ese objeto)

Persona.prototype.saluda = function(){
	console.log("Un saludo " + this.name);
}

luis.saluda();

//herencia

var Agente = function(name){
	//ejectuamos el constructor heredado (le decimos a persona que coja el name de Agente)
	Persona.call(this, name);
};

Agente.prototype = new Persona("soy un prototype"); // el texto "soy un prototype" es el nombre del prototype asignado a agente

var smith = new Agente("smith");

smith.saluda();

console.log(Object.getPrototypeOf(smith));
console.log(smith instanceof Agente);
console.log(smith instanceof Persona);
console.log(smith instanceof Object);
console.log(luis instanceof Agente);

//Ejemplo con herencia de event

var extend = require("util")._extend;

var EventEmitter = require("events").EventEmitter;



Persona.prototype = extend(Persona.prototype, EventEmitter.prototype);

luis.on("dash!", function(data){
	console.log("Dash dash!", data);
});

//sólo sirve para emitir eventos que hayan sido creados en este mismo script

luis.emit("dash!", "ash! sh! h! !");

process.on("exit", function(){
	luis.emit("dash!", "el programa termina!"); //data = "el programa termina!"
});
