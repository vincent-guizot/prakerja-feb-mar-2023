// Object

// Variable yang memiliki lebih dari 1 value, tetapi memiliki key.

// var students = ["Vincent", 3.21, true];

// Object
var student = {
  // key / attributes
  name: "Admin",
  gpa: 3.21,
  isGraduated: true,
  skills: ["js", "c"],
  address: {
    city: "north jakarta",
    province: "dki jakarta",
  },
  "able to code": "yes",
  100: 5,

  // methods
  speak: function () {
    console.log("My name is " + this.name + ". Salam kenal thanks.");
  },
  mentionAddress: function () {
    console.log(
      "My address is in " + this.address.city + ", " + this.address.province
    );
  },
  keywordThis: function () {
    console.log(this);
  },
};

// console.log(student.name);
// console.log(student.gpa);
// console.log(student["isGraduated"]);
// console.log(student["skills"]);
// console.log(student.address.city);
// console.log(student.address.province);
// console.log(student["able to code"]);
// console.log(student["100"]);

// student.speak();
// student.mentionAddress();
// student.keywordThis();

// Array of objects
var items = [
  {
    id: 1,
    name: "Iphone 15 Pro Max",
    type: "gadget",
    price: 15000000,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Samsung S25",
    type: "gadget",
    price: 12500000,
    isAvailable: false,
  },
  {
    id: 3,
    name: "Asus ROG phone",
    type: "gaming phone",
    price: 15000000,
    isAvailable: true,
  },
];
// console.log(items);
// Result:
/**
 * List items:
 * 1. [X] Iphone 15 Pro Max, Rp. 15000000
 * 2. [ ] Samsung S25, Rp. 12500000
 * 3. [X] Asus ROG phone, Rp. 15000000
 */

function showItems() {
  console.log("List Items: ");
  for (let i = 0; i < items.length; i++) {
    if (items[i].isAvailable === true) {
      console.log(
        items[i].id + ". [X] " + items[i].name + ", Rp. " + items[i].price
      );
    } else {
      console.log(
        items[i].id + ". [ ] " + items[i].name + ", Rp. " + items[i].price
      );
    }
  }
}

showItems();
