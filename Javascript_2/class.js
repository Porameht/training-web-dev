//class is a template for creating object.

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
// }
// this ใช้ scope ที่อยู่เหนือ class
//-------------------------------------------------

class Student {
  // attribute
  name;
  age;
  title;
  // constructor
  constructor(t, n, a) {
    this.name = n;
    this.age = a;
    this.title = t;
  }
  // method
  getGreetingText(prefix) {
    return prefix + "hello" + this.title + this.name + this.age;
  }
}

//use class
const student1 = new Student("Mr.", "frank", 20);
const student2 = new Student("Mr.", "frank1", 22);
const student3 = new Student("Mr.", "frank2", 23);

console.log(student1);
console.log(student1.getGreetingText("hello")); // วงเล็บปีกกา () ใช้สำหรับการ call function
console.log(student2.getGreetingText("hi")); // วงเล็บปีกกา () ใช้สำหรับการ call function
console.log(student3.getGreetingText("yed")); // วงเล็บปีกกา () ใช้สำหรับการ call function

// console.log(typeof student1);
// console.log(student1 instanceof Student); //ถามว่าเป็น object ของ class Student หรือเปล่า
