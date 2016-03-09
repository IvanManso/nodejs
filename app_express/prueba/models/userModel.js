"use strict";

//creamos un modelo

var users = [{
	name: "Smith",
	age: 30
},{
	name: "Dustin",
	age:20
},{
	name: "Juan",
	age:25
}];

var user = {
	getUsers: function(cb){
		//imaginamos que lee un fichero
		var usuariosLeidos = users;

		//devuelvo users
		cb(null, users);
	}
};

module.exports = user;