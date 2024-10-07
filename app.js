var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/Kjonnsroller', function(req, res) {
  res.render('pages/Kjonnsroller');
});

app.get('/DemokratiUke41', function(req, res) {
  res.render('pages/DemokratiUke41');
});

app.get('*', function(req, res){
    res.render('pages/index');
});

app.listen(80);