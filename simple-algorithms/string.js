//printing a string n number of times//
const print = (a,b,i=1,c=" ")=>{
  if(i<=a){
    c=c+b;
    if(i==a){
      return(c)
    }
    return print(a,b,i+1,c);
  }
}
console.log(print(5,"hi"));
console.log(print(10,"madhu"));

//just hello number of times//

const print_hello=(a,i=1)=>{
  if(i<a){
    console.log("hello");
    return print_hello(a,i+1);
  }
}
print_hello(10);


