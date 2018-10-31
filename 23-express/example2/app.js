const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/login',(req,res)=>{
    console.log(req.body);
    console.log(req.files);
	res.send("Login infomation received.");
});

app.listen(8080);