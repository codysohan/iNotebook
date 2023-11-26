const connectToMongo = require("./db.js");
const express = require("express");
var cors = require("cors");
// Adding this for hosting purpose 
const path = require('path');

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // If you want to use (req.body) You have to use this middlewere

// Available Routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/notes", require("./routes/notes.js"));

// Adding this for hosting purpose 
app.use(express.static(path.join(__dirname, './inotebook/build')));
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './intebook/build/index.html'))
})

// app.get() Commenting this for hosting purpose

app.listen(port, () => {
  console.log(`iNotebook backend started listening on port ${port}`);
});
