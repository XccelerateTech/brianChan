
const app = require('express')()
const basicAuth = require('express-basic-auth')

 
app.use(basicAuth({
    users: { 'admin': 'supersecret' },
    challenge: true,
    realm: 'My Application'
}))

app.get('/',(req,res)=>{
    res.send('pass')
})

app.listen(8080,()=>{
    console.log('listening to 8080');
})

