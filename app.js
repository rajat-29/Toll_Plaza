var express = require('express');
var path = require('path');
var app = express();
var session = require('express-session');
var ejs = require('ejs');
var port = process.env.PORT || 3000;
var http = require('http');
var server = http.Server(app);

require("dotenv").config();

app.set('views', path.join(__dirname, 'views'));  // view engine setup
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')))

// DB //
require("./static/db");

app.use(express.urlencoded({extended: true}))
app.use(express.json())                 /*include express*/
app.use(session({
    secret: "xYzUCAchitkara",
    resave: false,
    saveUninitialized: false,
    clear_interval: 900,
    autoRemove: 'native',
    cookie: {maxAge: 3000000}
}))

app.use('/',require('./Routes/'));

server.listen(port, () => {
	console.log('Running on port ' +port);
});