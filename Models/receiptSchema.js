var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var receiptSchema = new mongoose.Schema({
	category : String,
	vehicleNumber : String,
	entryDate : String,
	entryTime : String,
	trip : String,
	cost : Number,
})

module.exports =  mongoose.model('receiptes', receiptSchema);