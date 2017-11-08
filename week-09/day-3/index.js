var express = require('express');
var app = express();

app.use(express.json())
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
              })
    } 
})

app.get('/greeter', function(req, res){
    let queryName = req.query.name
    let queryTitle = req.query.title

    if (queryName == null) {
        res.send({"error": "Please provide a name!"})
    }
    else if (queryTitle == null) {
        res.send({"error": "Please provide a title!"})
    }
    else res.send({
        "welcome_message": 'Oh, hi there ' + queryName + ', my dear ' + queryTitle + '!'
    })
})

app.get('/appenda/:word', function(req, res) {
    res.send({
        "appended": req.params.word + 'a'
    });
});

app.post('/dountil/:operation', function(req, res){
    if (req.params.operation == 'sum') {
        var result = 0;
        for (let i = 0; i <= req.body.until; i++) {
            result += i
        }
    
    res.send({"result": result})

    } else if (req.params.operation == 'factor') {
        var result = 1
        for (let i = 1; i <= req.body.until; i++) {
            result *= i
        }
    
    res.send({"result": result})
    }

})

app.listen(8080);