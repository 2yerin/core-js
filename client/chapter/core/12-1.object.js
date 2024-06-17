/* --------- */
/* Object    */
/* --------- */

/*global isObject*/


const html = /* html */ `
  <h1>title</h1>
  <div class="first">
    hello
  </div>
`


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap={
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser=null;

authUser = {
  uid: 'user-id-zxk!@kadfkq',
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: false,
  permission: 'paid'
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log( authUser.uid );
console.log( authUser.name );
console.log( authUser.email );
console.log( authUser.isSignIn ); //getter

console.log( authUser.permission = 'free'); //setter

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log( authUser['uid'] );
console.log( authUser['name'] );
console.log( authUser['email'] );
console.log( authUser['isSignIn'] ); //getter

console.log( authUser['permission']='allpass'); //setter






Object.prototype.nickName = '호랑이';

//객체 안에 키가 있는지 확인 방법
//in문
console.log('uid' in authUser);

//in문 사용해서 모든 키 조회
for(let key in authUser){
  if({}.hasOwnProperty.call(authUser,key))
  console.log(key);
}



//인스턴트 메서드: 생성된 객체만이 능력을 쓸 수 있다. 피그마에서 인스턴트 느낌. => object.prototype. 방식으로 사용.
//스테틱 메서드(정적 메서드) : 아무나 접근해서 사용할 수 있다. => object. 방식으로 사용.



//객체의 key 만을 모아서 배열을 반환하는 메서드. Object.keys()
const keyList = Object.keys(authUser);

console.log(keyList);


//객체의 value 만을 모아서 배열을 반환하는 메서드. Object.values()
const valueList=Object.values(authUser);

console.log(valueList);




//Object.keys() 역할을 하는 함수 만들어봄.
function getPropertiesList(obj){ 
  let result = [];
  
  for(let key in obj){
    if({}.hasOwnProperty.call(obj,key)){
      result.push(key);
    }
  }
  
  return result;
}


getPropertiesList(authUser) // ['uid', 'name', 'email', 'isSignIn', 'permission']






//프로퍼티 제거(remove) or 삭제(delete)
//         비워두기       메모리 날림

//remove (키는 남겨두고 값만 삭제)
authUser.name=null;

//delete (키와 값 모두 삭제)
delete authUser.name;



function removeProperty(obj,key){
  if(isObject(obj)){
    obj[key]=null;
  }
}

removeProperty(authUser, 'name');



function deleteProperty(obj,key){
  if(isObject(obj)){
    delete obj[key];
  }
}

deleteProperty(authUser, 'name');







// 계산된 프로퍼티 (computed property)
// : 키값에 대괄호가 들어가는 형태. 대괄호 안에 식을 넣어서 계산도 가능해서 계산된 프로퍼티.
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age,phone){
  return{
    name:name,
    age:age,
    [calculateProperty]:phone
  }
}



//authentication

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student ={
  name, //위에서 받은 변수를 값으로 넣음. name: name =>키와 벨류가 같다면 단축 프로퍼티로 이름 하나만 써도 된다.
  email,
  authorization,
  isLogin
}




// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 //배열로 만들고 배열의 길이가 없다면 true 반환
}


isEmptyObject({}) //true





//구조 분해 할당 내용 중요함!!!!*****
/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
/*
1. 순서(order)를 바꿀 수 없음. 변수명 마음대로 설정 가능.
2. 배열의 길이와 같을 필요는 없음.
3. 값을 건너 뛰고 싶다면 빈칸으로 냅두면 됨.
4. ... 사용해서 나머지 값은 변수로 받지 않고 배열로 빼는 것도 가능.
*/

const arr=[1,10,100,1000,10_000];

const [a0,,a1, ...rest] = arr; //배열의 구조분해 할당

/* 구조 분해 할당이 없었다면 이렇게 일일이 작성해야 했음.
const a0= arr[0];
const a1= arr[1];
const a2= arr[2];
const a3= arr[3];
*/


for(let [key,value] of Object.entries(authUser)){
  console.log(key, value);
}
// Object.entries() : 객체의 키와 벨류를 배열로 담고 있는 집합으로 만들어줌.=> [ [key,value],[key,value] ]




const [first, second] = document.querySelectorAll('span');

/* 구조 분해 사용해서 위에 코드처럼 변경 가능.
const [spanList] = document.querySelectorAll('span');

const first = spanList[0];
const second = spanList[1]; 
*/





/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
/*
1. 순서를 고려하지 않는다. => key와 변수명이 동일해야 한다.
2. 변수명을 바꾸는 방법=> key: 변수명
3. 기본값 설정 가능 => 객체에는 값이 없지만 구조분해 할당할 때 값 설정할 수 있다.(본 객체에 값이 추가 되는게 아니라 구조 분해 할 떄 배열에 값을 할당 한 거)
 (선언된 값이 있다면 설정한 기본값 말고 선언 되어있는 값이 들어옴.)
*/

const salaries={
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300
}

const {이진용,함정민:함,지유진,한상학,장주원 = 500} = salaries;

//console.log(이진용);
//console.log(장주원);




function createUserObject({
  name,
  age,
  gender,
  job: j ='홈프로텍터'
} //함수 선언 할 때 메게변수 부분에서 바로 구조분해 할당 때리기도 가능!
){
  
  //const {name,age,gender,job='홈프로텍터',...a} = obj; //구조분해 할당 //...a 는 a. 으로 접근 가능.

  return {name,age,gender,j} //숏 핸드 표기법
}

const data = {
  name: 'yerin',
  age: 24,
  gender: '여',
  address: '전주',
  tel: '0123'
};

const person = createUserObject(data);



// const {acos} = Math;
// const acos = Math.acos;