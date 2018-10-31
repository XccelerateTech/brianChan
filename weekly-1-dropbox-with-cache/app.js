const express = require('express');
const multer = require('multer');
var upload = multer();
var fs = require('fs');
var path = require('path');
var app = express();

var cacheObject = {};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/read/:filename', (req, res) => {
    var filename = req.params.filename;
    fs.readFile(path.join('save_files', filename), "utf8", (err, data) => {
        if (err) throw err;
        if (Boolean(cacheObject[filename])){
            res.send(cacheObject[filename])
        } else {
            res.send(data);
            cacheObject[filename] = data;
        }
    })
});

app.post('/upload',upload.single('uploadFile'), (req, res) => {
    console.log(req.file);
    var filename = req.file.originalname;
    var data = req.file.buffer;
    fs.writeFile(path.join('save_files', filename), data, (err) => {
        if (err) throw err;
        res.send("file received.");
        if(!Boolean(cacheObject[filename])){
            cacheObject[filename] = data;
        }
        console.log(cacheObject);
    })
});

app.listen(8080, function () {
    console.log('server listening to port 8080')
});