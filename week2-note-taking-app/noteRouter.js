var express = require('express');

class NoteRouter {
    constructor(noteService) {
        this.noteService = noteService;
    }

    router() {
        let router = express.Router();

        router.get("/", (req, res) => {
            return this.noteService.list(req.auth.user)
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
        })

        router.post("/", (req, res) => {
            return this.noteService.addNote(req.body.note,req.auth.user)
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
        })

        router.delete('/:id', (req, res) => {
            return this.noteService.deleteNote(req.param.id,req.auth.user)
                .then((data) => res.json(data))
                .catch((err) => res.status(500).json(err));
        })
        return router;
    }
}



module.exports = NoteRouter;

