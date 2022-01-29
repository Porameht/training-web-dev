// รับค่า num1 เป็นคู่ print EVEN คี่ print ODD

// const num1 = "frnk";

// console.log(num1 % 2);

// const isEven = num1 % 2 === 0;

// // const isODD = !isEven; //จะเป็น true เนื่องจากมี !
// const isODD = num1 % 2 === 1;
// // const isODD = num1 % 2 !== 0;

// if (isEven) {
//   console.log("EVEN");
// } else if (isODD) {
//   console.log("ODD");
// } else {
//   console.log("unknown");
// }

// -----------------------------------------------------------------------------

// num1 num2 num3
const num1 = 1;
const num2 = 5;
// const num3 = 13;
const num3 = "frank";

// console.log(num3 > num1);

// num1 >= num2 >= num3  print num1
// num2 >= num2 >= num3 print num2
// num3 >= num1 >= num2 print num3

if (
  typeof num1 !== "number" ||
  typeof num2 !== "number" ||
  typeof num3 !== "number"
) {
  console.log("input error");
}

let result;

if (num1 >= num2 && num1 >= num3) {
  console.log("case 1");
  result = num1;
} else if (num2 >= num1 && num2 >= num3) {
  console.log("case 2");
  result = num2;
} else if (num3 >= num1 && num3 >= num2) {
  console.log("case 3");
  result = num3;
}

console.log(result);

console.log(typeof "5", typeof 5, typeof "false");
