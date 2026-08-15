function areaOfRectangle(length, width) {
  if (length <= 0 || width <= 0) {
    console.log("Length and width should not be zero or negative");
  } else {
    const area = length * width;
    console.log("The area of rectangle is ", area, "cm²");
  }
}

areaOfRectangle(5, -835);
