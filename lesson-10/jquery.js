const express =require("express");
const fs =require("fs");
const gm =require("gm");
const bodyparser =require("body-parser");
const app =express();
app.listen(3610);
app.use(express.static("public"));
app.use(bodyparser.json({limit: '2000mb'}));

app.post('/sendmessage',(req,res)=>{
  fs.appendFile('/home/madhub/garagescript/lesson-10/public/notes.txt', `Name: ${req.body.memeName} Comment: ${req.body.memeComment}`);
});

app.post('/sendingpic', (req,res)=>{
  let picData =req.body.canvas.replace('data:image/png;base64,', '');
  let picPath =`/home/madhub/garagescript/lesson-10/public/pics/${req.body.nameOfPicture}.png`;
  let memePath =`/home/madhub/garagescript/lesson-10/public/meme/${req.body.nameOfPicture}.png`;

  fs.writeFile(picPath,picData, 'base64', () => {
    gm(picPath).fontSize(40).drawText(50, 50, req.body.commentOnPicture).write(memePath, (err) => {
      if (err) {console.log('Meme Error: ', err)};
    });
  });
  res.send("picture written");
});


