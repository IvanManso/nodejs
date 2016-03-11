"use strict";

var sleep = function(ms) { //al usar promesas no necesitas devolver callback
    var ms = 1000;
    var promesa = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (ms % 2 !== 0) {
                reject(new Error("Fatal"));
                return;
            }
            resolve({ name: "Jones" });
            return;
        }, ms);
    });
    return promesa;
};

var promesa = sleep(1000); //promesa sólo se encuentra definido dentro de la función

console.log(promesa);

promesa
    .then(sleep)
    .then(sleep)
    .then(sleep)
    .then(function(datos) {
        console.log("Promesa completada", datos);
    }).catch(function(err) {
        console.error("ERROR", err);
    });
