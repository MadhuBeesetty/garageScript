const express= require("express");
const fs = require("fs");
const app = express();

app.listen(3143);
app.use(express.static("public"));
let pic = [];
const pics = (req,res)=>{
  const print = (err,files)=>{
    files.forEach((e)=>{
      pic.push(e);
    });
  };
  console.log(pic);
    res.send(pic);
  fs.readdir('./public/photos',print);
};
app.get('/madhu',pics);

