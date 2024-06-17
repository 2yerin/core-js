/* ----------------------- */
/* Try Catch               */
/* ----------------------- */


// try ... catch 동작 알고리즘
// 1. try { ... } 코드 실행
// 2-1. 오류가 발생하지 않은 경우, 내부 코드가 실행 됨 (catch 블록 무시)
// 2-2. 오류가 발생했다면, try 코드 중단 catch 블록으로 흐름이 넘어 감



//console.log(value);  //여기에 쓰면 value 선언하지 않았기 때문에 에러 나옴.

try{
  console.log(value); //이건 try catch 안에 썼기 때문에 에러 잡은 거.
}catch(e){
  console.log(e);
  console.log('참조 오류입니다 : '+ e.message);
  document.body.insertAdjacentHTML('beforeend','에러입니다!') //화면에 바로 띄우기도 가능
}




// JavaScript 엔진은 코드를 읽고 난 후 코드를 실행
// 그러므로 try ... catch 문은 유효한 코드에서만 오류를 처리할 수 있음
// 이러한 오류 유형을 "런타임 오류" 또는 "예외(exception)"라고 부름


// try ... catch는 동기적으로 동작하므로 비동기 처리 과정 내부에서 사용해야 함


// 오류 객체(Error Object)
// - name, message, stack 정보 제공


// 직접 오류 객체 생성
// throw 연산자는 오류 객체를 생성할 때 사용 됨
// 생성 가능한 오류 객체
// - Error
// - TypeError
// - SyntaxError
// - ReferenceError


//JSON : JavaScript Object Notation


try{
  const data= JSON.stringify({ //객체를 문자열로 바꾸기
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  })
  
  const user = JSON.parse(data); //서버와의 통신에서 객체 데이터를 받았다고 가정하고 문자열을 다시 객체로 바꿔줌.

  console.log(user.value);

  if(!user.value){
    throw new ReferenceError('해당 키 값은 존재하지 않습니다.')
  }
    
}
catch(e){
  console.log('JSON Error : ' + e.message);

  document.body.innerHTML = '404 not found'
}


// finally 절
// 오류가 있던, 없던 상관없이 항상 실행
// try ... catch를 빠져나가는 어떠한 경우에도 항상 실행