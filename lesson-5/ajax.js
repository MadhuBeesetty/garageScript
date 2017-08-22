const express =require("express");
const fs =require("fs");
const app =express();

app.listen(3610);
app.use(express.static('public'));

app.get("/XMLHttpRequest",(req,res) => {
  fs.appendFile('/home/madhub/garagescript/lesson-5/public/text.txt', `\n Name: ${req.query.a1} Comment:${req.query.a2} \n`);
  res.send('Your comment has been received.');
});
