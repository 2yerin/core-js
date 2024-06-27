import { } from "./lib/index.js"


import { xhrPromise } from "./lib/index.js"


// xhrPromise.get('https://jsonplaceholder.typicode.com/users')
// .then(console.log)




// const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')
// console.log(data);




// await 병
// 해결 방법 :) => 프로미스 객체. 프로미스 객체가 반환되는 조건을 잘 이해하고 있으면 된다!!

// const getData = async() => {
//   const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')

//   data.forEach((item)=>{
//     console.log(item.name);
//   })

//   console.log(data);
// }

// getData()





const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'