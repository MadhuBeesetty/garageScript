const express =require("express");
const fs =require("fs");
const bodyparser=require("body-parser");
const gm =require("gm");

const app=express();
app.listen(3610);
app.use(express.static("public"));
app.use(bodyparser.json({limit: '2000mb'}));

app.post('/madhu',(req,res)=>{
  let picData =req.body.info.replace('data:image/png;base64,','');
  let picPath = `/home/madhub/garagescript/challenge/public/pics/${req.body.memeName}.png`;
  let memePath = `/home/madhub/garagescript/challenge/public/meme/${req.body.memeName}.png`;
  fs.writeFile(picPath,picData,'base64',()=>{
    gm(picPath).fontSize(40).drawText(50, 50, req.body.message).write(memePath, (err) =>{
      if (err) {console.log('meme Error: ', err)};
    });
  });
  //pics();
res.send("picture written");
});

//sending array
const name = (req,res)=>{
  const print = (err,files)=>{
    res.send(files);
    console.log(files);
  };
    fs.readdir('/home/madhub/garagescript/challenge/public/meme/',print);
};
app.get('/meme',name);
