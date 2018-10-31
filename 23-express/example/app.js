var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});


app.set("view engine",'ejs');
app.use('/assets', express.static('assets'));

app.get('/',function(req,res){
    console.log("test");
    res.render('index');
});

app.get('/contact',function(req,res){
    console.log(req.query);
    res.render('contact',{qs: req.query});
});

app.post('/contact',urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success',{data:req.body});
})

app.get('/profile/:name', function(req,res){
    var data ={age:29, job:'ninja', hobbies: ['eating', 'killing','fishing']};
    res.render('profile',{person: req.params.name, data: data})
});

app.post('/login',function(req,res){
    console.log(req.path);
    res.send('post received');
});

app.listen(8080);

