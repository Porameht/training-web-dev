// global scope
function addAge(student1, student2) {
  //local scope 1 => function scope ถ้าอยู่ใน function เรียก function
  var num1 = 5;
  const num2 = 6;
  let num3 = 7;

  return 1;
}

// console.log(num1);
// console.log(num2);
// console.log(num3);

// ไม่สามารถเข้าถึงตัวแปรที่ประกาศอยู่ใน function scope ได้

// ------------------------------------------------

if (1 > 0) {
  //local scope => block scope ถ้าอยู่ใน swich case เรียก block
  var num4 = 5; //var สามารถใช้งาน นอก scope ได้
  const num5 = 6;
  let num6 = 7;
}

// console.log(num4);
// console.log(num5);
// console.log(num6);

// ------------------------------------------------

// lexucal scope การใช้งานตัวแปรที่ประกาศใน scope ที่สูงกว่า

// global scope
var num7 = 5;
let num8 = 6;
const num9 = 7;

function addABWithNumber(a, b) {
  // function scope
  console.log(num7);
  console.log(num8);
  console.log(num9);
  return a + b + num7 + num8 + num9;
}

const result = addABWithNumber(1, 2);
console.log(result);
