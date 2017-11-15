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
    let lists = [
        { "id": 1, "title": "Favorites", "system": 1},
        { "id": 2, "title": "Music for programming", "system": 0},
        { "id": 3, "title": "Driving", "system": 0},
        { "id": 5, "title": "Fox house", "system": 0},
    ]
    res.send(lists)
})

app.get('/alltracks', function(req, res){
    let tracks = [
        { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
        { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" }
    ]
        res.send(tracks)
})

app.listen(8080)