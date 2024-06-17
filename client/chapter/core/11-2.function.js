/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

//console.log(resultX);
//console.log(resultY);
//console.log(resultZ);



// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(){
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 0000 이라 불리는 변수.
  let total=0;

  /*
  for문
  for(let i=0;i<arguments.length;i++){
    total+=arguments[i];
  }
  */


  /*
  for..of문
  for(let value of arguments) total+=value;
  */


  //forEach 사용(배열의 메소드이기 때문에 유사배열인 arguments 는 사용불가.)
  // arguments => array 필요.
  const arr = [...arguments];
  //const arr = Array.from(arguments);
  //const arr = Array.prototype.slice.call(arguments);
  
  //arr.forEach(function(price){total+=price});



  /*
  reduce 사용
  total = arr.reduce(function(acc,cur){
    return acc+cur;
  },0);
  */

  /*
  reduce + 에로우 펑션
  total = arr.reduce((acc,cur)=>acc+cur, 0);
  */


  /*
  빌려쓰기
  Array.prototype.forEach.call(arguments, function(item){
    total += item
   })
  */


   /*태생을 배열로 바꾸기
   arguments.__proto__ = Array.prototype
   //arguments 는 지역 변수이기 때문에 부모를 바꿔도 문제가 없음.
   */


  return total;
};

const result = calculateTotal(1000, 5000, 2500, 500);
//console.log(result);



//forEach => 배열 순환 값 반환 x
//reduce  => 배열 순환 값 반환 o  숫자/문자/배열/객체
//map     => 배열 순환 값 반환 o  only 배열  >원본을 훼손하지 않음.
//filter  => 배열 순환 값 반환 o  only 배열


//map
const arr = [10,100,1000];

const mapValue = arr.map(function(item){
  return item *2
})

console.log(mapValue);





// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){};


// 콜백 함수 (표현)식
let cb= function(isActive,success,fail){
  if(isActive){
    success();
  }else{
    fail();
  }
};

cb(
  false,
  function(){
    console.log('성공입니다!');
  }, 
  function(){
    console.log('실패입니다..');
  }
)





function movePage(url,success,fail){
  if(url.includes('https')){
    success(url) //url은 movePage 안에서만 있기 때문에 매게변수로 값 전달.
  }else{
    fail()
  }
}

movePage(
  'https://www.naver.com',
  function(url){
    console.log(`현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다.`);
    //location.href=url;
  },
  function(){
    console.log('잘못된 url을 입력하셨습니다.');
  }
)


// higher-order function 고차함수
//함수를 인수로 받아 처리함.
function map(arr,func){
  let result = [];

  for(let i = 0; i < arr.length; i++){
    result.push(func(arr[i]*2))
  }
  return result
}

const g = (n) => (m)=> n>m

//함수를 리턴함.
function greater(n){
  return function(m){
    return n>m
  }
}




// 함수 선언문 vs. 함수 (표현)식





// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
//차피 즉시 실행하는데 함수로 만드는 이유: 스코프를 만들어서 코드를 안전하게 보호하기 위해서
let IIFE;

//함수가 선엄됨과 동시에 실행되는 것을 말함.

//var는 블록 스코프 : x
//var는 함수 스코프 : o

//encapsulation(캡슐화)
//모듈 프로그래밍 => (import, export)
//import css from '../'

(function (g){ //매게변수도 받을 수 있음. window라는 argument를 g라는 이름으로 받음.

})(window)



const MASTER=(function(){
  let uuid='asdfsf'

  return{
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value
    }
  }

})()





const css=(function(){ //즉시실행함수 =>요즘에는 이런 패턴 잘 안씀.(모듈 프로그래밍이 등장했기때문에!!)
  function setStyle(node,prop,value){
  }
  function getStyle(node,prop){
  }
  function css(node,prop,value){
  }

  return css;
})()