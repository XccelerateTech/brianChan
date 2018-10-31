var Timer = require('./constructor');



var timer = new Timer(5);

timer.on('start')

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

// E. Refactor the timer, to include the following functions:

// start() function that starts the timer
// pause() function to pause the timer
// stop() function to stop the timer, unlike the pause() function the stop() function should also reset the time to the initialized value Each function should emit an event like start or stop which should trigger the necessary response. Put the three functions in one file and keep the timer in a separate file.
