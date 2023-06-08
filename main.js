// function myFunction() {
//   console.log('hello from reg function');
// }

// myFunction();

// const myFunc = () => {
//   console.log('hello from arrow function');
// }; // it's better to create arrow function with const as it's a reference
// myFunc();

// // myFunc = 6; //wrong

// myFunc();

// -----------------------------------------------------------
// -----------------------------------------------------------
function sum2(a, b) {
  this.name;
  // parameters
  constructor = () => {
    console.log('hello from constructor');
    this.name = 'Salman';
  };
  return a + b;
}

const sum = (a, b) => a + b;

sum(1, 2); // arguments
// console.log(sum(1, 2));
// console.log(sum(10, 20));
// console.log(sum);

// const test = (...salman) => {
//   // array of parameters, the best practice to be ...rest
//   console.log(salman);
//   return salman.reduce((cur, acc) => cur + acc, 0);
// };

// console.log(test(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function print() {
//   console.log(arguments);
//   return [...arguments].reduce((cur, acc) => cur + acc, 0);
// }

// console.log(print(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// -----------------------------------------------------------
// -----------------------------------------------------------

// its called closure
// const myTestFunction = () => {
//   console.log('event function');
//   return () => {
//     console.log('second function');
//   };
// };

// console.log(myTestFunction());

// const func = myTestFunction(); will call the outer function then take the returned value from myTestFunction (the inner function) and assign it to the variable
// const func = () => { // same as this function
//   console.log('second function');
// };

// func(); // this will call the inner function

// document.getElementById('btn').addEventListener('click', myTestFunction);
// setTimeout(myTestFunction, 2000);

// -----------------------------------------------------------
// (() => {
//   console.log('self invoking arrow function');
// })();

// (function () {
//   console.log('self invoking reg function');
// })();
// -----------------------------------------------------------

// const car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',

//   'car speed': 800,
// };

// const user = {
//   firstName: 'Ahmed',
//   lastName: 'Mahmoud',
//   age: 43,
//   isMarid: true,
//   numberOfChildren: 6,
//   getFullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// console.log(car.color);
// console.log(user.getFullName());

// console.log(car['car speed']);

// const keyName = 'color';

// console.log(car.keyName); // undefined
// console.log(car[keyName]); // same as car.color, it will take the value of keyName

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// ["name","car"] // tuple in js
// ("name","car") // tuple in python

// -----------------------------------------------------------
// myVar = 'Marwan';
// console.log(this);
// console.log(this === window);
// console.log(this.myVar);

// function hello() {
//   console.log(this);
// }

// const hello2 = () => {
//   console.log(this);
// };

// hello2();

// const user = {
//   firstName: 'Ahmed',
//   lastName: 'Mahmoud',
//   age: 43,
//   isMarid: true,
//   numberOfChildren: 6,

//   getFullName: function (a, b) {
//     console.log(this.firstName, this.lastName, a, b);
//   },

//   // getFullName2: () => user.age,
// };

// console.log(user.getFullName());

// console.log(user.getFullName2());

// const myFunc = () => {
//   console.log('my func');
// };

// const myUser = {
//   firstName: 'Mohammed',
//   lastName: 'Abu raida',
// };

// user.getFullName.call(myUser, 10, 20);
// user.getFullName.apply(myUser, [10, 20]);

// console.log(Math.max.apply(this, [1, 2, 3, 4]));
// console.log(Math.max(...[1, 2, 3, 4]));

// const myClonedFunction = user.getFullName.bind(myUser);
// myClonedFunction(10, 20);
// myClonedFunction(2, 15);

// // document.getElementById('btn').onclick = () => console.log(this);
// document.getElementById('btn').onclick = function () {
//   console.log(this);
// };

// -----------------------------------------------------------

const user = {
  firstName: 'Ahmed',
  lastName: 'Mahmoud',
  age: 43,
  isMarid: false,
  numberOfChildren: 6,
};

console.log('my name is ' + user.firstName + ' ' + user.lastName + " and I'm " + user.age + ' years old');
console.log(`my name is ${user.isMarid ? user.firstName : 'no name'} ${user.lastName} and i'm ${user.age} years old`);

const string4 = new String('A String object');
console.log(string4.toString());
console.log(string4 + '');

Number.isNaN('');

//Number.prototype.toFixed()
console.log((1.3).toFixed(2));
