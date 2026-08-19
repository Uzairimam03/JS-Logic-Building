// function Factorial (num ){
//     if (num < 0){
//  throw new Error ("Input should be greater than or equal to zero")
//     }
//     let factorial = 1;

//     for(let i=num; i>0; i--){
//         factorial = factorial * i

//     }
//     return factorial
// }

// // console.log(Factorial(0))

function calculateFactorialUsingRecrusion(num) {
  if (num < 0) {
    throw new Error("Input should be greater than or equal to zero");
  }

  if (num === 0 || num === 1) {
    return 1;
  }
  return num * calculateFactorialUsingRecrusion(num - 1);
}

console.log(calculateFactorialUsingRecrusion(5));
