import { isString } from "./type.js";



// console.log('storage');

const {localStorage: storage} = window;

// const user = {
//   name: 'yerin',
//   age: 24,
//   gender: 'female',
//   emaile: 'yyy@naver.com'
// }




// localStorage.setItem('user',JSON.stringify(user))

export function setStorage(key, value){

  return new Promise((resolve, reject) => {

    if(isString(key)){
      storage.setItem(key, JSON.stringify(value))
      resolve()
    }else{
      reject()
    }
  })
}


// const data = JSON.parse(localStorage.getItem('user'));
// console.log(data);


export function getStorage(key){

  return new Promise((resolve, reject) => {

    if(isString(key)){
      resolve(JSON.parse(storage.getItem(key)))
    }else{
      reject()
    }
  })
}




export function deleteStorage(key){

  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve()
  })

}










// setStorage('user',user)
// console.log(getStorage('user'))






// const data = await getStorage('user');
// console.log(data);