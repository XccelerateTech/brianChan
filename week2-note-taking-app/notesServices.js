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
        fs.writeFile("./object.json", JSON.stringify(note), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created.");
        });
    };

    removeNote(index){
        this.notes.splice(index,1)
    };

    insertNote(index,note){
        this.notes.splice(index,0,note);
    }
}

module.exports= NoteService;