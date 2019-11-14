var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var receiptSchema = new mongoose.Schema({
	category : String,
	vehicleNumber : String,
	entryDate : Date,
	trip : String,
	cost : Number,
})

module.exports =  mongoose.model('receiptes', receiptSchema);