var students = [
  {
    id: 1,
    name: "John",
    age: 18,
    major: "IT",
    isGraduated: true,
  },
  {
    id: 2,
    name: "Jane",
    age: 17,
    major: "IT",
    isGraduated: false,
  },
];

function showStudents() {
  console.log("Student list: ");
  for (let i = 0; i < students.length; i++) {
    if (students[i].isGraduated === true) {
      console.log(
        students[i].id +
          ". [v] " +
          students[i].name +
          " - " +
          students[i].major +
          " , " +
          students[i].age +
          " yrs old."
      );
    } else {
      console.log(
        students[i].id +
          ". [ ] " +
          students[i].name +
          " - " +
          students[i].major +
          " , " +
          students[i].age +
          " yrs old."
      );
    }
  }
}

function addStudent(name, age, major) {
  let lastIndex = students.length - 1;
  let id = students[lastIndex].id + 1;
  let isGraduated = false;

  students.push({
    id,
    name,
    age,
    major,
    isGraduated,
  });
}
function deleteStudent(id) {
  let temp = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].id !== id) {
      temp.push(students[i]);
    }
  }
  students = temp;
}
function updateStudent(id, name) {
  let temp = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      students[i].name = name;
    }
    temp.push(students[i]);
  }
  students = temp;
}
function changeStatus(id) {
  let temp = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      students[i].isGraduated = !students[i].isGraduated;
    }
    temp.push(students[i]);
  }
  students = temp;
}
addStudent("Admin", 19, "SI");
deleteStudent(2);
updateStudent(3, "Jim");
changeStatus(3);
showStudents();
// Study Case
/**
 * Buatlah function dengan ketentuan berikut:
 * 1. showStudents
 * Result:
 * Students list:
 * 1. [v] John - IT , 18 yrs old
 * 2. [ ] Jane - IT , 17 yrs old
 *
 * 2. addStudent(name, age, major) =>
 * id => increment, isGraduated = false
 *
 * 3. deleteStudent(id)
 *
 * 4. updateStudent(id, name)
 *
 * 5. changeStatus(id)
 * mengganti isGraduated dari true menjadi false, dan dari false menjadi true
 */
