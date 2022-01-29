const student = {
  name: "frank",
  age: "26",
  fristName: "porameht",
  lastName: "khumsombat",
};

// --------------------------------------------------

const keys = Object.keys(student);
console.log(keys);
for (let i = 0; i < keys.length; i = i + 1) {
  const key = keys[i];
  console.log(student[key]);
  //   console.log(student[i]) = is the undefined;
}

// --------------------------------------------------

for (aaa in student) {
  console.log(student[aaa]);
}
