var receipts = require('../Models/receiptSchema');
var passes = require('../Models/passSchema');

exports.addnewreceipt = (req,res) => {
  receipts.create(req.body,function(error,result)
  {
        if(error)
        throw error;
        else{}
  })         
  res.send("data saved");
}

exports.twoWayCheck = (req, res) => {
     receipts.findOne({vehicleNumber: req.body.vehicleNumber,entryDate: req.body.entryDate}, function(error,result)
      {
        if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send("true");
      })
}

exports.passVehicle = (req, res) => {
     passes.findOne({registration: req.body.vehicleNumber}, function(error,result)
      {
        if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send(result);
      })
}

exports.reducePassBalance = (req,res) => {  
        passes.updateOne( {"registration" : req.body.registration}, {$set : req.body } , function(err,result)
        {
          if(err)
          throw err
          else 
            res.send("DATA UPDATED SUCCESFULLY")
        })
}