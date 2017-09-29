//deleting the characters of second array from the first array.
const delarr=(a,b,c=[],i=0)=>{
  const delarr1=(j=0)=>{
    if(a[i] != b[j]){
      if(j != b.length){
        return delarr1(j+1);
      }
      else{
        c=c+a[i];
      }
      return delarr(a,b,c,i+1);
    }
    return c;
  }
  if(i==a.length){
    return c;
  }
  return delarr1();
}
console.log(delarr("apple","le"));
