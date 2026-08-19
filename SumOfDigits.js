function DigitSum(inputNum) {
  let numtoString = inputNum.toString();
  let splitDigit = numtoString.split("");
  let sumOfDigit = 0;
  splitDigit.forEach((number) => {
    sumOfDigit += parseInt(number);
  });
  return sumOfDigit;
}

console.log("Sum of digits (8,9,9)", DigitSum(899));
