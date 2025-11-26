// //1. let/const
// // ES5 (var)
// var name = "Ana";
// var name = "Nino"; // ხელახლა გამოცხადება შეიძლება → პრობლემა


// // ES6
// let age = 20;
// age = 21; 

// const city = "Tbilisi";
// city = "Batumi"; // ❌ შეცვლა არ შეიძლება





//2. Arrow Functions
// ES5
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3)); // 5

// ES6
// const sum = (a, b) => a + b;
// console.log(sum(2, 3)); // 5






// //3. Template Literals
// // ES5
// var name = "Elene";
// var message = "Hello " + name + "!";
// console.log(message); // Hello Elene!

// // ES6
// const name = "Elene";
// const message = `Hello ${name}!`;
// console.log(message); // Hello Elene!





// //4. Modules (import/export)
// export default function multiply(a, b) {
//   return a * b;
// }

// import multiply from "./multiply.js";

// console.log(multiply(3, 4)); // 12





// //5. Destructuring Assignment
// // ES5
// var user = { name: "Ana", age: 22 };
// var name = user.name;
// var age = user.age;

// console.log(name, age); // Ana 22

// // ES6
// const user = { name: "Ana", age: 22 };
// const { name, age } = user;

// console.log(name, age); // Ana 22






// //6. Default Parameters
// // ES5
// function greet(name) {
//   name = name || "Guest";
//   console.log("Hello " + name);
// }
// greet(); // Hello Guest

// // ES6
// function greet(name = "Guest") {
//   console.log(`Hello ${name}`);
// }
// greet(); // Hello Guest



