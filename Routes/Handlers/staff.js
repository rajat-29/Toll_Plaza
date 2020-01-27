let express = require('express');
var app = require('express').Router();
let path = require('path');
app.use(express.json())

app.use(express.static(path.join(__dirname,'../../public')));

var auth = require('../../MiddleWares/auth');

let staffController = require('../../Controllers/staff');

app.get('/addReceipts',auth, function(req,res) {
	res.render('addReceipts',{data:req.session});
})

app.get('/passUser',auth, function(req,res) {
  res.render('passUser',{data:req.session});
})

// controllers //

app.use('/addnewreceipt',auth,staffController.addnewreceipt);

app.use('/twoWayCheck',auth,staffController.twoWayCheck);

app.use('/passVehicle',auth,staffController.passVehicle);

app.use('/reducePassBalance',auth,staffController.reducePassBalance);

module.exports = app;