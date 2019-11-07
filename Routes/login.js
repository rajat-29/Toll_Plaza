let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../public')));

var mongoose = require('mongoose')
var users = require('../Models/userSchema');

var auth = require('../MiddleWares/auth');

app.post('/checklogin',function (req, res)  {
    req.session.isLogin = 0;
    users.findOne({email: req.body.name}, function(error,result)
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

module.exports = app;