//findind maximum number in an array//
const find = (arr,num) => {
  for (i=0; i< arr.length; i++){
    for (j=i+1; j< arr.length; j++){
      sum = arr[i]+arr[j];
      if (sum==num){
        console.log(arr[i],arr[j]);
      }
    }
  }
}
find([10,20,30,40,50,60],50);
