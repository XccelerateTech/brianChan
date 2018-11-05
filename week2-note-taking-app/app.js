const express = require('express');
const NoteService = require('./notesServices.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
var noteService = new NoteService();

app.get('/',(req,res)=>{
    res.send(noteService.listNote());
});

app.post('/add-note',(req,res)=>{
    noteService.addNote(req.body.content);
    res.send("recieved");
});




app.listen(8080,()=>{
    console.log('listening to 8080.')
})