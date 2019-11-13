let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../public')));

var mongoose = require('mongoose')
var users = require('../Models/userSchema');

var auth = require('../MiddleWares/auth');

app.post('/checklogin',function (req, res)  {
    req.session.isLogin = 0;
    users.findOne({email: req.body.name,password : req.body.password}, function(error,result)
    {
        if(error)
        throw error;

        if(!result) 
            res.send("false");
        else {
                    req.session.isLogin = 1;
                    req.session.email = req.body.name;
                    req.session.name = result.name;       
                    req.session.role = result.role;
                    req.session.password = result.password;
                    res.send(req.session);  
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
                users.updateOne({"email" : req.session.email},{$set: { "password" : req.body.newpass}} ,
                  function(error,result)
                  {
                    if(error)
                      throw error;
                    else
                      req.session.password = req.body.newpass;
                  })   
          res.send("true")
    }
})

app.get('/logout_person',auth, function(req,res) {
    req.session.isLogin = 0;
    req.session.destroy();
    res.render('index');
})

module.exports = app;