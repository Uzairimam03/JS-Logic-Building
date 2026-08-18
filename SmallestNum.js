function isSmaller(a, b, c){
  if (a < b && a < c) {
    const small = a;
    console.log(`Number ${small} is smallest `);
  } else if (b < a && b < c) {
    const small = b;
    console.log(`Number ${small} is smallest `);
  } else if (c < a && c< b) {
    const small = c;
    console.log(`Number ${small} is smallest `);
  } else {
    console.log("All the values are equal")
  }
}

isSmaller(3, 4, 4);
