var EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor(second){
        super();
        this.second = second;
        this.status = 1;
        var core = setInterval(()=>{
            if (this.status == 1 ){

            }
            this.sendtick(this.second);
            this.second--;
            if (this.second < 0 ){
                clearInterval(core);
            }
        },1000)
    };
    sendtick(data){
        this.emit("tick",data);
    };
    start(){
        this.emit("start",1);
    };
    
}

module.exports = Timer;



