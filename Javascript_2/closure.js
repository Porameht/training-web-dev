// lexucal scope การใช้งานตัวแปรที่ประกาศใน scope ที่สูงกว่า

function getPrintName() {
  //function scope
  const name = "frank";
  function printName() {
    console.log(name);
  }
  return printName;
}

const fn1 = getPrintName();

//global scope

// console.log(fn1());
fn1();
// console.log(typeof getPrintName);
// console.log(typeof fn1);
