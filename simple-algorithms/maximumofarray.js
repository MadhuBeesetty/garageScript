/*const maximum=(a=[],b,i=0,max=[])=>{
  if(i ==(a.length-1)){
    return max;
  }
  const maximum1=(b=[],j=0,maxx=0)=>{
    if(b[j]>maxx){
      maxx = b[j];
      console.log(b);
    }
    if(k == b.length){
      console.log(maxx,max);
     return max.push(maxx);
    };
    j=j+1;
    return maximum(a,b,i+1,max);
  }
    return maximum1(b,j,maxx);
}
console.log(maximum([[1,9,2],[5,9,6],[10,20,1]]));
*/

//finding maximum number of each array//
const maximum = (arr, i=0, max=[0,0,0])=>{
  if(arr.length == i){
    return max;
  };
let j=0;
if(j<arr[j].length){
  j=j+1;
  if(arr[i][j] > max[i]){
    max[i] = arr[i][j];
  };
};
return maximum(arr,i+1,max);
};
console.log(maximum([[1,9,2],[5,9,6],[10,20,1]]));
