const fs =require("fs");
const name =(err,files)=>{
  let list=" ";
  files.forEach((ele)=>{
    if(ele !== "madhub")
      list=list+" "+ele;
    fs.writeFile('/home/madhub/garagescript/lesson-2',list,()=>{});
  });
    console.log(list);
}
fs.readdir('/home',name);

