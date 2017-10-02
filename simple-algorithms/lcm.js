const lcm = (a,b,c=0)=>{
  c=c+b
  if(c%a == 0){
    return c
  }
  return lcm(a,b,c)
}
console.log(lcm(15,18))
console.log(lcm(6,12))
