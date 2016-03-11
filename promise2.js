"use strict";

function conArroz(plato){
	return new Promise(function(resolve,reject){
		resolve(plato + " " +"arroz");
	});
}

function conAjo(plato){
	return new Promise(function(resolve,reject){
		resolve(plato + " " + "ajo");
		//resolve(plato + " " +"ajo");
	});
}

function conSal(plato){
	return new Promise(function(resolve,reject){
		resolve(plato + " " +"sal");
	});
}

function con(plato, ing){
	return new Promise(function(resolve,reject){
		resolve(plato + " " + ing);
	});
}

var paella = "paella con";

conArroz(paella)
	.then(conAjo)
	.then(function(plato){
		console.log("TRACE", plato);
		return con(plato, "pimiento");
	})
	.then(conSal) //va concatenando el resultado del anterior
	.then(function(plato){
		console.log("plato" + " " + plato);
	})
	.then(function(algo){
		console.log("algo" + " " + algo);
	})
	.catch(function(err){
		console.error("ERROR", error)
	});
