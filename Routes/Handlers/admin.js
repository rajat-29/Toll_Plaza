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

app.use('/addnewCategory',adminController.addnewCategory);

app.use('/checkcategory',adminController.checkcategory);

app.use('/showcategories',adminController.showcategories);

app.use('/category/:pro',adminController.category);

app.use('/addnewuser',adminController.addnewuser);

app.use('/checkemail',adminController.checkemail);

app.use('/showStaff',adminController.showStaff);

app.use('/students/:pro',adminController.students);

app.use('/categoryOptions',adminController.categoryOptions);

app.use('/addnewpass',adminController.addnewpass);

app.use('/showPass',adminController.showPass);

app.use('/passes/:pro',adminController.passes);

app.use('/findBetweenDatePass',adminController.findBetweenDatePass);

app.use('/FindpassesCount',adminController.FindpassesCount);

app.use('/FindpassesSale',adminController.FindpassesSale);

app.use('/showReceipts',adminController.showReceipts);

app.use('/FindreceiptCount',adminController.FindreceiptCount);

app.use('/FindreceiptSale',adminController.FindreceiptSale);

app.use('/receipts/:pro',adminController.receipts);

module.exports = app;