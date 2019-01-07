const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const fs = require('fs');

const Authorizer = require('./Authorizer.js')
const NoteService = require('./noteService.js');
const NoteRouter = require('./noteRouter.js')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(basicAuth({
    authorizer: new Authorizer(JSON.parse(fs.readFileSync('./users.json'))),
    challenge:true,
    realm:'Note-Taking-App'
}));

let noteService = new NoteService("./notes.json");

app.use('/api/notes',(new NoteRouter(noteService)).router());




app.listen(8080,()=>{
    console.log('listening to 8080.')
})