// const usersArray = [
//   {
//     name: 'Hazem',
//     age: 30,
//     gender: 'male',
//     id: 1,
//   },
//   {
//     name: 'Amro',
//     age: 20,
//     gender: 'male',
//     id: 2,
//   },
//   {
//     name: 'Hamza',
//     age: 36,
//     gender: 'male',
//     id: 3,
//   },
//   {
//     name: 'Omer',
//     age: 25,
//     gender: 'male',
//     id: 4,
//   },
// ];

// const months = ['Jan', 'Feb', 'March', 'April', 'June'];

// // console.log(months[0]);

// const mySecondFunction = (arr) => {
//   arr.forEach((element) => {
//     console.log(element);
//   });
// };

// const myFunction = (arr) => {
//   const [first, second, ...rest] = arr; // destructuring

//   mySecondFunction(rest);
// };

// myFunction(usersArray);
// // console.log(months);

// const q1 = ['Jan', 'Feb', 'Mar'];
// const q2 = ['Apr', 'May', 'Jun'];
// const q3 = ['Jul', 'Aug', 'Sep'];
// const q4 = ['Oct', 'Nov', 'May'];

// const year = [[...q1], q2, q3, q4];
// const year = [q1, q2, q3, q4];

// console.log(year);

// console.log(year[0] === q1);

// --------------------------------------------------

// const smallObj = {
//   test: 'Hazem',
// };

// const obj = {
//   name: 'Hazem',
//   age: 30,
//   address: 'Khan',
// };

// const newObj = { obj: { ...obj }, ...smallObj };

// console.log(newObj.obj === obj);

// const { ...rest } = obj;

// const newObj = { ...obj };

// /**
//  * by writing {} it will create new object with new reference
//  * then by adding ...obj inside the {} it will deep copying the data from obj and storage them inside the newObj
//  */

// console.log(newObj === obj);

// --------------------------------------------------

// function myFunction(x, y = 10) {
//   // y is 10 if not passed or undefined
//   return x + y;
// }
// console.log(myFunction(5)); // will return 15

// --------------------------------------------------
// function sum() {
//   let sum = 0;
//   for (let arg of arguments) sum += arg;
//   return sum;
// }

// const sum = (...args) => {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// };

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(sum(x));
// --------------------------------------------------
// console.log(9999999999999999); // will print 10000000000000000
// console.log(Number.isSafeInteger(999999999999999)); // true
// console.log(Number.isSafeInteger(9999999999999999)); // false

// let x = 10;

// x **= 2;
// console.log(x);

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------

const arr2 = [1]; // 1

const arr3 = []; // 1

// const arr4 = [1, 2, [3, 4, [5], 6, [[[7], 19], [8, [9], [10, [11]]], 12], [[13]], 14], 15]; // 6

const arr5 = [1, [2], 3, [4, [5]], 6]; // 3

/**
 * you should create a function that
 * take an array as parameter with nested arrays
 * and it should return the depth of this arr
 */

// const arr = [1, 2, [3, [4, [5]], [6]]]; // 4

// const arr4 = [1, 2, [3, 4, [5], 6, [[[7], 19], [8, [9], [10, [11]]], 12], [[13]], 14], 15]; // 6

// const calculateDepth = (arr, maxDepth = 0) => {
//   if (Array.isArray(arr)) {
//     arr.forEach((item) => {
//       maxDepth = Math.max(calculateDepth(item), maxDepth);
//     });

//     return maxDepth + 1;
//   }

//   return maxDepth;
// };

// const calculateArrayDepth = (arr) => (Array.isArray(arr) ? 1 + Math.max(...arr.map(calculateArrayDepth)) : 0);

// console.log(findDepth(arr4));

// const func = (arr) => {
//   let counter = 0;
//   let myDepthsArr = [];
//   const string = JSON.stringify(arr);
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === '[') counter++;
//     if (string[i] === ']') counter--;
//     myDepthsArr.push(counter);
//   }

//   console.log(string);
//   return Math.max(...myDepthsArr);
// };

// console.log(func(arr4));

// --------------------------------------------------

// let test = 1;

// test ^= 1;

// console.log(test);
