let express = require('express');
var app = require('express').Router();
let path = require('path');
const bcrypt = require('bcrypt');
let saltRounds = 10

app.use(express.static(path.join(__dirname,'../public')));

var mongoose = require('mongoose')
var users = require('../Models/userSchema');
var category = require('../Models/categorySchema');
var passes = require('../Models/passSchema');
var receipts = require('../Models/receiptSchema');

var auth = require('../MiddleWares/auth');

app.post('/checkLogin',function (req, res)  {
    req.session.isLogin = 0;
    users.findOne({email: req.body.name}, function(error,result)
    {
        if(error)
        throw error;

        if(!result) 
            res.send("false");
        else {
            bcrypt.compare(req.body.password,result.password,function(err,resi) {
                if(resi == true) {
                    req.session.isLogin = 1;
                    req.session.email = req.body.name;
                    req.session.name = result.name;       
                    req.session.role = result.role;
                    req.session.password = result.password;
                    res.send(req.session);   
                }
                else {
                  res.send("false")
                }
           })    
        }
    })     
})

app.get('/home',auth, function (req,res) {
	res.render('dashboard',{data:req.session});
})

app.get('/changePassword',auth, function(req,res) {
      res.render('changePassword');
})

app.post('/changePasswordDatabase' ,auth, function(req,res){
    if(req.body.oldpass != req.session.password)
      res.send("Incorrect Old Password");
    else {
          bcrypt.hash(req.body.newpass, saltRounds, (err, hash) => {
              if(!err) {
                users.updateOne({"email" : req.session.email},{$set: { "password" : hash}} ,
                  function(error,result)
                  {
                    if(error)
                      throw error;
                    else
                      req.session.password = req.body.newpass;
                  })   
              }
              else {}
          }) 
          res.send("true")
    }
})

app.get('/logout_person',auth, function(req,res) {
    req.session.isLogin = 0;
    req.session.destroy();
    res.render('index');
})

app.get('/totalNoofUsers' ,auth, function(req, res) {
      users.countDocuments(function(e,count){
          res.send(JSON.stringify(count));
   });
})

app.get('/totalNoofCategory' ,auth, function(req, res) {
      category.countDocuments(function(e,count){
          res.send(JSON.stringify(count));
   });
})

app.get('/totalNoofPasses' ,auth, function(req, res) {
   passes.countDocuments(function(e,count){
          res.send(JSON.stringify(count));
   });
})

app.post('/totalReceiptsToday',auth,function (req, res) {
     receipts.countDocuments({entryDate: req.body.entryDate}, function(error,count)
      {
        res.send(JSON.stringify(count));
      })
})

module.exports = app;