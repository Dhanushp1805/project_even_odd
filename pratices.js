// Logical Operator with Non Boolan value
// falsy
// undefined
// null
// 0
// false
// NaN
// '' -> ""

// Truthy -> Anything that is not falsy is -> Truthy

// let userColor = null;
// let defultColor = null;
// let currentColor = userColor || defultColor==null?"nul val":"val";
// // first value true va iruntha first value yeduthuttu varum and appadi illa na false irunthuchu na secound valuekku yeduthuttu poivedum.

// console.log("Selected color " + currentColor );

////////////////////////////////////////// Switch-case //////////////////////////////////////////
// Ex: Grade
// let grade = "E";

// switch (grade) {
//   case "S":
//     console.log("Super Grede");
//     break;
//   case "A":
//     console.log("Excellent Grade");
//     break;
//   case "E":
//     console.log("Just Pass!");
//     break;
//   case "U":
//     console.log("Failed Grade");
//     break;
//   default:
//     console.log("Unknow grade");
// }

// ex:

// let amount = 9;

// switch (true) {
//   case amount > 60:
//     console.log("Buy iPhone Mobile");
//     break;
//   case amount >= 10:
//     console.log("Buy Android Mobile");
//     break;
//   case amount > 5 && amount < 10:
//     console.log("Buy basic mobile");
//     break;
//   default:
//     console.log("Under amount");
// }

////////////////////////////////////////// for Loop //////////////////////////////////////////

// for (let i = 0; i <= 10; i++) {
//   let print = i % 2 !== 0 ? `odd Number ${i}` : `Even number ${i}`;
//   console.log(print);
// }

////////////////////////////////////////// While Loop //////////////////////////////////////////
// let i = 0;

// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log("Even Number" + i);
//   }else{
//      console.log("Odd Number" + i);
//   }
//   i++;
// }

////////////////////////////////////////// DO-While loop //////////////////////////////////////////
// let i = 0;
// do {
//   if (i % 2 === 0) {
//     console.log("Even Number" + i);
//   } else {
//     console.log("Odd Number" + i);
//   }
//   i++;
// } while (i <= 10);

////////////////////////////////////////// for in loop //////////////////////////////////////////
// Object for-in loop
// let person = {
//   name: "Sri",
//   age: 17,
//   gander: "Male",
// };

// for (let key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

// Array for-in loop   ///// Key is Index value
// let colors = ["red", "blue", "green"];

// // for (let key in colors) {
// //   console.log(`${key} : ${colors[key]}`);
// // }

////////////////////////////////////////// for of loop //////////////////////////////////////////
// for (let index of colors) {
//   // index is color ooda index value and of is color ooda value yeduthukkum
//   console.log(`color : ${index}`);
// }

////////////////////////////////////////// All function //////////////////////////////////////////

// const person1 = {
//   name: "Sri",
//   age: 17,
// };
// const person2 = {
//   name: "Dav",
//   age: 17,
// };

// function personName(){
//     console.log(person.name)
// }

// personName()
// parameter and Argument function
// function personName(name){ /// name is parameter
//     console.log(name);
//     console.log(age)
// }

// personName(person1.name, ) /// person.name is argument
// personName(person2.name) /// person.name is argument

////////////////////////////////////////// function return //////////////////////////////////////////

// function fullName (firstName, lastName){
//     return firstName + lastName
// }

// let personName = fullName("Lavanya", "sri");

// console.log(personName)

////////////////////////////////////////// anonymous function //////////////////////////////////////////
// let fullName = function (firstName, lastName) {
//     return firstName + " " + lastName
// }

// let personName = fullName("Lavanya", "sri");
// console.log(personName)

////////////////////////////////////////// Arrow function //////////////////////////////////////////
// let fullName =  (firstName, lastName) =>{
//     return firstName + " " + lastName
// }

// let personName = fullName("Lavanya", "sri");
// console.log(personName)

////////////////////////////////////////// Array Methods //////////////////////////////////////////

// foreach method ////////////
// let fruits = ["Apple", "banana", "orange"];

// fruits.forEach((index) => {
// console.log(index.toUpperCase())
// });

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr1 = [
//   {
//     id: 0,
//     name: "Sri",
//   },
//   {
//     id: 1,
//     name: "Dev",
//   },
//   {
//     id: 2,
//     name: "Ram",
//   },
//   {
//     id: 3,
//     name: "Ravi",
//   },
// ];
// arr.forEach((element) => {
//   console.log(element);
// });
// arr1.forEach((element1, index, arr) => {
//   if (index === 0) {
//     console.log(element1.id + " " + element1.name);
//   } else if (index === 1) {
//     console.log(element1.id + " " + element1.name);
//   }
// });

// arr1.forEach((user, index) => {
//   console.log(`${index}: ${user.id} ${user.name}`);
// });

// let totalId = arr1.reduce((total, item) => {
//   return total + item.id;
// }, 0);
// console.log(totalId);

// let num = [1, 2, 3, 4, 5, 7, 8, 9, 10];

// function rest(...arg) {
//   for (let key of arg) {
//     console.log(`${key}`);
//   }
// }

// rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

////////////////////////////////////////// Object //////////////////////////////////////////

let person = {
  firstName: "lavanya",
  lastName: "sri",
  age: 17,
  gender: "female",
  isAlive: true,
  parent: {
    father: "Vijay",
    mother: "Thirsha",
    brother: "Dhanush",
  },
  fullName: function () {
    return this.firstName + this.lastName;
  },
};

// let personMethods = {
//   yearofBirth() {},
// };

// console.log(person.fullName());
// console.log(person);

// Object Merging
// Object.assign(person, personMethods);
// console.log(person);

// Spread Operator
// let finlObj = { ...person, ...personMethods };
// console.log(finlObj);

// // delete
// delete person.age;
// console.log(person);

////////////////////////////////////////// JavaScript Object Destructuring //////////////////////////////////////////

// let { firstName: myfirstName = "dhanu", lastName, age = 20, favColor="Green" } = person;
// console.log(myfirstName, lastName, age, favColor);

let {firstName, lastName, ...remainingItems} = person;

console.log(firstName, lastName, remainingItems);

