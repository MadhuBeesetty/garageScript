const fs =require("fs");
const express =require("express");
const app=express();
app.listen(3610);
app.use(express.static('public'));
app.get('/ha',(req,res)=>{
  const name=req.query.username;
  const comment=req.query.comment;
  fs.writeFile('/home/madhub/garagescript/lesson-4/public/notes.txt',"hey"+" "+ name+" "+ comment);
  res.send('done');
});
