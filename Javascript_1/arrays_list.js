let circles = ["green-circle", "red-circle", "blue-circle", "black-circle"];

// console.log(circles[2]);

// console.log(circles);

// แก้ไขข้อมูลใน array

circles[1] = "frank";
console.table(circles);

// เพิ่มข้อมูล

const num1 = 20;
//circles.push("javascript");
//circles.push(num1);
console.table(circles);

// ลบข้อมูล

circles.pop();
console.table(circles);

circles[1] = null;
console.table(circles);
