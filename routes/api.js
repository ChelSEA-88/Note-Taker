
const returnNotes = require("../db/db.json");
const fs = require("fs");



module.exports = (app) => {

// reads the db.json file and returns saved notes as json//
app.get(`/api/notes`, (req, res) => {
    res.json(returnNotes);

});

//recieves a new note to save on the request body//
app.post(`/api/notes`, (req, res) => {

    let newNote = req.body
    let lastId = returnNote[returnNote.length - 1]["id"];
    let newId = lastId + 1;

    console.log("req.body:", req.body);
    
    returnNote.push(newNote)


});

app.delete("/api/notes/:id", function(req, res) {

    //assigning each note a unique id
   let noteId = parseInt(req.params.id);

   for (let i = 0; i < returnNotes.length; i ++) {
       if (noteId === returnnNotes[i].id) {
           returnNotes.splice(i,1);

           let noteJSON = JSON.stringify(returnNotes, null, 2);
       }
   }
});


}
