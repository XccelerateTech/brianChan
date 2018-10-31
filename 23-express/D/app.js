const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/calculate',function(req,res){
    console.log(req.body);
    var arr = JSON.parse(req.body.arr);
    var result = arr.reduce(add,0);
    function add(a,b){
        return a + b;
    }
    res.send('data received.' + 'result :' + result)
});

app.listen(8080)