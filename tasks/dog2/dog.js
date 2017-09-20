const express=require("express");
const app=express();
app.listen(3610);

app.use(express.static('public'));

let upMargin=0;
let leftMargin=0;

app.get('/madhu',(req,res)=>{
  if(req.query.direction === 'up'){
    upMargin=upMargin-10;
    res.send();
  }
  if(req.query.direction === 'down'){
    upMargin=upMargin+10;
    res.send();
  }
  if(req.query.direction === 'right'){
    leftMargin=leftMargin+10;
    res.send();
  }
  if(req.query.direction === 'left'){
    leftMargin=leftMargin-10;
    res.send();
  }
});
  app.get('/moveUp',(req,res)=>{
    res.send(upMargin+'px');
  });

  app.get('/moveLeft',(req,res)=>{
    res.send(leftMargin+'px');
  });


