let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../public')));

var mongoose = require('mongoose')
var users = require('../Models/userSchema');
var category = require('../Models/categorySchema');
var passes = require('../Models/passSchema');

var auth = require('../MiddleWares/auth');

app.get('/addCategory',auth, function(req,res) {
	res.render('add_category');
})

app.post('/addnewCategory',auth, function(req,res) {
     category.create(req.body,function(error,result)
      {
        if(error)
        throw error;
        else{}
      })
     res.send("data saved");
})

app.post('/checkcategory',auth,function (req, res) {
     category.findOne({name: req.body.name}, function(error,result)
      {
        if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send("true");
      })
})

app.get('/manageCategory',auth, function(req,res) {
  res.render('manage_category');
})

app.post('/showcategories' ,auth, function(req, res) {
    let query = {};
    let params = {};

    if(req.body.search.value)
        query.name = {"$regex" : req.body.search.value , "$options" : "i"};

    let sortingType;
    if(req.body.order[0].dir === 'asc')
        sortingType = 1;
    else
        sortingType = -1;

    if(req.body.order[0].column === '0')
        params = {skip : parseInt(req.body.start) , limit : parseInt(req.body.length), sort : {name : sortingType}};

    category.find(query , {} , params , function (err , data)
        {
            if(err)
                console.log(err);
            else {
                category.countDocuments(query, function(err , filteredCount)
                {
                    if(err)
                        console.log(err);
                    else {
                        category.countDocuments(function (err, totalCount)
                        {
                            if(err)
                                console.log(err);
                            else
                                res.send({"recordsTotal": totalCount,
                                    "recordsFiltered": filteredCount, data});
                        })
                    }
                });
            }
        })
})

app.delete('/category/:pro',auth,function(req,res) {
      var id = req.params.pro.toString();
      category.deleteOne({ "_id": id },function(err,result)
      {
          if(err)
          throw error
          else 
            res.send("data deleted SUCCESFULLY")
      });
 })

app.get('/addStaff',auth, function(req,res) {
  res.render('add_staff');
})

app.post('/addnewuser',auth, function(req,res) {
  users.create(req.body,function(error,result)
  {
        if(error)
        throw error;
        else{}
  })         
  res.send("data saved");
})

app.post('/checkemail',auth,function (req, res) {
     users.findOne({email: req.body.email}, function(error,result)
      {
        if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send("true");
      })
})

app.get('/manageStaff',auth, function(req,res) {
  res.render('manage_staff');
})

app.post('/showStaff' ,auth, function(req, res) {
  let query = {};
  let params = {};

  if(req.body.search.value) {
     query["$or"]= [{
            "name":  { '$regex' : req.body.search.value, '$options' : 'i' }
        }, {
            "email":{ '$regex' : req.body.search.value, '$options' : 'i' }
        },{
            "role": { '$regex' : req.body.search.value, '$options' : 'i' }
        },{
            "phone":  { '$regex' : req.body.search.value, '$options' : 'i' }
        }]
  }
  else{
      delete query["$or"];
  }
  
  let sortingType;
  if(req.body.order[0].dir === 'asc')
    sortingType = 1;
  else
    sortingType = -1;

    if(req.body.order[0].column === '0')
        params = {skip : parseInt(req.body.start) , limit : parseInt(req.body.length), sort : {phone : sortingType}};

        users.find(query , {} , params , function (err , data)
        {
            if(err)
                console.log(err);
            else {
                users.countDocuments(query, function(err , filteredCount)
                {
                    if(err)
                        console.log(err);
                    else {
                        users.countDocuments(function (err, totalCount)
                        {
                            if(err)
                                console.log(err);
                            else
                                res.send({"recordsTotal": totalCount,
                                    "recordsFiltered": filteredCount, data});
                        })
                    }
                });
            }
        })
})

app.delete('/students/:pro',auth,function(req,res) {
      var id = req.params.pro.toString();
      users.deleteOne({ "_id": id },function(err,result)
      {
          if(err)
          throw error
          else
              res.send("data deleted SUCCESFULLY")
      });
})

app.get('/addPass',auth, function(req,res) {
  res.render('add_pass');
})

app.get('/categoryOptions',auth,function (req, res)  {
    category.find({status: 'Active'}, function(error,result)
    {
        if(error)
        throw error;
        else
          res.send(JSON.stringify(result));
    })
})

app.post('/addnewpass',auth, function(req,res) {
  passes.create(req.body,function(error,result)
  {
        if(error)
        throw error;
        else{}
  })         
  res.send("data saved");
})

app.get('/managePass',auth, function(req,res) {
  res.render('manage_pass');
})

app.post('/showPass' ,auth, function(req, res) {
  let query = {};
  let params = {};

  if(req.body.search.value) {
     query["$or"]= [{
            "category":  { '$regex' : req.body.search.value, '$options' : 'i' }
        }, {
            "registration":{ '$regex' : req.body.search.value, '$options' : 'i' }
        },{
            "name": { '$regex' : req.body.search.value, '$options' : 'i' }
        },{
            "address":  { '$regex' : req.body.search.value, '$options' : 'i' }
        },{
            "phone": { '$regex' : req.body.search.value, '$options' : 'i' }
        },{
            "balance":  { '$regex' : req.body.search.value, '$options' : 'i' }
        }]
  }
  else{
      delete query["$or"];
  }
  
  let sortingType;
  if(req.body.order[0].dir === 'asc')
    sortingType = 1;
  else
    sortingType = -1;

    if(req.body.order[0].column === '0')
        params = {skip : parseInt(req.body.start) , limit : parseInt(req.body.length), sort : {phone : sortingType}};

        passes.find(query , {} , params , function (err , data)
        {
            if(err)
                console.log(err);
            else {
                passes.countDocuments(query, function(err , filteredCount)
                {
                    if(err)
                        console.log(err);
                    else {
                        passes.countDocuments(function (err, totalCount)
                        {
                            if(err)
                                console.log(err);
                            else
                                res.send({"recordsTotal": totalCount,
                                    "recordsFiltered": filteredCount, data});
                        })
                    }
                });
            }
        })
})
 
app.delete('/passes/:pro',auth,function(req,res) {
      var id = req.params.pro.toString();
      passes.deleteOne({ "_id": id },function(err,result)
      {
          if(err)
          throw error
          else
              res.send("data deleted SUCCESFULLY")
      });
})

module.exports = app;