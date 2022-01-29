let a = "1";

const num = Number("1");

// console.log(num, typeof num);

Number;
String;
Boolean;

const b = String(123);
// console.log(b, typeof b);

const c = Boolean("dddd");
// console.log(c, typeof c);

// console.log(Boolean(null));
// console.log(Boolean(undefined));

const d = {};
// console.log(Boolean(d));

const e = [];
// console.log(Boolean(e));

JSON;

const f = {
  name: "frank",
};

const g = JSON.stringify(f);

// console.log(JSON.stringify(f), f);
// console.log(JSON.parse(g)); //reverse JSON to Object

const h = Math.PI;
// console.log(h);
const r = 7;

const area = h * r ** 2;
// console.log(area);

// console.log(Math.round())

// console.log(Math.round(area)); //ปัดเศษขึ้นเมื่อมากกว่าจุด 5
// console.log(Math.floor(area)); // ปัดลงเสมอ
// console.log(Math.ceil(area)); // ปัดขึ้นเสมอ

Date;

const d1 = new Date();
const d2 = new Date("2021-01-01");

console.log(d1);
console.log(d2);
console.log(d2.getDay());
