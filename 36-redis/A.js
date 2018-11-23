const axios = require('axios');
const express = require('express');
const redis = require('redis');
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});


const app = express();

let txHashArr = [];

function readTxHash(){
    axios.get('https://blockchain.info/latestblock')
    .then((response) => {
        console.log('Fetching the hash of latest block...');
        console.log(response.data.hash);
        return axios.get(`https://blockchain.info/rawblock/${response.data.hash}`);
    })
    .then((response) => {
        console.log('Fetching transaction hash of latest block...');
        response.data.tx.forEach(element => {
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

readTxHash();

app.get('/latestBlock', (req, res) => {
    client.get('hashes',function(err,data){
        if(err) {
            return console.log(err);
        }
        res.json(JSON.parse(data));
    })
});


    
app.listen(8080);