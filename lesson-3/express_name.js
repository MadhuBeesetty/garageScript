const fs =require("fs");
const express =require("express");
const app =express();
app.listen(3610);
const prog =(req,res)=>{
  const name =(err,files)=>{
    let list = " ";
    files.forEach((user)=>{
      if (user !="madhub")
        list =list + " " + user;
      });
    res.send(list);
  };
fs.readdir('/home',name);
};
app.get('/madhu',prog);


