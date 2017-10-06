//set time interwal
const set = (a,b,i=0)=>{
  setTimeout(function(){console.log(b[i]);},b[i]*1000);
  if(i != b.length-1){
    return set(a,b,i+1);
  }
}
set("madhu",[5,9,2]);

