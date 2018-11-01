const fs = require('fs');

var readdir = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

var stat = (path) => {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

module.exports = {
    readdir,
    stat
}