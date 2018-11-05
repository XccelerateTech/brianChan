const fs = require('fs');

class NoteService {
    constructor(){
        this.notes = [];
    };

    listNote(){
        return this.notes;
    };

    addNote(note){
        this.notes.push(note);
    };

    removeNote(index){
        this.notes.splice(index,1)
    };

    insertNote(index,note){
        this.notes.splice(index,0,note);
    }
}

module.exports= NoteService;