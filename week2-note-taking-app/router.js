
var express = require('express');
class router {
    constructor(noteService) {
        this.noteService = noteService;
    }

    router() {
        let router = express.Router();

        router.get("/", (req, res) => {
            return this.noteService.list()
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
        })

        router.post("/", (req, res) => {
            return this.noteService.addNote(req.body)
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
        })

        router.delete('/:id', (req, res) => {
            return this.noteService.deleteNote(req.param.id)
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
        })
    }
}



module.exports = router;

