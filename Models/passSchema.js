var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passSchema = new mongoose.Schema({
	category : {
		type: String,
	},
	registration : {
		type: String,
	},
	validityFrom : {
		type: Date,
	},
	validityTo : {
		type: Date,
	},
	name : {
		type: String,
	},
	age : {
		type: String,
	},
	address : {
		type: String,
	},
	phone : {
		type: String,
	},
	balance : {
		type: Number,
	},
})

module.exports =  mongoose.model('passes', passSchema);