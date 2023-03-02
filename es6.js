// ECMAScript 6

// 1. Perbedaan var, let dan const

// Hoisting = pengangkatan atau eksekusi.
// console.log(number)
// var number = 10;

// let dan const
let number = 10;
number = 5;
// console.log(number);

const pi = 3.14;
// pi = 10;
// console.log(pi);

// 2. Template Literal

let str1 = "sudah";
let str2 = "makan";
let str3 = "malam";

// Result : sudah makan malam

// ES5
// console.log(str1 + " " + str2 + " " + str3);

// ES6
// console.log(`${str1} ${str2} ${str3}`)

// 3. Arrow Function

// Ada 3 cara pembuatan function:

// 1. Function Declaration
function hello() {
  console.log("Function Declaration");
}
// hello()

// 2. Function Expression
const helloExpression = function () {
  console.log("Function Expression");
};
// helloExpression()
// 3. Function Arrow

const helloArrow = () => {
  console.log("Arrow Function");
};
// helloArrow()

// Study Case
// Cek Bilangan Ganjil Genap
// ES5
function cekGenapGanjil(number) {
  if (number % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}
// ES6
const cekGanjilGenap = (number) => (number % 2 === 0 ? "genap" : "ganjil");
console.log(cekGenapGanjil(5));
