const a =require("fs");
const express =require("express");
const app =express();
app.listen(3610);
const prog =(re1,re2)=>{
    const name =(err,files)=>{
    re2.send(files);
  };
a.readdir('/home',name);
};
app.get('/madhu',prog);


