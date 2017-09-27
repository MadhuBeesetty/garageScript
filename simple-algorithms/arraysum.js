//adding all values in a array/

/*let a=[1,2,3,4,5];
let b=0
for(i=0;i<=4;i++){
  b=b+a[i];
}
console.log(b);*/

/*let b=0;
let a=[1,2,3,4,5];
a.forEach((e)=>{
  b=b+e;
});
console.log(b);*/

/*const find=(a,b)=>{
  b.forEach((e)=>{
   (a=a+e)});
  return a;
};
console.log(find(0,[1,2,3,4,5]));*/

//using recursion
const max=(arr,i=0,maxx=arr[0])=>{
  if(arr[i]>maxx){
    maxx=arr[i]
  }
  if(i===(arr.length-1)){
    return maxx;
  }
  return max(arr,i+1,maxx);
}
console.log(max([5,26,15]));

  
