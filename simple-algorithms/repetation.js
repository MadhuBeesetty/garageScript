const repeat = (arr,b,i=0,num=0)=>{
  if (arr[i] == b){
    num = num+1
  }
  if ( i == arr.length ){
    return num
  }
  return repeat(arr,b,i+1,num)
}
console.log(repeat([2,1,2,3,2,4,2,5],2));
