const fs = require('fs');

class NoteService {
    constructor(filename) {
        this.filename = filename;
        this.initPromise = null;

        this.init()
    };

    init() {
        if (this.initPromise === null) {
            this.initPromise = new Promise((resolve, reject) => {
                this.read()
                    .then(() => {
                        resolve();
                    })
                    .catch(() => {
                        this.notes = {};
                        this.write()
                            .then(resolve)
                            .catch(reject);
                    })
            })
            return this.initPromise;
        }
    }

    write() {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.filename, JSON.stringify(this.notes), (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(this.notes);
            })
        }
        )
    };


  
    read(){
        return new Promise((resolve, reject)=>{
            fs.readFile(this.file, 'utf-8', (err, data)=>{
                if(err){
                    reject(err);
                }
                try{
                    this.notes = JSON.parse(data);
                } catch (e){
                    return reject(e);
                }
                return resolve(this.notes);
            });
        });
    }


    addNote(note, user) {
        return this.init().then(() => {
            if (typeof this.notes[user] === "undefined") {
                this.notes[user] = [];
            }
            this.notes[user].push(note);
            return this.write();
        })
    };

    deleteNote(index, user) {
        return this.init().then(() => {
            if (typeof this.notes[user] === "undefined") {
                throw new Error("Unable to delete note, if the user doesn't exist ");
            };
            if (this.notes[user].length <= index) {
                throw new Error("Unable to delete note, there are no such note exist");
            };
            this.notes[user].splice(index, 1);
            return this.write();
        })

    };

    updateNote(index, note, user) {
        return this.init().then(() => {
            if (typeof this.notes[user] === "undefined") {
                throw new Error("Unable to update note, if the user doesn't exist ");
            };
            if (this.notes[user].length <= index) {
                throw new Error("Unable to update note, there are no such note exist");
            };
            this.notes[user][index] = note;
            return this.write();
        })
    }

    insertNote(index, note, user) {
        return this.init().then(() => {
            if (typeof this.notes[user] === "undefined") {
                throw new Error("Unable to insert note, if the user doesn't exist ");
            };
            this.notes.splice(index, 0, note);
            return this.write();
        })

    }
}

module.exports = NoteService;