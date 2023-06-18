// const ajaxfunc = () =>{
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const users = JSON.parse(xhr.responseText);
//     console.log('users', users[0]);
//   }
//   };
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//   xhr.send();

// }

// ajaxfunc()

// -----------------------------

// const fetchData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
//     method: 'POST',
//     body: JSON.stringify({
//       title:"foo"
//     })
//   });
//   const data = await response.json();
//   console.log('data', data);
// }

// fetchData();

// -----------------------------

// const controller = new AbortController();
// const signal = controller.signal;

// const downloadBtn = document.querySelector("#download");
// const abortBtn = document.querySelector("#abort");

// downloadBtn.addEventListener("click", async () => {
//   try {
//     const response = await fetch("downloadbuton", { signal });
//     console.log("Download complete", response);
//   } catch (error) {
//     console.error(`Download error: ${error.message}`);
//   }
// });

// abortBtn.addEventListener("click", () => {
//   controller.abort();
//   console.log("Download aborted");
// });

// -----------------------------

// let myname = "ali"

// setTimeout(() => {
//   console.log("Alaa")
// },1000)

// console.log(myname);

// -----------------------------

// !async codes
// 1- time operations
// 2- i/o operations
// 3- long time processes
// 4- async functions

// -----------------------------

// let myname = "ali"

// setTimeout(() => {
//   myname = "Alaa"
// },1000)

// console.log(myname);

// -----------------------------
// !how to handle async code
// 1- callbacks
// 2- promises
// 3- async/await

//-----------------------------

//! callbacks
// const handleName = (user) =>{
//   console.log(user)
// }

// let myName = "Ali";
//   setTimeout(() =>{
//     myName = "Alaa";
//     handleName(myName)
//   },1000)

// const handleFirstUser = (user,cb) =>{
//   setTimeout(() =>{
//     cb(user.title)
//   },1000)
// }

// const handleUserTitle = (title,cb) =>{
//   cb(title)
// }

// const splitTilte = (title) =>{
//   setTimeout(() =>{
//     console.log(title.split(" "))
//   },1000)
// }

// const ajaxfunc = (cb) =>{
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const users = JSON.parse(xhr.responseText);
//     cb(users[0])
//   }
//   };
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//   xhr.send();

// }

// ajaxfunc((data) => {
//   handleFirstUser(data,
//     (data) => handleUserTitle(data,splitTilte))
// })

// -----------------------------

//! promise

// const handleFirstUser = (user) =>{
//   return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//       resolve(user)
//     },1000)
//   })
// }

// const handleUserTitle = (title) =>{
//   return new Promise((resolve,reject) =>{
//     resolve(title)
//   })
// }

// const splitTilte = (title) =>{
//   return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//       resolve(title.split(" "))
//     },1000)
//   })
// }

// const ajaxfunc = () =>{
//   return new Promise((resolve,reject) =>{
//     try{
//       const xhr = new XMLHttpRequest();
//       xhr.onload = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const users = JSON.parse(xhr.responseText);
//         resolve(users[0])
//       }
//       };

//       // throw new Error("Error");
//       xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//       xhr.send();
//     }catch(err){
//       reject(err)
//     }

//   })
// }

// ! we still in callback hell
// ajaxfunc()
//   .then(data => {
//     handleFirstUser(data)
//     .then(res =>
//       handleUserTitle(res.title))
//       .then(res => splitTilte(res)
//       .then(res => console.log(res)))
//   })
//   .catch(err => console.log(err))

// ajaxfunc()
// .then(data => "Mohammed")
// .then(res => console.log(res))

// ! callback hell is fixed here
// ajaxfunc()
// .then(data => handleFirstUser(data))
// .then(res => handleUserTitle(res.title))
// .then(res => splitTilte(res))
// .then(res => console.log(res))
// .catch(err => console.log(err.message))

// -----------------------------

// ! async/await

//   const handleFirstUser = (user) =>{
//   return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//       resolve(user)
//     },1000)
//   })
// }

// const handleUserTitle = (title) =>{
//   return new Promise((resolve,reject) =>{
//     resolve(title)
//   })
// }

// const splitTilte = (title) =>{
//   return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//       resolve(title.split(" "))
//     },1000)
//   })
// }

//   const fetchData = async() =>{
//     try{
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//       const data = await response.json()
//       const firstUser = await handleFirstUser(data[0])
//       const userTitle = await handleUserTitle(firstUser.title)
//       const splitedTitle = await splitTilte(userTitle)

//       // throw new Error("Error")
//     // console.log(splitedTitle)

//     return splitedTitle;
//     }catch(err){
//       throw err
//     }
//   }

// fetchData() // async code
// console.log("hello from under the function")

// console.log(fetchData()) // won't work because it is async code

// fetchData()
// .then(res => console.log("res",res))
// .catch(err => console.log("err",err.message))

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

// const ajaxRequest = (method = 'GET', url = 'https://jsonplaceholder.typicode.com/todos', cb) => {
//   const xhr = new XMLHttpRequest();

//   // console.log(xhr.readyState);
//   xhr.onreadystatechange = function () {
//     // console.log(xhr.readyState);

//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const users = JSON.parse(xhr.responseText);
//       console.log('users', users);

//       cb && cb();
//     } else if (xhr.readyState === 4 && xhr.status === 404) {
//       console.log('404 error');
//     }
//   };
//   xhr.open(method, url, true);
//   xhr.send();
// };

// ajaxRequest('delete', 'https://jsonplaceholder.typicode.com/todos/1', ajaxRequest);

// const fetchData = (URL = 'https://jsonplaceholder.typicode.com/todos', method = 'GET') => {
//   const res = fetch(URL, {
//     method: method,
//     // body: JSON.stringify({
//     //   title: 'foo',
//     // }),
//     headers: {
//       'Content-type': 'application/json',
//       // "Authorization": ""
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(() => {
//       console.log('finally');
//     });

//   // console.log(res);
//   return res;
// };

// fetchData('https://jsonplaceholder.typicode.com/todos/1').then((data) => console.log(data));

// const res = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     fetch(`https://jsonplaceholder.typicode.com/todos/${data[0].id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         fetch(`https://jsonplaceholder.typicode.com/todos/${data[0].id}`)
//           .then((response) => response.json())
//           .then((data) => {
//             fetch(`https://jsonplaceholder.typicode.com/todos/${data[0].id}`)
//               .then((response) => response.json())
//               .then((data) => console.log(data))
//               .catch((err) => console.log(err));
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// async function fetchMyData() {}

// let isLoading = false;

// const fetchData = async () => {
//   isLoading = true;
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log('finally');
//     isLoading = false;
//   }
// };

// fetchData();

// console.log('first');
// setTimeout(() => console.log('second'), 0);
// console.log('third');

for (var i = 0; i <= 3; i++) {
  setTimeout(() => console.log(i), 10);
  console.log(i);
}
