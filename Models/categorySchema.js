var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new mongoose.Schema({
    name: String,
    status: String,
    createBy: String,
})

module.exports =  mongoose.model('categories', categorySchema);