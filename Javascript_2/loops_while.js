// while (condition) {
// do something
// }

const a = 0; //ใช้ a + 1 ไม่ได้เนื่องจากเป็น const
let a1 = 20;
while (a1 != 10) {
  console.log(a1);
  if (a1 > 10) {
    a1 = a1 - 1;
  } else if (a1 < 10) {
    a1 = a1 + 1;
  }
  // logic
}

// control + c close program
