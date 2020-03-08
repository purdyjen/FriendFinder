var express = require("express");
var path = require("path");
var app = express();


app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, 'app/public/survey.html'));
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'app/public/home.html'));
})