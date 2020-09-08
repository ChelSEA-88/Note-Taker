const express = require("express");

//Listen to whatever port if avaiblable or port 8080//
const PORT = process.env.PORT || 8080;

//Creating an express server called app
const app = express();

//sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//this is express middleware to use the public folder
app.use(express.static("public"));

//Require the routes
require("./routes/api.js")(app);
require("./routes/html.js")(app);


 app.listen(PORT, () => {
     console.log(`server is listening on port: ${PORT}`);
 });