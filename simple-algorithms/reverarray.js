// reversing an array // 
const array = (arr, i=arr.length-1, c=[])=>{
  if(i==-1){
    return c;
  }
  else{
    c.push(arr[i]);
  }
  return array(arr, i-1, c)
}
console.log(array([1,5,2]));


