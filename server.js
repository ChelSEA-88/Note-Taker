const express = require("express");

const fs = require("fs");

//Listen to whatever port if avaiblable or port 8080//
const PORT = process.env.PORT || 8080;

//Creating an express server called app
const app = express();

//sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 //built in express function that allows the browers to read the root files
 //combined with node dirname path
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use("/public", express.static("./public"));

//Require the routes
require("./routes/api")(app);
require("./routes/html")(app);


 app.listen(PORT, () => {
     console.log(`server is listening on port: ${PORT}`);
 });