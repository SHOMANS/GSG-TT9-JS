// const myButton = document.getElementById('click');

// myButton.addEventListener('click', () => console.log('clicked from add event listener'));
// myButton.addEventListener('click', () => console.log('clicked from add event listener2'));
// myButton.addEventListener('click', () => console.log('clicked from add event listener2'));
// myButton.addEventListener('click', () => console.log('clicked from add event listener2'));
// myButton.addEventListener('click', () => console.log('clicked from add event listener2'));
// myButton.addEventListener('click', () => console.log('clicked from add event listener2'));

// myButton.onclick = () => console.log('clicked from onClick');
// myButton.onclick = () => console.log('clicked from onClick2');
// myButton.onclick = () => null;

// --------------------------------------------------------

// const btn1 = document.getElementById('one');
// const btn2 = document.getElementById('two');
// const btn3 = document.getElementById('three');
// const btn4 = document.getElementById('four');

// const content = document.getElementById('content');

// btn1.addEventListener('click', () => {
//   content.innerHTML = 'Button 1 clicked';
// });

// btn2.addEventListener('click', () => {
//   content.innerHTML = 'Button 2 clicked';
// });

// btn3.addEventListener('click', () => {
//   content.innerHTML = 'Button 3 clicked';
// });

// btn4.addEventListener('click', () => {
//   content.innerHTML = 'Button 4 clicked';
// });

// --------------------------------------------------------

// const contentArr = ['Button 1 clicked', 'Button 2 clicked', 'Button 3 clicked', 'Button 4 clicked'];

// const content = document.getElementById('content');

// const myBtns = document.querySelectorAll('#btns button');

// console.log(myBtns);

// myBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     content.innerHTML = contentArr[index];
//   });
// });

// --------------------------------------------------------

// const contentObj = {
//   one: 'Button 1 clicked',
//   two: 'Button 2 clicked',
//   three: 'Button 3 clicked',
//   four: 'Button 4 clicked',
// };

// const myBtns = document.querySelectorAll('#btns button');

// console.log(myBtns);

// myBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     content.innerHTML = contentObj[btn.id];
//   });
// });

// --------------------------------------------------------

// const contentObj = {
//   one: 'Button 1 clicked',
//   two: 'Button 2 clicked',
//   three: 'Button 3 clicked',
//   four: 'Button 4 clicked',
// };

// const btnDev = document.getElementById('btns');
// const content = document.getElementById('content');

// Object.keys(contentObj).forEach((item) => {
//   const btn = document.createElement('button');

//   const btnContent = document.createTextNode(item);

//   btn.appendChild(btnContent);

//   btnDev.appendChild(btn);

//   btn.addEventListener('click', () => {
//     content.textContent = contentObj[item];
//   });
// });

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// const form = document.querySelector('form');
// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const para = document.querySelector('p');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(e.target.id);
//   if (e.target.fname.value === '' || e.target.lname.value === '') {
//     para.textContent = 'You need to fill in both names!';
//   }
// });

// fname.addEventListener('input', (e) => {
//   console.log(e.target.value);
//   if (e.target.value.length > 8) {
//     e.target.disabled = 'disabled';
//     e.target.style.border = '1px solid red';

//     para.style.color = 'red';
//   } else {
//     para.textContent = 8 - e.target.value.length;
//   }
// });

// --------------------------------------------------------

// console.log(window);

// const myInterval = setInterval(() => {
//   console.log('done');
// }, 1000);

// setTimeout(() => {
//   clearInterval(myInterval);
// }, 10000);

// --------------------------------------------------------

// localStorage.setItem('theme', 'dark');

// console.log(localStorage.getItem('theme'));

// localStorage.clear()
// localStorage.removeItem('theme');

// --------------------------------------------------------

// sessionStorage.setItem('theme', 'dark');

// console.log(sessionStorage.getItem('theme'));

// sessionStorage.clear();
// sessionStorage.removeItem('theme');

// --------------------------------------------------------

// const obj = {
//   name: 'hazem',
// };

// const myObj = JSON.stringify(obj); // to string

// localStorage.setItem('data', myObj);

// console.log(JSON.parse(localStorage.getItem('data')));

// --------------------------------------------------------
