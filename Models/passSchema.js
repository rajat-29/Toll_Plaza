var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passSchema = new mongoose.Schema({
	category : String,
	registration : String,
	validityFrom : Date,
	validityTo : Date,
	name : String,
	age : String,
	address : String,
	phone : String,
	balance : Number,
})

module.exports =  mongoose.model('passes', passSchema);