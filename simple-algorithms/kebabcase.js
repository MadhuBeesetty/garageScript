const convert = (a,i=0,output=" ")=>{
  let b=a[i];
  if(i==a.length){
    return output;
  };
  if(i<a.length && b == b.toLowerCase()){
      output = output+b;
    }
    else
    {
      b = b.toLowerCase();
      output = output + "-" +b;
    }
  return convert(a, i+1, output);
}
console.log(convert("madhuSudhan"));
console.log(convert("maryChris"));
console.log(convert("saumyaSingh"));

