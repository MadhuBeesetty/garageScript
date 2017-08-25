const express = require("express");
const fs = require("fs");
const app =express();
const bodyparser =require("body-parser");
app.listen(3610);
app.use(express.static('public'));
app.use(bodyparser.json());

app.post('/submit',(req,res) => {
  fs.appendFile('/home/madhub/garagescript/lesson-7/public/notes.txt', `name: ${req.body.name} comment: ${req.body.comment}`);
});

