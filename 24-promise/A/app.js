const fs = require('./fs-utility.js');
const pathmodule = require('path');

var searchingFolder = (path) => {
    fs.readdir(path)
        .then((files) => {
            for (let file of files) {
                const filePath = pathmodule.join(path, file);
                outPut(filePath);
            }
        }).catch((err) => {
            console.log(err);
        });
};

var outPut = (filePath) => {
    fs.stat(filePath).then((stats) => {
        if (stats.isDirectory()) {
            console.log(filePath + ' is a directory.');
            searchingFolder(filePath);
        } else {
            console.log(filePath + ' is a file.')
        };
    }).catch((err) => {
        console.log(err);
    });
};

outPut('./files/files/..');