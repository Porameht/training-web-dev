// Data Type & Variable

// โจทย์ให้ประกาศตัวแปรที่เก็บค่าดังต่อไปนี้ให้เหมาะสมกับชนิดของข้อมูล

// เงิน 50 บาท

let money = 50;
// console.log(money);
// console.log(typeof money);

// เงินในกระเป๋า จำนวน 593.50 บาท

let money2 = 593.5;
// console.log(money2);
// console.log(typeof money2);

// ชื่อของหนังสือ harry potter

let nameBook = "Harry Potter";
// console.log(nameBook);
// console.log(typeof nameBook);

// เลขบัตรสมาชิกห้องสมุด 19402992945

let idBook = "19402992945";
// console.log(idBook);
// console.log(typeof idBook);

// สินค้า หน้าจอคอม รุ่น U2712034 ราคา 4888

let product = {
  type: "monitor",
  model: "U2712034",
  price: 4888,
};
// console.log(product);
// console.log(typeof product);

// let nameModel = monitorCom.model;
// console.log(nameModel);

// นักเรียน a ที่ชื่อ frank อายุ 22 ปี เพศชาย

let studentA = {
  name: "frank",
  age: 22,
  sex: "Male",
};
console.log(studentA);

// นักเรียน b ที่ชื่อ javascript อายุ 100 ปี เพศไม่มี

let studentB = {
  name: "javascript",
  age: 100,
  sex: null,
};
console.log(studentB);

// ห้องเรียนชื่อ MERN Course ที่มีนักเรียน 2 คนคือ นักเรียน a, นักเรียน b

let classRoom = {
  name: "MERN Course",
  // studentA : studentA
  // studentA,
  // studentB
  students: [studentA, studentB], //สามารถเพิ่มจำนวนได้ง่ายกว่า
};

console.log(classRoom);
