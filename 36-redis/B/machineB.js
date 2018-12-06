const redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
})

let scheduleGetJob = ()=>{
    setTimeout(getJob, 5000);
}

let getJob = ()=>{
    client.RPOP('messageQueue',(err,reply)=>{
        if(err){
            console.log(err);
            scheduleGetJob();
            return;
        }

        if(reply === null){
            console.log('jobs are done');
            scheduleGetJob();
            return;
        }

        const job = JSON.parse(reply);

        console.log('Processing job, '+'msg' + job.msg + 'date' + job.date)
    })

    scheduleGetJob();

}
app.listen(8080);