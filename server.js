const express = require("express");
const path = require("path");

const PORT = 8080;

const server = express();

server.get(`/notes`, (req, res) => {
    console.log("you hit GET");
    res.json({success: true, method: "GET"});
});

server.get(`*`, (req, res) => {
    console.log("you hit GET");
    res.json({success: true, method: "GET"});
});

// server.post("/", (req, res) => {
//     console.log("you hit GET");
//     res.json({success: true, method: "POST"});
// });
 
 server.listen(PORT, () => {
     console.log(`server is listening on: http://localhost:${PORT}`);
 });