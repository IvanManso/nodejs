"use strict";

var async = require("async"); //./modulocreado si lo hubiéramos creado nosotros

console.log("Comienzo");

var escribeTras2Segundos = function(texto, callbackNuestro) {
    setTimeout(function() {
        console.log(texto);
        callbackNuestro();
    }, 1000);
};

async.eachSeries([1, 2, 3, 4, 5], function cada(item, siguiente) {
    escribeTras2Segundos(item, function() {
    	var res = item % 2 ? null : "error"; //un ternario
        siguiente(res);
    })
}, function fin() {
    console.log("Fin");
});
