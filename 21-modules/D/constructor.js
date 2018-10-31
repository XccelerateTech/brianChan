var EventEmitter = require('events');


class Timer extends EventEmitter {
    constructor(second){
        super();
        this.second = second;
        var core = setInterval(()=>{
            this.sendtick(this.second);
            this.second--;
            if (this.second < 0 ){
                clearInterval(core);
            }
        },1000)
        
    };
    sendtick(data){
        this.emit("tick",data);
    }
}

module.exports = Timer;



