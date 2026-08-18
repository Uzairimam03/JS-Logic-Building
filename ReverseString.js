// function reverseString(inputString) {
//   let result = "";
//   for (let i = inputString.length - 1; i >= 0; i--) {
//     result = result + inputString[i];
//   }

//   return result;
// }

// console.log(reverseString("Uzair Imam"));

function reverseString(inputString) {
    if(typeof inputString !== 'string'){
 throw new Error("Numbers are not allowed in input")
    }
  let result = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    result += inputString[i];
  }
  return result;
}

console.log(reverseString("Dell Latitude"));
console.log(reverseString(123))


