var Timer = require('./constructor');
var timer = new Timer(5);



timer.on('tick',function(data){
    if (data > 1){
        console.log(data + "seconds remaining")
    };
    if (data == 1){
        console.log(data + "second remaining")
    };
    if (data == 0){
        console.log("kaboom");
    };
})


