var express = require('express');
var router = express.Router();
var user = require("../models/userModel");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/form', function(req, res, next) {

	user.getUsers(function(err, users){
		//cuando estén disponibles los mando a la vista
		res.render("user_form", {users: users});
	});
});

module.exports = router;
