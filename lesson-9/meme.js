const express =require("express");
const fs =require("fs");
const app =express();
const bodyparser =require('body-parser');
const gm =require("gm");

app.listen(3610);
app.use(express.static('public'));
app.use(bodyparser.json({ limit: '500mb' }));

//response when submit button is clicked*//
app.post('/madhu',(req,res) => {
  fs.appendFile('/home/madhub/garagescript/lesson-9/public/notes.txt',`Name : ${req.body.name} Comment : ${req.body.comment}`);
});

//responce to the second button//
app.post('/pic',(req,res) => {
  let picData = req.body.data.replace('data:image/png;base64');
  let picPath = `/home/madhub/garagescript/lesson-9/public/pics/${req.body.name}.png`;
  let memePath = `/home/madhub/garagescript/lesson-9/public/meme/${req.body.name}.png`;

  fs.writeFile(picPath, picData, 'base64', () => {
    gm(picPath).fontSize(40).drawText(50, 50, req.body.comment).write(memePath, (err) => { console.log('Meme Error: ', err)
    })
  });
});
