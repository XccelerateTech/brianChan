const express = require('express');
const authRoutes =require('./routes/auth-routes');
const profileRoutes =require('./routes/profile-routes');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

//set up app(unpackage express)
const app = express();

//https options
const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
  };

//set up view engine
app.set('view engine','ejs');

const cookieSession = require('cookie-session');

// setup coockie session
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookieKey]
}));

// //connect to mongodb
mongoose.connect(keys.mongodb.dbURI,{ useNewUrlParser: true },()=>{
    console.log('connected to mongodb')
});


// initialize passport
app.use(passport.initialize());
app.use(passport.session());


//set up routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

//create home route
app.get('/',(req,res)=>{
    res.render('home',{user:req.user});
});

app.get('/error', (req, res)=>{
    res.send('You have failed....');
});

// app.listen(3000,()=>{
//     console.log('app now listening for request on 3000' + new Date)
// })

https.createServer(options, app).listen(3000);


