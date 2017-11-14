'use strict'

var express = require('express');
var app = express();

app.use(express.json())
app.use('/assets', express.static('../assets'))
express.json.type = "application/json"

app.get('/', function(req, res){
    res.sendFile(__dirname + '/player.html');  
})

app.get('/playlists', function(req, res){
    res.send([{name: "mylist"}, {name: "mylist2"}])
})

app.listen(8080)