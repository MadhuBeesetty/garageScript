// finding greater number using recursion
const maximum= (a,i=0,max=a[0])=>{
  if(max<a[i])
  {max=a[i]};
  if(i==(a.length-1))
    {return max};
return maximum(a,i=i+1,max);
};
console.log(maximum([1,2,3,4,5]));
