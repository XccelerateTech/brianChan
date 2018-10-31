var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
   
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/assets/image.jpg'){
        fs.createReadStream(__dirname + '/assets/image.jpg').pipe(res);
    } else{
        res.writeHead(404);
        res.end();
    }
    
});

server.listen(3000,'127.0.0.1');
console.log("yo what's up, now listening to port 3000");