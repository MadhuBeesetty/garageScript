const express = require("express");
const fs = require("fs");
const app = express();
app.listen(3610);
app.use(express.static('public'));
app.get('/XMLHttpRequest', (req,res) =>{
  fs.appendFile('/home/madhub/garagescript/lesson-6/public/notes.txt',`/n name: ${req.query.myName} comment: ${req.query.myComment}`);
  res.send("your comment have been received");
  });

