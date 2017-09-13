const express =require("express");
const bodyparser =require("body-parser");
const fs =require("fs");
const app =express();
app.listen(3610);
app.use(bodyparser.json( {limit: '500mb'}));
app.use(express.static("public"));

app.post('/madhu',(req,res) => {
  fs.writeFile('/home/madhub/garagescript/simple-algorithms/tickets/public/ticket.txt',`${req.body.A}`);
});
