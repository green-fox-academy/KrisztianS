'use strict'

var express = require('express');
var app = express();

app.use(express.json())
app.use('/assets', express.static('./assets'))
express.json.type = "application/json"

var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "Krisztian",
  password: "12345",
  database: 'bookstore'
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to the database");
  } else {
  console.log("Connection established"); }
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');  
})

app.get('/booktitles', function(req, res){
    conn.query("SELECT book_name FROM book_mast;", function(err, rows){
        var booklist = []
        rows.forEach(function(rows){
            booklist.push(rows.book_name)
        })
        res.json(booklist)
    })
})

app.listen(8080)