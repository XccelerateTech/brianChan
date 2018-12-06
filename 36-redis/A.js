const axios = require('axios');
const express = require('express');
const redis = require('redis');
const async = require('async');
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});


const app = express();

let txHashArr = [];

async function readTxHash(){
    await axios.get('https://blockchain.info/latestblock')
    .then((response) => {
        console.log('Fetching the hash of latest block...');
        console.log(response.data.hash);
        return axios.get(`https://blockchain.info/rawblock/${response.data.hash}`);
    })
    .then( async (response) => {
        console.log('Fetching transaction hash of latest block...');
        await response.data.tx.forEach(element => {
            txHashArr.push(element.hash);
        });
        console.log(txHashArr);
         client.setex('hashes',60,JSON.stringify(txHashArr),(err) => {
            if (err) {
                console.log(err);
            }})
    })
    .catch(error => {
        console.log(error);
    });
}


app.get('/latestBlock', (req, res) => {
 var promise = new Promise((resolve, reject) => {
            readTxHash()
            .then(resolve());
            
        }).catch((err=>{
            reject(err)
        }))

    client.get('hashes', function (err, data) {
        if (err) {
            return console.log(err);
        }
       
        promise.then((res.json(JSON.parse(data))))

    })
});



app.listen(8080);