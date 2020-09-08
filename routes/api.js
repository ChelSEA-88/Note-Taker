const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {

// reads the db.json file and returns saved notes as json//
app.get(`/api/notes`, (req, res) => {
    res.json(db);
});

//recieves a new note to save on the request body//
app.post(`/api/notes`, (req, res) => {
    fs.readFileSync("./db/db.json", db);
    
    let newNote = req.body;
    newNote.id = uuidv4();
    
    db.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(db, null, 1), function(err) {
        if (err) throw (err);
    });
    
    res.json(db);
});


app.delete("/api/notes/:id", function(req, res) {
    fs.readFileSync("./db/db.json", db)
    //assigning each note a unique id
    let noteId = req.params.id;

    for (let i = 0; i < db.length; i ++) {
        let note = db[i]
        if (noteId.indexOf(note.id) !== -1){
            db.splice(i, 1);
            i--;
            fs.writeFileSync("./db/db.json", JSON.stringify(db, null, 1), "utf-8");
        }
    }
   
    res.json(db);
});


}
