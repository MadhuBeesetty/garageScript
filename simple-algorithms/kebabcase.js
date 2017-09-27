let output=" ";
const convert = (a,i=0)=>{
  let b=a[i];
  if(i==(a.length))
    {return output};
  console.log(a.length);
  if(i<a.length)
  {
    if( b == b.toLowerCase())
    {
      output = output+b;
    }
    else
    {
      b = b.toLowerCase();
      output = output + "-" +b;
    }
  }
  return convert(a, i+1);
}
console.log(convert("madhuSudhan"));
console.log(convert("maryChris"));
console.log(convert("saumyaSingh"));

