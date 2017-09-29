/*let a=[1,2,3,4,5];
let b=0;
a.forEach((e)=>{
  b=b+e
});
console.log(b);
*/

/*const sum = (a,b) =>{
  a.forEach((e)=>{
    (b=b+e);
  });
  return(b);
};
console.log(sum([1,2,3,4,5],0));
*/

//using recursion

const add =(arr,sum=0,i=0)=>{
  if(arr.length == i){
    return sum;
  }
  return add(arr,sum=sum+arr[i],i=i+1);
}
console.log(add([1,3,5]));
