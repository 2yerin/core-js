const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

//xhr
//XMLHttpRequest

//xhr 은 개인적인 상태를 가짐.
//[readyState]
// 0 : uninitialized
// 1 : loading //로딩 중.
// 2 : loaded //로딩이 끝남
// 3 : interactive //상호작용
// 4 : complete //통신이 끝나면 컴플리트.(성공, 실패 여부 상관없이)


const user= {
  name: 'yerin',
  age: 24,
  gender:'female',
}




/* -------------------------------------------- */
/*               xhr callback 방식               */
/* -------------------------------------------- */



//user라는 객체를 ENDPOINT 서버에 POST 통신하겠다는 함수!

// 객체 합성

function xhr({
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}){
  const xhr = new XMLHttpRequest() //데이터 가져오려고 쓰는 거

  xhr.open('method',url) //(통신 방식, 통신 할 url)


  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value) //헤더 설정(그냥 문자가 아니라 json 이라고 알려주는 거.)
  })



  //readystatechange 상태가 변했을 때 이벤트
  xhr.addEventListener('readystatechange',()=>{

    const {readyState,status,response} = xhr; //xjr은 객체. 고로 분해 가능. => 구조분해 할당으로 편하게 받기.

    if(readyState === 4){ //complete의 경우. (0~1 은 너무 초기 단계라 인식하지 않음.)

      if(status >= 200 && status < 400){ //통신 성공의 경우
        const data = JSON.parse(response) //response는 요쳥한거에 대한 응답 오는 거.

        성공(data);
      }
      else{ //통신 실패
        //console.log('실패!');
      }
    }
  })

  //xhr.send(JSON.stringify(body)) //user 정보를 문자로 만들어서 보냄.

}




// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면?

/*
xhr({
  성공(data) {
    console.log(data);
  },
  실패() {},
  url: ENDPOINT,
});
*/



xhr.get = (url,성공,실패) =>{
  xhr({ url, 성공, 실패 })
}



xhr.post = (url,body,성공,실패) =>{
  xhr({ 
    method:'POST',
    body,
    url, 
    성공, 
    실패
   })
}


xhr.put = (url,body,성공,실패) =>{
  xhr({ 
    method:'PUT',
    body,
    url, 
    성공, 
    실패
   })
}


xhr.delete = (url,성공,실패) =>{
  xhr({ 
    method:'DELETE',
    url, 
    성공, 
    실패
   })
}




xhr.post(
  ENDPOINT,
  (data)=>{
    console.log( data );
  },
  (err)=>{
    console.log( err );
  }
)


// 





/* -------------------------------------------- */
/*               xhr Promise 방식               */
/* -------------------------------------------- */

const defaultOptions = {
  method:'GET',
  url: '',
  body: null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'  
    //CORS오류를 막으려면 여기를 * 전체 설정하는 방법이 있다. proxy로 우회하는 방법도 있지만 완전한 해결책은 아님. *를 써도 서버에서 막으면 데이터를 가져올 수 없다.
  }
}


// enumerable => 열거 가능한 => for..of/ for..in
// iterable   => 순환 가능한 => for..of 
// immutable  => 불변의

// const arr = [1,2,3];
// const newArr = [...arr,4]

export function xhrPromise(options){

  const {method,url,body,headers,errorMessage} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    
    xhr.addEventListener('readystatechange',()=>{
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 400){
          resolve(JSON.parse(xhr.response));
        }
        else{
          reject({message:errorMessage});
        }
      }
    })
  })
}


xhrPromise.get = (url) => xhrPromise({ url })
xhrPromise.post = (url,body) => xhrPromise({ url, body, method:'POST' })
xhrPromise.put = (url,body) => xhrPromise({ url, body, method:'PUT' })
xhrPromise.delete = url => xhrPromise({ url, method:'DELETE' })