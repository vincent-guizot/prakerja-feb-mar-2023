// OOP = Object Oriented Programming

// Perbedaan antara Object LIteral dengan Object Class

// const student = {
//   // key
//   name: "Vincent",
//   gpa: 3.21,
//   isGraduated: true,
//   //methods
//   speak: function () {
//     console.log(`My name is ${this.name},and my GPA is ${this.gpa}.`);
//   },
//   graduatedStatus: function () {
//     if (this.isGraduated) {
//       console.log("I'm graduated.");
//     } else {
//       console.log("I'm not graduated");
//     }
//   },
// };
// console.log(student);
// student.speak();
// student.graduatedStatus();

class Student {
  constructor(id, name, gpa, isGraduated, city) {
    this.id = id;
    this.name = name;
    this.gpa = gpa;
    this.isGraduated = isGraduated;
    this.city = city;
  }

  speak() {
    //
    console.log(`My name is ${this.name},and my GPA is ${this.gpa}.`);
  }
  graduatedStatus() {
    //
    if (this.isGraduated) {
      console.log("I'm graduated.");
    } else {
      console.log("I'm not graduated");
    }
  }
}

// Instanciation

let student = new Student(1, "Vincent", 3.21, true, "Jakarta")
let student1 = new Student(2,"John",3.00,true,"Bandung")
let student2 = new Student(3,"Jane",3.05,false,"Bekasi")

console.log(student)
console.log(student1)
console.log(student2)

// student.speak()
// student.graduatedStatus()