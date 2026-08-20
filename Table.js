function Table(table, range) {
  if (typeof (table) && typeof (range) === "number" && (range) > 0 ) {
    for (let i = 1; i <= range; i++) {
      console.log(table, "*", i, "=", table * i);
    }
  } else {
    console.log("Table of and Table till should be a number and table till is greater than zero");

  }
}

Table(4, 0);
