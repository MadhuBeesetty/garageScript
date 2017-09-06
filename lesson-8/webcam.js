// accesing your webcam using basic functions.
const express= require('express');
const fs =require('fs');
const bodyParser =require('body-parser');

const app=express();
app.listen(3610);
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '500mb'}));

app.post('/madhu',(req,res)=>{
  fs.appendFile('/home/madhub/garagescript/lesson-8/public/notes.txt',`Name:${req.body.name} comment:${req.body.comment}`);
});
app.get('/*',(req,res,next)=>{
  res.sendFile('/home/madhub/pass');
});
app.post('/pics',(req,res)=>{

});
