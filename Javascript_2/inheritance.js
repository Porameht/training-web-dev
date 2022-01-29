// การสืบทอด
// super use call constructor on import the class
// extend call class

class Person {
  constructor(firstname, lastname) {
    (this.firstname = firstname), (this.lastname = lastname);
  }
}
// const person = new Person("porameht", "khumsombat");
// console.log(person);

class Student extends Person {
  constructor(firstname, lastname, id) {
    super(firstname, lastname), (this.id = id);
  }
}
// const student = new Student("porameht", "khumsombat", 124545);
// console.log(student);

class Teacher extends Person {
  constructor(firstname, lastname, subject) {
    super(firstname, lastname), (this.subject = subject);
  }
}
// const teacher = new Teacher("parichad", "ponpol", "computer");
// console.log(teacher);

//-----------------------------------------------------

class Shape {
  name;
  x;
  y;
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
  }
}

// class Circle extends Shape {
//   constructor(x, y, name, r) {
//     super(x, y, name);
//     this.radius = r;
//   }

// can use more type class Circle

class Circle extends Shape {
  constructor(name, r) {
    super(0, 0, "circle: " + name);
    this.radius = r;
  }

  calcurateArea(prefix) {
    return this.radius ** 2 * Math.PI + prefix;
  }
}

// const circle1 = new Circle(0, 0, "circle1", 7);
const circle1 = new Circle("frank", 7);

console.log(circle1.name);
console.log(circle1.calcurateArea(1));
