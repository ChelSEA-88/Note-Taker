const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const data = JSON.parse(fs.readFileSync("./db/db.json"));


module.exports = (app) => {

// reads the db.json file and returns saved notes as json//
app.get(`/api/notes`, (req, res) => {
    res.json(data);

});

//recieves a new note to save on the request body//
app.post(`/api/notes`, (req, res) => {
    fs.readFileSync("./db/db.json", db);
    
    let newNote = req.body;
    newNote.id = uuidv4();
    
    data.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
        if (err) throw (err);
    });
    
    res.json(data);
});


app.delete("/api/notes/:id", function(req, res) {

    //assigning each note a unique id
   let noteId = parseInt(req.params.id);

   for (let i = 0; i < data.length; i ++) {
       if (noteId === data[i].id) {
           data.splice(i,1);

           let noteId = JSON.stringify(data, null, 2);
       }
   }
   fs.writeFileSync("./db/db.json", JSON.stringify(data), "utf-8");
   res.json(data);
});


}
