let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../../public')));

var auth = require('../../MiddleWares/auth');

let adminController = require('../../Controllers/admin');

app.get('/addCategory',auth, function(req,res) {
	res.render('add_category',{data:req.session});
})

app.get('/manageCategory',auth, function(req,res) {
  res.render('manage_category',{data:req.session});
})

app.get('/addStaff',auth, function(req,res) {
  res.render('add_staff',{data:req.session});
})

app.get('/manageStaff',auth, function(req,res) {
  res.render('manage_staff',{data:req.session});
})

app.get('/addPass',auth, function(req,res) {
  res.render('add_pass',{data:req.session});
})

app.get('/managePass',auth, function(req,res) {
  res.render('manage_pass',{data:req.session});
})

app.get('/passCount',auth, function(req,res) {
  res.render('passCount',{data:req.session});
})

app.get('/passSales',auth, function(req,res) {
  res.render('passSales',{data:req.session});
})

app.get('/manageReceipts',auth, function(req,res) {
  res.render('manageReceipts',{data:req.session});
})

app.get('/receiptCount',auth, function(req,res) {
  res.render('receiptCount',{data:req.session});
})

app.get('/receiptSales',auth, function(req,res) {
  res.render('receiptSales',{data:req.session});
})

// controllers //

app.use('/addnewCategory',auth,adminController.addnewCategory);

app.use('/checkcategory',auth,adminController.checkcategory);

app.use('/showcategories',auth,adminController.showcategories);

app.use('/deleteCategory/:pro',auth,adminController.deleteCategory);

app.use('/addnewuser',auth,adminController.addnewuser);

app.use('/checkemail',auth,adminController.checkemail);

app.use('/showStaff',auth,adminController.showStaff);

app.use('/deleteStaff/:pro',auth,adminController.deleteStaff);

app.use('/categoryOptions',auth,adminController.categoryOptions);

app.use('/addnewpass',auth,adminController.addnewpass);

app.use('/showPass',auth,adminController.showPass);

app.use('/deletePass/:pro',auth,adminController.deletePass);

app.use('/FindpassesCount',auth,adminController.FindpassesCount);

app.use('/FindpassesSale',auth,adminController.FindpassesSale);

app.use('/showReceipts',auth,adminController.showReceipts);

app.use('/FindreceiptCount',auth,adminController.FindreceiptCount);

app.use('/FindreceiptSale',auth,adminController.FindreceiptSale);

app.use('/deleteReceipt/:pro',auth,adminController.deleteReceipt);

module.exports = app;