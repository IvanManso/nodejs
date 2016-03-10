var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/form", function(req, res, next){
	var User = mongoose.model("User");
	User.list(function(err, rows){
		res.render("user_form",{users:rows});
	});
});

//user.getUsers(function(err,users){

//});
module.exports = router;
