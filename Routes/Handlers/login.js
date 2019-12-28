let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../../public')));

var auth = require('../../MiddleWares/auth');

let loginController = require('../../Controllers/login');

app.get('/home',auth, function (req,res) {
  res.render('dashboard',{data:req.session});
})

app.get('/changePassword',auth, function(req,res) {
      res.render('changePassword');
})

app.get('/logout_person',auth, function(req,res) {
    req.session.isLogin = 0;
    req.session.destroy();
    res.render('index');
})

// controllers //

app.use('/checkLogin',loginController.checkLogin);

app.use('/changePasswordDatabase',loginController.changePasswordDatabase);

app.use('/totalNoofUsers',loginController.totalNoofUsers);

app.use('/totalNoofCategory',loginController.totalNoofCategory);

app.use('/totalNoofPasses',loginController.totalNoofPasses);

app.use('/totalReceiptsToday',loginController.totalReceiptsToday);

module.exports = app;