const express = require('express');
const hb = require('express-handlebars');
const authRoutes =require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');

const bodyParser = require('body-parser');
const expressSession = require('express-session');
const https = require('https');
const fs = require('fs');


//set up app
const app = express();
//set up view engine
app.engine('handlebars',hb({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));
//https options
const options = {
    cert: fs.readFileSync('./config/localhost.crt'),
    key: fs.readFileSync('./config/localhost.key')
  };
//Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//Set up express sessions - with the secret to encode the session
app.use(expressSession({secret: 'thisRealSecret'}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// setup knex 
require('dotenv').config();

//set up routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

//create home route
app.get('/',(req,res)=>{
    res.render('index');
});
//error page
app.get('/error',(req,res)=>{
    res.send('error occurred')
})

https.createServer(options, app).listen(8000);