const express =require("express");
const bodyparser =require("body-parser");
const fs =require("fs");
const app =express();
app.listen(3610);
app.use(bodyparser.json( {limit: '500mb'}));
app.use(express.static("public"));

let A=100;
app.post('/madhu',(req,res) => {
  let ticket=(`${req.body.ticket}`);
  ticket= +ticket;
  A=A-ticket;
  console.log(A);
  fs.writeFile('/home/madhub/garagescript/simple-algorithms/tickets/public/ticket.txt',A);
});
