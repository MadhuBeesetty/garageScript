//check a particular character in an array
const check=(arr,b,i=0,c=0)=>{
  if(arr[i] == b){
    c=c+1}
  if(i == arr.length){
    return c;
  }
  return check(arr,b,i+1,c)
}
console.log(check("5son9bill9",9));
console.log(check("5mad55hu5",5));

