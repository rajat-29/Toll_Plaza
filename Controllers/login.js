const bcrypt = require('bcrypt');
let saltRounds = 10

var users = require('../Models/userSchema');
var category = require('../Models/categorySchema');
var passes = require('../Models/passSchema');
var receipts = require('../Models/receiptSchema');

exports.checkLogin = (req, res) => {
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
}

exports.changePasswordDatabase = (req,res) => {
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
    res.send("Password Changed Successfully")
}

exports.totalNoofUsers = (req, res) => {
      users.countDocuments(function(e,count){
          res.send(JSON.stringify(count));
   });
}

exports.totalNoofCategory = (req, res) => {
      category.countDocuments(function(e,count){
          res.send(JSON.stringify(count));
   });
}

exports.totalNoofPasses = (req, res) => {
   passes.countDocuments(function(e,count){
          res.send(JSON.stringify(count));
   });
}

exports.totalReceiptsToday = (req, res) => {
    receipts.countDocuments({entryDate: req.body.entryDate}, function(error,count) {
        res.send(JSON.stringify(count));
    })
}