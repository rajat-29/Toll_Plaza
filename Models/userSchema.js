var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name : String,
	email : String,
	password : String,
	address : String,
	gender : String,
	role : String,
	phone : String,
	dob : String,
})

module.exports =  mongoose.model('staffs', userSchema);