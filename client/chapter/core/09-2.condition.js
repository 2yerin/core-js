/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log(AandB); //''

//논리곱 할당 연산자 Logical AND Assignment
//a &&= b;



// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log(AorB); //10

//논리합 할당 연산자 Logical OR Assignment
//a ||= b;



// 부정 연산자
let reverseValue = !value;
console.log(reverseValue); //true



// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy= true && ' ' && [] && {thisIsFalsy:false}; //결과: {thisIsFalsy:false}
//공백 문자 => true, 빈 배열=> true(배열이란는 존재는 살아있는 거니까), 마지막도 트루=> 객체 존재는 살아있으니까.


// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true}; //결과: 2





//로그인 구현하기
function login(){
  let userName=prompt('Who`s there?','');
  
  //userName이 null, undefined => 아래 코드 실행 안함.
  if(userName===null || undefined) return;

  if(userName.toUpperCase()==='ADMIN'){  //? :옵셔널 체이닝
    let password=prompt('Password?.','');

    if(password.toUpperCase()==='THEMASTER'){
      console.log('환영합니다!');
    }else if(password===''||password.replace(/\s*/g,'')===''){
      console.log('취소되었습니다.');
    }else{
      console.log('인증에 실패하였습니다.');
    }

  }else if(userName===null || userName.replace(/\s*/g,'')===''){
    console.log('취소되었습니다.');
  }else{
    console.log('회원이 아닙니다.');
  }
}