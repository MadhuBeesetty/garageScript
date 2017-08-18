const fs =require("fs");
const express =require("express");
const app =express();
app.listen(3610);
const prog =(re1,re2)=>{
  const name =(err,files)=>{
    let list = " ";
    files.forEach((user)=>{
      if (user !="madhub")
        list =list + " " + user;
      });
    re2.send(list);
  };
fs.readdir('/home',name);
};
app.get('/madhu',prog);


