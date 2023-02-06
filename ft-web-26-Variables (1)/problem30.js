let a = "Hari";
let b = "Hari";
let c = "Hari";
if ((a == b) && (a == c)) {
  console.log("all the names are same");
}
else if ((a !== b) && (b !== c) && (a !== c)) {
  console.log("all are different");
}
else if (a == b) {
  console.log("a is equal to b");
}
else if (b == c) {
  console.log("b is equal to c");
}
else {
  console.log("a is equal to c");
}