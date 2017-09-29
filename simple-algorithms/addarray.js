//adding two simple arrays
const add=(x=[],y=[],i=0)=>{
  if(i==y.length){
    return x;
  }
  x.push(y[i]);
  return add(x,y,i+1);
}
console.log(add(['a','b','c'],[5,9]));
