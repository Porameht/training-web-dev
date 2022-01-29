// const a = 1;

// let b = a;

// b = 5;

// console.log(a);
// console.log(b);

//-----------------------------

// const a = [1, 2, 3];
// const b = a;

// b[1] = 99;

// console.log("a >>", a);
// console.log("b >>", b);

//-----------------------------

//การแก้ไขแต่ละครั้งของตัวแปรอ้างอิงจะไม่ถูกแก้ไปด้วย
//copy array of copy object

// const a = [1, 2, 3, 4];

// let b = [...a];

// b[1] = 99;

// console.log("a >>", a);
// console.log("b >>", b);

//----------------------------

// const a = {
//   name: "frank",
// };

// const b = { ...a };

// b.name = "javascript";

// console.log("a >>>", a);
// console.log("b >>>", b);

//----------------------------

// const a = {
//   name: "frank",
// };

// a.name = "123"; //แก้ไขได้

// // a = {
// //     name:"123" // สามารถแก้ไขได้แต่ไม่สามารถ assign ค่าใหม่ได้
// // }

// console.log(a);

//---------------------------------

// function add(a, b) {
//   return a + b;
// }

// const sum = add(10, 20);
// console.log(sum);

// ---------------------------------

// function addAge(student1, student2) {
//   const result = student1;
//   result.age = student1.age + student2.age;
//   return result;
// }
//มีโอกาสบัคจากเก็บค่าของ result = student1

function addAge(student1, student2) {
  const result = {
    age: student1.age + student2.age,
  };
  return result;
}

const a = {
  age: 10,
};

const b = {
  age: 20,
};

const sum = addAge(a, b);
console.log(a, b);
console.log(sum);
