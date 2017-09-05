const express =require("express");
const fs =require("fs");
const gm =require("gm");
const bodyparser =require("body-parser");
const app =express();
app.listen(3610);
app.use(express.static("public"));
app.use(bodyparser.json({limit: '2000mb'}));

  app.post('/sendmessage',(req,res)=>{
    fs.appendFile('/home/madhub/garagescript/lesson-10/public/notes.txt', `Name: ${req.body.memename} Comment: ${req.body.memecomment}`);
  });

  app.post('/pics', (req,res)=>{
    let picdata =req.body.canvas.replace('data:image/png;base64,', '');
    let picpath =`/home/madhub/garagescript/lesson-10/public/pics/${req.body.nameofpicture}.png`;
    let memePath =`/home/madhub/garagescript/lesson-10/public/meme/${req.body.nameofpicture}.png`;

    fs.writeFile(picpath,picdata, 'base64', () => {
      gm(picpath).fontSize(40).drawText(50, 50, req.body.commentonpicture).write(memePath, (err) => {
       if (err) {console.log('Meme Error: ', err)};
      });
    });
    res.send("picture written");
  });


