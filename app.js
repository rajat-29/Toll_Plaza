var express = require('express');
var path = require('path');
var app = express();
var session = require('express-session');
var ejs = require('ejs');
var mongodb = require('mongodb');
var port = 8000;

app.use(express.static(path.join(__dirname,'/public')))

var mongoose = require('mongoose');
var mongoDb = 'mongodb://localhost/tollManagement';

mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDb, {useNewUrlParser : true});

app.use(express.urlencoded({extended: true}))
app.use(express.json())                 /*include express*/
app.use(session({
    secret: "xYzUCAchitkara",
    resave: false,
    saveUninitialized: false,
    clear_interval: 900,
    //store : new mongoStore({mongooseConnection:db}),
    autoRemove: 'native',
    cookie: {maxAge: 3000000}
}))

mongoose.connection.on('error', (err) => {
	console.log('DB connection error');
})

mongoose.connection.on('connected', (err) => {
	console.log('DB connected');
})

app.use('/login',require('./Routes/login'));   // Routing the routes //

app.listen(port, () => {
	console.log('Running on port ' +port);
});