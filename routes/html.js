//include the path package to get the correct file path for the html
var path = require("path");

//ROUTING//

module.exports = (app) => {

    //html GET requests//
    app.get(`/notes`, (req, res) => {
        console.log("you hit GET");
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // ({success: true, method: "GET"});
    // res.json({success: true, method: "GET"});
    app.get(`*`, (req, res) => {
        console.log("you hit GET");
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};