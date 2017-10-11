// greatest common divisor//
const cdf = (a,b,i=2,g=1)=>{
  if (a%i==0 && b%i==0){
    g = i;
  }
  let z = 1;
  if ( a > z ){
    z=a
  }
  else{
    z=b
  }
  if(i == z){
    return g
  }
  return cdf (a,b,i+1,g)
}
console.log(cdf(6,3))
console.log(cdf(30,99))
