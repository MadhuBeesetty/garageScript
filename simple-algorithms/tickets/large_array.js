// A simple algorithm to find the largest number in a given array. 
const findlarge = (a) => {
  let i = 0;
  let b = a[0];
  a.forEach((e)=>{
    if(e>a[i])
      b=e;
  });
  console.log(b);
};
findlarge([1,9,10,5,6,64,9,87]);
