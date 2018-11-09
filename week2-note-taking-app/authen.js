
const app = require('express')()
const basicAuth = require('express-basic-auth')
const myAuthorizer = require('./myAuthorizer')
const fs = require('fs');
 
// app.use(basicAuth({
//     users: { 'admin': 'supersecret' },
//     challenge: true,
//     realm: 'My Application'
// }))

app.use(basicAuth({
    authorizer: new myAuthorizer(JSON.parse(fs.readFileSync('./users.json'))),
    challenge:true,
    realm:'My Application'
}));



app.get('/',(req,res)=>{
    console.log(req.auth.user);
    res.send('pass')
})

app.listen(8080,()=>{
    console.log('listening to 8080');
})

