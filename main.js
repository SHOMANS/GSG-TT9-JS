// console.log('hello world');
// console.error('hello error');
// console.warn('hello warning');

// console.table([1, 2, 3]);
// ---------------------------
// alert('hello alert');
// ---------------------------
// prompt('hello from prompt', 'test');
// const value = prompt('hello from prompt', 'test');
// console.log(value);
// ---------------------------
// confirm('hello confirm');
// const bool = confirm('hello confirm');
// console.log(bool);
// ---------------------------
// document.write('<h1>hello</h1>');
// document.body.textContent = 'hello from js';

// single line comment

/*
multi
line
comment
  */

/**
 * document comment
 */
// ---------------------------

// var
// let
// const

// redeclare

// var test = 'test';
// var test = 'test2';
// console.log(test);

// let test2 = 'test2';
// const  test2 = 'test';
// const  test2 = 'test2';

// var test2 = '';
// let test2 = 'test';

// ---------------------------
//reassign

// var test = 1;
// test = 2;

// let test2 = 1;
// test2 = 2;

// const test3 = 1;
// test3 = 2; // cannot

// ---------------------------
// scope
// if (true) {
//   var test = 1;
// }

// console.log(test);

// if (true) {
//   let test = 1;
// }

// console.log(test);

// function testFunc() {
//   var test = 1;
// }

// testFunc();

// console.log(test);
// ---------------------------
// hoisting

// console.log(test); // undefined
// var test = 5;

// console.log(test); // cannot
// let test = 5;
// ---------------------------
// const test = 2;

// function testF() {
//   const test = 3;
// }
// ---------------------------
// ---------------------------

// let myVar = 1;

// function testFunc(number) {
//   number = 5;
// }

// testFunc(myVar);

// console.log(myVar); // 1
// ---------------------------

// const myObj = { number: 1 };

// function testFunc2(obj) {
//   obj.number = 5;
// }

// testFunc2(myObj);

// console.log(myObj.number); // 5
// ---------------------------

// let myNumber = 1;

// let myNumber2 = myNumber;

// myNumber2 = 5;
// myNumber = 2;

// console.log(myNumber2, myNumber);

// ---------------------------

// const myObj = { number: 1 };
// const myObj2 = myObj; // shallow copy

// myObj2.number = 5;

// console.log(myObj === myObj2); // true

// console.log(myObj2.number, myObj.number);
// ---------------------------
// const myObj = { number: 1 };

// const myObj2 = { ...myObj }; // deep copy

// myObj2.number = 5;

// console.log(myObj === myObj2); // false

// console.log(myObj2.number, myObj.number);
// ---------------------------

// console.log(1 + 1);
// console.log(1 - 1);
// console.log(1 * 1);
// console.log(1 / 1);

// console.log(5 % 2);
// console.log(5 ** 2);

// console.log(1 + '1');
// console.log('1' + 1);

// console.log(1 - '1');
// console.log('1' - 1);
// console.log('1' - '1');
// console.log('hello' - '1');

// console.log('hello' + 1);

// console.log(1 * '1');
// console.log('1' * 1);
// console.log('1' * '1');
// console.log('hello' * '1');

// let i = 0;
// console.log(i++);
// console.log(i);

// let j = 10;
// console.log(--j);
// console.log(j);

// let x = 10;
// x += 1;
// x -= 1;
// x *= 1;
// x /= 1;

// ---------------------------
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// console.log(true || '');
// console.log('' || true);

// console.log('false' || true);
// console.log('' || 'true');
// console.log(1 || 'true');
// console.log(0 || 10);
// console.log(0 || undefined);

// console.log(1 || 2 || 3);
// console.log(0 || false || null || undefined);

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log('false' && 0);

// console.log(typeof null); // object
// console.log(typeof NaN); //number
// console.log(typeof undefined); // undefined

// console.log(typeof []); // object
// console.log(typeof {}); // object

// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); //false

// console.log(NaN === NaN);
// console.log(Boolean([]));

// console.log(!!'test');
