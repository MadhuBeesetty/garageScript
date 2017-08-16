const a=require("fs");
const name =(err,files)=>{
  console.log(files);
}
a.readdir('/home',name);

