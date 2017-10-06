//remove a particular number from a set of array//
const remove = (arr,b,i=0,neww=[])=>{
  if( arr[i] != b){
    neww.push(arr[i])
  }
  if( arr.length-1 == i ){
    return neww
  }
  return remove(arr,b,i+1,neww)
}
console.log(remove([1,2,3,2,4,2,5,2,6,2,7],2))
