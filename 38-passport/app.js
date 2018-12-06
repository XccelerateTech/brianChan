const express = require('express');
const app = express();
const expressSession = require('express-session');
const setupPassport = require('./passport');
const bodyParser = require('body-parser');
const router = require('./router')(express);
const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// const redis  = require('redis');
// const RedisStore = require('connect-redis')(expressSession);

// const redisClient = redis.createClient({
//     host : 'localhost',
//     port : 6379,
// });

// const sessionStore = new RedisStore({
//     client: redisClient,
//     unset: "destroy"
// });
const settings = {
    // store: sessionStore,
    secret: "supersecret",
    
    // cookie: { "path": '/', "httpOnly": true, "secure": false,  "maxAge": null }
}

app.use(expressSession(settings));

setupPassport(app);

app.use('/', router);

app.listen(port);
console.log('listening on port ', port);
