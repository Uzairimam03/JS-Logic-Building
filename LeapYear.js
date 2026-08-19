function isLeapYear(year) {
    if (typeof year === 'string'){
        throw new Error("String is not allowed")
    }
  if (year % 4 === 0 ) {
    console.log(`Year ${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

isLeapYear(2026);
// isLeapYear("Asdf")