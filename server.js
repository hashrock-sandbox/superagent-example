var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/items', function(req, res) {
    res.json([
        {name: "Todo #1"},
        {name: "Todo #2"},
        {name: "Todo #3"}
    ]);
    console.log('GET Items');
});

app.get('/items/:id', function(req, res) {
    res.json([
        {name: "Todo #1"},
        {name: "Todo #2"},
        {name: "Todo #3"}
    ]);
    console.log('GET Item ID:' + req.params.id);
});

app.put('/items/:id', function(req, res) {
    res.json([
        {name: "Todo #" + req.params.id}
    ]);    
    console.log('PUT Item ID:' + req.params.id);
});

app.delete('/items/:id', function(req, res) {
    res.json([
        {name: "Todo #" + req.params.id}
    ]);    
    console.log('DEL Item ID:' + req.params.id);
});

app.post('/items', function(req, res) {
    console.log(req.body);
    res.json([
        {name: req.body.name}
    ]);
    console.log('POST New Item');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});