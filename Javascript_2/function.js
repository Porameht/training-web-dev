// function calculateCircleArea(radius){
//     return Math.PI * radius **2
// }

const a = 1;
const b = 3;

function checkEvenOrOdd(number) {
  const isEven = number % 2 === 0;
  if (isEven) {
    return "EVEN";
  } else {
    return "ODD";
  }
  console.log("frank"); //จะไม่ถูกทำงาน
}


const aa = checkEvenOrOdd(a);
const bb = checkEvenOrOdd(b);

console.log("aa :>>", aa);
console.log("bb :>>", bb);

//----------------------------------------------

// const a = 2;
// const b = 3;

// function checkEvenOrOdd(number) {
//   const isEven = number % 2 === 0;
//   if (isEven) {
//     console.log("EVEN");
//   } else {
//     console.log("ODD");
// }

// const aa = checkEvenOrOdd(a);
// const bb = checkEvenOrOdd(b);

// console.log("aa :>>", aa);
// console.log("bb :>>", bb); //จะเป็น undifined เพราะไม่มีค่า return ออกมา
