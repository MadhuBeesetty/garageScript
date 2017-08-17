const readfile =require("fs");
const name =(err,files)=>{
  let list=" ";
  files.forEach((ele)=>{
    if(ele !== "madhub")
    list=list+" "+ele;
  });
    console.log(list);
}
readfile.readdir('/home',name);
