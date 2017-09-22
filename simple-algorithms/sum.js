/*let a=[1,2,3,4,5];
let b=0;
a.forEach((e)=>{
  b=b+e
});
console.log(b);
*/

const sum = (a,b) =>{
  a.forEach((e)=>{
    (b=b+e);
  });
  return(b);
};
console.log(sum([1,2,3,4,5],0));

