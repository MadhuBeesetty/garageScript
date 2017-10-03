// a simple function to call a function # number of times
const funct = ()=>{
  console.log("madhu")
}

const print =(a,b,i=0)=>{
  if(i==a){
    return;
  }
  funct();
  return print(a,b,i+1)
}
print(5,funct)
