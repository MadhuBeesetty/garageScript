const express =require("express");
const fs =require("fs");
const gm =require("gm");
const bodyparser =require("body-parser");
const app =express();
app.listen(3610);
app.use(express.static("public"));
app.use(bodyparser.json({limit: '500mb'}));

  app.post('/submit',(req,res)=>{
    fs.appendFile('/home/madhub/garagescript/lesson-10/public/notes.txt', `Name: ${req.body.name} Comment: ${req.body.comment}`);
  });

  app.post('/pics', (req,res)=>{
    let picdata =req.body.canvas.replace('data:image/png;base64,', '');
    let picpath =`/home/madhub/garagescript/lesson-10/public/pics/${req.body.name}.png`;
    let memePath =`/home/madhub/garagescript/lesson-10/public/meme/${req.body.name}.png`;

    fs.writeFile(picpath,picdata, 'base64', () => {
      gm(picpath).fontSize(40).drawText(50, 50, req.body.comment).write(memePath, (err) => {
       if (err) {console.log('Meme Error: ', err)};
      });
    });
    res.send("picture written");
  });


