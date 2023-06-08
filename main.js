// const myFunction = () => {
//   const myName = 'Amro';

//   const innerFunction = () => {
//     let myAge = 10;

//     console.log('inner function');
//     console.log(myName);
//   };

//   // console.log(myAge); myAge in not defined

//   return innerFunction;
// };

// // const innerFunction = () => {
// //   console.log('inner function');
// // };

// myFunction()();

// ----------------------------------------------------

// const arr = [
//   1,
//   'string',
//   { name: 'Hazem' },
//   [1, 2, 'Badran'],
//   function () {
//     console.log('Hazem Badran');
//     return 'test';
//   },
//   true,
//   1.6,
//   () => {
//     console.log('test');
//     return 'arrow';
//   },
// ];

// console.log(arr[3][2][1]);
// console.log(arr[-2]); // the index cannot be negative value
// console.log(arr.at(-2)); // it can take a negative value
// console.log(arr[6]);

// const newArr = arr.concat([1, 2, 3]);
// console.log(arr);
// console.log(newArr);

// console.log(Number.isNaN(1));
// console.log((1.2).toFixed(2)); // prototype

// ----------------------------------------------------

// const myArr = [1, 2, 3];

// const myCallBack = (item, index) => {
//   console.log(item, index);
//   return item;
// };

// myArr.forEach((item, index) => {
//   console.log(item, index);
// }); // call back here called anonymous function
// console.log('='.repeat(20));

// // myArr.forEach(myCallBack);

// console.log(myArr.forEach(myCallBack));

// ----------------------------------------------------

// const myArr = [1, 2, 3];

// const myCallBack = (item, index) => {
//   console.log(item, index);
//   return item + 10;
// };

// myArr.map((item, index) => {
//   console.log(item, index);
// }); // call back here called anonymous function
// console.log('='.repeat(20));

// // myArr.map(myCallBack);

// console.log(myArr.map(myCallBack));

// ----------------------------------------------------

// const myArr = [1, 2, 3, 4, 5];

// const myCallBack = (item, index) => {
//   console.log(item, index);
//   return item > 2;
// };

// console.log(myArr.filter(myCallBack));

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

// const deletedId = 2;

// const myCallBack = (item, index) => {
//   console.log(item);
//   return item.id !== deletedId;
// };

// console.log(usersArray.filter(myCallBack));

// ----------------------------------------------------

// const myArr = [1, 2, 3];

// console.log(
//   myArr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0)
// );
/**  acc cur result
 *    0   1   1
 *    1   2   3
 *    3   3   6
 */

// const mtNamesArray = ['Hazem', 'Amro', 'Hamza', 'Omer'];

// console.log(
//   mtNamesArray.reduceRight((accumulator, currentValue) => {
//     // from last to start (right to left)
//     return accumulator + ' ' + currentValue;
//   }, '')
// );

// const myObjectsArray = [{ name: 'ahmed' }, { age: 10 }, { gender: 'male' }];

// console.log(
//   myObjectsArray.reduce((accumulator, currentValue) => {
//     return { ...accumulator, ...currentValue };
//   }, {})
// );

// ----------------------------------------------------
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = ['1', '30', '4', '21', '100000'];

// array1.sort((a, b) => {
//   console.log(a - b);
//   return a - b;
// });

// console.log(array1);
// ----------------------------------------------------
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(0, 2, 'ahmed', 'madmoud', 'mostafa');
// console.log(months);
// console.log(months.join('*'));
// ----------------------------------------------------

// const arr = [1, 2, 3];
// console.log(arr.pop()); // remove from end returns the removed item
// console.log(arr);
// console.log(arr.push(10)); // add to end returns the length
// console.log(arr);
// console.log(arr.shift()); // remove from start returns the removed item
// console.log(arr);
// console.log(arr.unshift(10)); // add to start returns the length
// console.log(arr);
// ----------------------------------------------------

// if (1 === 1) console.log('true');
// if (1 === 1) {
//   console.log('true');
//   console.log('true');
// }

// if (1 === 2) {
//   console.log(true);
// } else if (1 === 3) {
//   console.log('false');
// } else {
//   console.log(false);
// }

// const myVar = 1 === 1 ? 'true' : 'false';

// ----------------------------------------------------

// console.log(Math.round(Math.random() * 10) + 10);

// console.log(Math.cbrt(8));
// console.log(Math.pow(16, 1 / 4));

// ----------------------------------------------------

// const myKey = 'one';

// switch (myKey) {
//   case 'one':
//     console.log('one');
//     break;
//   case 'two':
//     console.log('two');
//     break;
//   default:
//     console.log('default');
// }

// const myObject = {
//   one: () => console.log('one'),
//   two: () => console.log('two'),
// };

// myObject[myKey]();

// ----------------------------------------------------

// Good
// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

// Bad
// let i = 0;
// for (; i < 10; ) {
//   console.log(i);
//   i++;
// }

// ----------------------------------------------------

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// ----------------------------------------------------

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10); // always will execute the first round then will check the expression

// ----------------------------------------------------

// const myArr = [1, 2, 3, 4, 5];
// const myObject = {
//   name: 'Hazem',
//   age: 30,
// };

// for (let item of myArr) {
//   console.log(item);
// }

// for (let item in myObject) {
//   console.log(item);
// }
// ----------------------------------------------------
