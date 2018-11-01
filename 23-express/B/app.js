const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('flowershop'));

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'flowershop','index.html'));
});

app.listen(8080);