const m =require('./solu.js');
const add =(x,y,z)=>{
  if (m(x,y)==z){
    console.log("the solution file is correct");
  }
  else
  {
    console.log("the solution file is wrong");
  }
}
add(1,1,2)
add(2,2,3)
add(4,4,6)
add(5,5,10)
