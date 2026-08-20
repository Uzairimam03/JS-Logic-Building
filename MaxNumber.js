function findMaxNum(arr) {
  if(arr.length <0){
    throw new Error ("Length of array is greater than zero")
  }
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

console.log(findMaxNum([3, 5, 8, 19, 12, 1, 4]));
