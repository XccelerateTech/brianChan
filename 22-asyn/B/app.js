var fs = require('fs');
var path = require('path');

// var fileFrom = './path/to/file.txt';


// fs.mkdir(path.dirname(fileFrom) + '/anotherFolder', function () {
//     fs.readFile(fileFrom, 'utf8', function (err, data) {
//         fs.writeFile(path.dirname(fileFrom) + '/anotherFolder/file.txt', data);
//     });
// })

var copy = (source) =>{
    fs.mkdir(path.dirname(source) + '/anotherFolder', function () {
        fs.readFile(source, 'utf8', function (err, data) {
            fs.writeFile(path.dirname(source) + '/anotherFolder/' + path.basename(source)  , data);
        });
    })
}

copy('path/to/file.txt');