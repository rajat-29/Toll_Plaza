let express = require('express');
var app = require('express').Router();
let path = require('path');
app.use(express.json())

app.use(express.static(path.join(__dirname,'../public')));

var mongoose = require('mongoose')
var receipts = require('../Models/receiptSchema');
var passes = require('../Models/passSchema');

var auth = require('../MiddleWares/auth');

app.get('/addReceipts',auth, function(req,res) {
	res.render('addReceipts');
})

app.post('/addnewreceipt',auth, function(req,res) {
  receipts.create(req.body,function(error,result)
  {
        if(error)
        throw error;
        else{}
  })         
  res.send("data saved");
})

app.post('/twoWayCheck',auth,function (req, res) {
     receipts.findOne({vehicleNumber: req.body.vehicleNumber,entryDate: req.body.entryDate}, function(error,result)
      {
        if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send("true");
      })
})

app.get('/passUser',auth, function(req,res) {
  res.render('passUser');
})

app.post('/passVehicle',auth,function (req, res) {
     passes.findOne({registration: req.body.vehicleNumber}, function(error,result)
      {
        if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send(result);
      })
})

app.post('/reducePassBalance',auth, function(req,res) {  
        passes.updateOne( {"registration" : req.body.registration}, {$set : req.body } , function(err,result)
        {
          if(err)
          throw err
          else 
            res.send("DATA UPDATED SUCCESFULLY")
        })
})

module.exports = app;