var express = require('express');
var path = require('path');
var app = express();
var mongodb = require('mongodb');
var port = 8000;

app.use(express.static(path.join(__dirname,'/public')))

var mongoose = require('mongoose');
var mongoDb = 'mongodb://localhost/tollManagement';

mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDb, {useNewUrlParser : true});

mongoose.connection.on('error', (err) => {
	console.log('DB connection error');
})

mongoose.connection.on('connected', (err) => {
	console.log('DB connected');
})

app.listen(port, () => {
	console.log('Running on port ' +port);
});