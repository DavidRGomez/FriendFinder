const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("/app/data"));
app.get("/survey", function(req, res) { 
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/home", function(req, res) { 
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.listen(PORT, function(){
    console.log("Server listening on PORT 3000....");
});