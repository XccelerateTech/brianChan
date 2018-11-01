const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(bodyParser.json());

app.post('/calculate',function(req,res){
    console.log(req.body);
    var arr = req.body;
    var result = arr.reduce(add,0);
    function add(a,b){
        return a + b;
    }
    res.send('data received.' + 'result :' + result)
});

app.listen(8080)