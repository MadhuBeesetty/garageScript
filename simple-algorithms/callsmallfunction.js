// calling the function least number of times
const func =()=>{
  console.log("madhu")
}
const name = (a,b,d,c,i=1)=>{
  if(a<b){
    c=a
  }
  else{
    c=b
  }
  func();
  if( c > i ){
    return;
  }
  return name(a,b,d,c,i+1);
}
name(2,3,func())
