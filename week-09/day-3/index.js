var express = require('express');
var app = express();

app.use('/assets', express.static('./assets'))
express.json.type = "application/json"

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/doubling', function(req, res){
    if (req.query.input == null){
        res.send({
            "error": "Please provide an input!"
          })
    } else {
        res.send(
            {
                "received": req.query.input,
                "result": req.query.input * 2
              }
        )
    }
    
})

app.listen(8080);