const bcrypt = require('bcrypt');
let saltRounds = 10

var category = require('../Models/categorySchema');
var users = require('../Models/userSchema');
var passes = require('../Models/passSchema');
var receipts = require('../Models/receiptSchema');

exports.addnewCategory = (req,res) => {
  req.body.createBy = req.session.name;
  category.create(req.body,function(error,result)
  {
    if(error)
      throw error;
    else{
     res.send("data saved");
    }
  })
}

exports.checkcategory = (req, res) => {
     category.findOne({name: req.body.name}, function(error,result)
      {
        if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send("true");
      })
}

exports.showcategories = (req, res) => {
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
}

exports.category = (req,res) => {
      var id = req.params.pro.toString();
      category.deleteOne({ "_id": id },function(err,result)
      {
          if(err)
          throw error
          else 
            res.send("data deleted SUCCESFULLY")
      });
 }

exports.addnewuser = (req,res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if(!err) {
      req.body.password = hash;
      users.create(req.body,function(error,result)
      {
        if(error)
        throw error;
        else{}
      })         
    }
    else {}
  }) 
  res.send("data saved");
}

exports.checkemail = (req, res) => {
     users.findOne({email: req.body.email}, function(error,result)
      {
        if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send("true");
      })
}

exports.showStaff = (req, res) => {
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
}

exports.students = (req,res) => {
      var id = req.params.pro.toString();
      users.deleteOne({ "_id": id },function(err,result) {
          if(err)
          throw error
          else
              res.send("data deleted SUCCESFULLY")
      });
}

exports.categoryOptions = (req, res) => {
    category.find({status: 'Active'}, function(error,result) {
        if(error)
        throw error;
        else
          res.send(JSON.stringify(result));
    })
}

exports.addnewpass = (req,res) => {
  passes.create(req.body,function(error,result) {
        if(error)
        throw error;
        else{}
  })         
  res.send("data saved");
}

exports.showPass = (req, res) => {
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
}

exports.passes = (req,res) => {
      var id = req.params.pro.toString();
      passes.deleteOne({ "_id": id },function(err,result) {
          if(err)
          throw error
          else
              res.send("data deleted SUCCESFULLY")
      });
}

exports.FindpassesCount = (req,res) => {
  passes.aggregate(
         [{
          $project : {
            month : {$month : "$issueDate"},
            year : {$year : "$issueDate"},
            balance : 1
          }},
          {
            $group : {
              _id : {month : "$month",year : "$year"},
              total : {$sum : 1}
            }}
         ],function (err,result) {
           res.send(result)
         })
}

exports.FindpassesSale = (req,res) => {
  passes.aggregate(
         [{
          $project : {
            month : {$month : "$issueDate"},
            year : {$year : "$issueDate"},
            balance : 1
          }},
          {
            $group : {
              _id : {month : "$month",year : "$year"},
              total : {$sum : "$balance"}
            }}
         ],function (err,result) {
           res.send(result);
         })
}

exports.showReceipts = (req, res) => {
  let query = {};
  let params = {};

  if(req.body.search.value) {
     query["$or"]= [{
            "category":  { '$regex' : req.body.search.value, '$options' : 'i' }
        }, {
            "vehicleNumber":{ '$regex' : req.body.search.value, '$options' : 'i' }
        },{
            "entryDate": { '$regex' : req.body.search.value, '$options' : 'i' }
        },{
            "address":  { '$regex' : req.body.search.value, '$options' : 'i' }
        },{
            "trip": { '$regex' : req.body.search.value, '$options' : 'i' }
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
        params = {skip : parseInt(req.body.start) , limit : parseInt(req.body.length), sort : {}};

        receipts.find(query , {} , params , function (err , data)
        {
            if(err)
                console.log(err);
            else {
                receipts.countDocuments(query, function(err , filteredCount)
                {
                    if(err)
                        console.log(err);
                    else {
                        receipts.countDocuments(function (err, totalCount)
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
}

exports.FindreceiptCount = (req,res) => {
  receipts.aggregate(
         [{
          $project : {
            month : {$month : "$receiptdate"},
            year : {$year : "$receiptdate"},
            cost : 1
          }},
          {
            $group : {
              _id : {month : "$month",year : "$year"},
              total : {$sum : 1}
            }}
         ],function (err,result) {
           res.send(result);
         })
}

exports.FindreceiptSale = (req,res) => {
  receipts.aggregate(
         [{
          $project : {
            month : {$month : "$receiptdate"},
            year : {$year : "$receiptdate"},
            cost : 1
          }},
          {
            $group : {
              _id : {month : "$month",year : "$year"},
              total : {$sum : "$cost"}
            }}
         ],function (err,result) {
           res.send(result);
         })
}

exports.receipts = (req,res) => {
      var id = req.params.pro.toString();
      receipts.deleteOne({ "_id": id },function(err,result)
      {
          if(err)
          throw error
          else
              res.send("data deleted SUCCESFULLY")
      });
}