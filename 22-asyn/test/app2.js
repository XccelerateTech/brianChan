var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, { 'Content-Type':'application/json' });
    var obj = {
        name: 'John',
        surname: 'Doe'
    }
    res.end(JSON.stringify(obj));

}).listen(8080, '127.0.0.1');
