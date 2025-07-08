let age = 25;
let price = 10.99;
console.log(`you are ${age} years old`);

let online = false;
console.log(typeof online);

//html id=p1
// let fullName = `Bro code`;
// document.getElementById("p1") = fullName;

//Arithmetic
let students = 30;
// students = students + 3;
// students = students ** 2;
// students += 2;
students **= 2;
console.log("Students: ", students);

//operator precedence
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

//html
// let userName = window.prompt("What is ur name");
// console.log(userName);

let age1 = "How old are you";
age1 = Number(age1);
age1 += 1;
console.log(age1);

const PI = 3.14;
let radius = 5;
let circumference = Number;
circumference = 2 * PI * radius;
console.log(circumference);

console.log(Math.PI);
let x = 3.21;
let y = 2;
let z;
z = Math.round(x);
z = Math.floor(x);
z = Math.trunc(x);
z = Math.pow(x, y);
let l = 1;
let max = Math.max(x, y, l);
console.log(max);
console.log(z);
Math.random();

//ternary
let age2 = 12;
let message = age2 >= 18 ? "You are an Adult" : "You are not an Adult";
console.log(message);

//switch case
let score = 33;
let grade;
switch (true) {
  case score >= 40:
    grade = "A";
    break;
  default:
    grade = "F";
}
console.log(`Your grade is ${grade}`);

//strings
let name1 = "bro";
name1.charAt(0).toUpperCase();
console.log(name1.charAt(0));
console.log(name1.lastIndexOf("o"));
console.log(name1.length);
let phoneNo = "123-456-7890";
phoneNo = phoneNo.replaceAll("-", " ");
console.log(phoneNo);

phoneNo = phoneNo.padStart(15, "0");
console.log(phoneNo);
