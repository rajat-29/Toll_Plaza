let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../../public')));

var auth = require('../../MiddleWares/auth');

let adminController = require('../../Controllers/admin');

app.get('/addCategory',auth, function(req,res) {
	res.render('add_category');
})

app.get('/manageCategory',auth, function(req,res) {
  res.render('manage_category');
})

app.get('/addStaff',auth, function(req,res) {
  res.render('add_staff');
})

app.get('/manageStaff',auth, function(req,res) {
  res.render('manage_staff');
})

app.get('/addPass',auth, function(req,res) {
  res.render('add_pass');
})

app.get('/managePass',auth, function(req,res) {
  res.render('manage_pass');
})

app.get('/betweenDatesPass',auth, function(req,res) {
  res.render('betweenDatesPass');
})

app.get('/passCount',auth, function(req,res) {
  res.render('passCount');
})

app.get('/passSales',auth, function(req,res) {
  res.render('passSales');
})

app.get('/manageReceipts',auth, function(req,res) {
  res.render('manageReceipts');
})

app.get('/receiptCount',auth, function(req,res) {
  res.render('receiptCount');
})

app.get('/receiptSales',auth, function(req,res) {
  res.render('receiptSales');
})

// controllers //

app.use('/addnewCategory',auth,adminController.addnewCategory);

app.use('/checkcategory',auth,adminController.checkcategory);

app.use('/showcategories',auth,adminController.showcategories);

app.use('/category/:pro',auth,adminController.category);

app.use('/addnewuser',auth,adminController.addnewuser);

app.use('/checkemail',auth,adminController.checkemail);

app.use('/showStaff',auth,adminController.showStaff);

app.use('/students/:pro',auth,adminController.students);

app.use('/categoryOptions',auth,adminController.categoryOptions);

app.use('/addnewpass',auth,adminController.addnewpass);

app.use('/showPass',auth,adminController.showPass);

app.use('/passes/:pro',auth,adminController.passes);

app.use('/findBetweenDatePass',auth,adminController.findBetweenDatePass);

app.use('/FindpassesCount',auth,adminController.FindpassesCount);

app.use('/FindpassesSale',auth,adminController.FindpassesSale);

app.use('/showReceipts',auth,adminController.showReceipts);

app.use('/FindreceiptCount',auth,adminController.FindreceiptCount);

app.use('/FindreceiptSale',auth,adminController.FindreceiptSale);

app.use('/receipts/:pro',auth,adminController.receipts);

module.exports = app;