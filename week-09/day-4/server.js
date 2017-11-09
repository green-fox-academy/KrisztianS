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
    console.log("Error connecting to Db");
  } else {
  console.log("Connection established"); }
});

app.get('/', function(req, res){
    conn.query("SELECT * FROM author;",function(err,rows){
        console.log("Data received from Db:\n");
        console.log(rows);
      });
    //   res.sendFile(__dirname + '/index.html');  
})

app.listen(8080)
// + MySQL lekeres, + send html a lekeres eredmenyeivel table formatumban