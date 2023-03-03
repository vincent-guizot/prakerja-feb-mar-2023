// Teori utama dalam OOP : 4 pilar utama
/**
 * 1. Inheritance
 * 2. Encapsulation
 * 3. Polymorphism
 * 4. Abstraction
 */

class Person {
  constructor(id, name, age, job, city) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.job = job;
    this.city = city;
  }
}

class Programmer extends Person {
  constructor(id, name, age, job, city) {
    super(id, name, age, job, city);
  }
}
class Designer extends Person {
  constructor(id, name, age, job, city) {
    super(id, name, age, job, city);
  }
}

const programmer = new Programmer(1, "VIncent", 19, "programmer", "jakarta");
const designer = new Designer(2, "John", 19, "designer", "Bandung");

// console.log(programmer);
// console.log(designer);

// Factory class => class yang di utamakan hanya method nya saja

class Office {
  constructor(divisions) {
    this.divisions = divisions || [];
  }
  showEmployees() {
    // untuk emnampilkan karyawan
    console.log(this.divisions);
  }
  addEmployee(name, age, job, city) {
    // untuk menambahkan karyawan
    let id;
    if (this.divisions.length === 0) {
      id = 1;
    } else {
      id = this.divisions[this.divisions.length - 1].id + 1;
    }

    switch (job) {
      case "programmer":
        this.divisions.push(new Programmer(id, name, age, job, city));
        break;
      case "designer":
        this.divisions.push(new Designer(id, name, age, job, city));
        break;
    }
    console.log(`"${name}" has been submitted.`);
  }
  deleteEmployee(id) {
    // untuk menghapus karyawan berdasarkan id
    this.divisions = this.divisions.filter((division) => division.id !== id);
    console.log(`Employee with id ${id} has been removed.`);
  }
  updateEmployee(id, name, age, job, city) {
    // untuk mengubah karyawan berdasarkan id
    this.divisions = this.divisions.map((division) => {
      if (division.id === id) {
        division.name = name;
        division.age = age;
        division.job = job;
        division.city = city;
      }
      return division;
    });

    console.log(`Employee with id ${id} has been updated.`);
  }
}

// Instantiation
const office = new Office();

office.addEmployee("Jane", 21, "programmer", "jakarta");
office.addEmployee("John", 19, "designer", "jakarta");
office.deleteEmployee(2);
office.updateEmployee(1, "Jim", 23, "programmer", "bogor");
office.showEmployees();
