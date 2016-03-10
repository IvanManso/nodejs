"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = mongoose.model("User");
/* GET users listing. */
router.get("/", function(req, res) {

	var sort = rep.query.sort || "name";

    User.list(sort, function(err, rows) {
        if (err) {
            res.json({ result: false, err: err });
            return;
        }
        //lo mando en JSON
        res.json({ result: true, rows: rows });
    });
});

//user.getUsers(function(err,users){

//});

//Añadimos la funcionalidad de usuarios
router.post("/", function(req, res) {
    var user = new User(req.body);
    //lo guardamos en la BD
    user.save(function(err, newRow) {
        if (err) {
            res.json({ result: false, err: err });
            return;
        }
        res.json({ result: true, newRow: newRow });
    });
});

//Actualizar un user
router.put("/:id", function(req, res) {

    User.update({ _id: req.params.id }, { $set: req.body }, { multi: true }, function(err, data) {
        if (err) {
            res.json({ result: false, err: err });
            return;
        }
        res.json({ result: true, row: data });

    });
});

/*User.find({ _id: req.params.id }, function(err, row) {
    if (err) {
        res.json({ result: false, err: err });
        return;
    }
    if (!row) {
        res.json({ result: false, err: "NOT FOUND" });
        return;
    }

    Object.assign(row, req.body);
    row.save(function(err, rowSaved) {
        if (err) {
            res.json({ result: false, err: err });
            return;
        }
        res.json({ result: true, rowSave: rowSaved });
    }); */



module.exports = router;
