var letter = require("./transmit");
var length = 5;
var text = "";
for (var i = 0; i < length; i++){
    text += letter();
}

console.log(text);
