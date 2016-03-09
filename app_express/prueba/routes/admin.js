"use strict";

var express = require('express');
var router = express.Router();

router.get("/", function(req, res){  //next es opcional
	//http://localhost:3000/admin/?hola=55
	console.log(req.query);
	res.send("Hola express");

});

router.get("/:id[(0-9)+]/piso/:piso(A|B|C)", function(req, res){ //los filtros más específicos antes de los más genéricos
	console.log(req.params, "el id es", req.params.id, "el piso es", req.params.piso);
	res.send("Hola express");
});

router.get("/:id[(0-9)+]", function(req, res){ //los filtros más específicos antes de los más genéricos
	console.log(req.params, "el id es", req.params.id);
	res.send("Hola express");
});

router.get("/:id", function(req, res){  //next es opcional
	//http://localhost:3000/admin/5
	console.log(req.params);
	res.send("Hola express");
});

router.post("/", function(req, res){
	//post a http://localhost:3000/admin
	console.log(req.body);
	res.send("body recogido");
});



module.exports = router;