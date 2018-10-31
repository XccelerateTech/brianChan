var random = require("./random");
var letter = function(){
    return String.fromCharCode(random() + 97);
}

module.exports = letter;