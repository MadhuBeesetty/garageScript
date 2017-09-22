//swaping two numbers
const swap=(a,b)=>{
  a=a+b;
  b=a-b;
  a=a-b;
  console.log(`a is ${a}`,`b is ${b}`);
};
swap(2,3);
