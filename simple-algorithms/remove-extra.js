// remove extra letters in a string using recursion//
const func =(arr,i=0,c=[])=>{
  if (arr[i] != arr[i+1]){
    c.push(arr[i]);
  }
  if(i == arr.length){
    return c;
  }
  return func(arr,i+1,c)
}
console.log(func("hellllo"));

