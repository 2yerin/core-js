/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

/*
console.log(resultX);
console.log(resultY);
console.log(resultZ);
*/

// 함수 선언 → 화살표 함수 (표현)식
//                 rest parameter
let calcAllMoney = (...rest)=>{ //rest parameter는 항상 뒤쪽에 놔서 나머지를 받도록 설정해야 함.
  let total=0;

  /*
  for문

  for(let i=0;i<rest.length;i++){
    total += rest[i];
  }
  */


  /*
  for ...of문

  for(let i of rest){
    total += i;
  }
  */


  /*
  forEach (: 배열 순회. 값을 반환하지 않음.)

  1. 일반함수
  rest.forEach(function(a){
    total+=a;
  })

  2. 에로우 펑션
  rest.forEach((a)=>total+=a);
  */


  /*
  reduce

  1. 일반함수
  total= rest.reduce(function(a,b){
    return a+b
  },0);

  2. 에로우 펑션
  total= rest.reduce((a,b)=>a+b,0);
  */

  return total;
};

const result = calcAllMoney(1000,5000,4500,13000);
//console.log(result);


// 화살표 함수와 this

function create(nickName, number){
  return nickName;
}

create('tiger',40);


//자바스크립트의 함수는 양면의 얼굴 => 일반 함수(nomal function) / 생성자(constructor)
//자바스크립트 함수는 2가지 일처리 가능: 일반적인 방법, 생성자
//구분하는 방법: 생성자 함수는 이름을 대문자로 시작. new 키워드.

function Button(text){
  this.content =text; //생성자는 return 값 주지 않아도 알아서 객체형태로 반환.
}

//const a= button('more');
const b= new Button('more'); //객체 대량생산할 때 주로 사용.





//일반 함수
//- constructor 내장(concise method는 예외)
//- this: 나를 호출한 대상을 this
//- 객체의 메서드로 사용할때 많이 사용.=> this를 찾기 위해

//화살표 함수
//- constructor 비내장
//- this: 바인딩 하지 않음. -> 상위 컨텍스트에서 찾음.
//- 메서드 안의 함수를 작성해야 할 때 많이 사용 //내 상위 this를 가져오기 때문에


/*
const user={
  name: '예린',
  sayHi: function(){
    console.log(this);
  },
  sayHi2:()=>{ //에로우 펑션은 자체적으로 this를 가지지 않고 부모의 this를 가져옴. 내가 원하는 this를 찾아주지 못함.
    console.log(this);
  },
  sayHi3(){ //concise method가 주로 사용됨. this를 잘 찾아주기 때문에.
    console.log(this);
  }
}
*/

//객체의 메서드를 정의하는 방법 (메서드: 객체 안에서의 함수)
// 1. nomal function
// 2. arrow function
// 3. concise method



const user={
  name: '예린',
  total: 0,
  grades:[30,60,80],
  totalGrades(){
    console.log(this);
    //user.totalGrades()로 실행하는 거보면 totalGrades는 user가 호출한다는 걸 알 수 있음
    //따라서 여기서 this는 user.

    function sayHi(){
      console.log(this);
      //sayHi는 totalGrades 안에 있긴 하지만 토탈이 호출해 준게 아니라 자발적으로 호출된거. 즉, window에서 호출된거.
      //호출한 대상이 window로 인식 됬기 떄문에 여기서 this는 window.
    }

    sayHi()
  }
}

//totalGrades <- user의 메소드임. user가 호출
//sayHi <- user의 메소드가 아님. totalGrades 함수가 window한테 불러달라고 한 거.

//에로우 펑션은 상위 컨텍스트 에서 this 를 찾기 때문에
//만약 sayHi를 에로우 펑션으로 바꾸면 상위인 토탈그레이즈의 this 인 user를 가져옴.

//forEach는 배열의 메서드지 특정 개체의 메서드가 아니라서 this가 window가 나옴.









/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number; 제곱.
/*
let pow=(numeric,powerCount)=>{
  let result=1;

  for(let i=0;i<powerCount;i++){
    result *= numeric
  }

  return result;
};
*/


// 표현식
/*
const pow = (numeric,powerCount) => {
  
   return Array(powerCount).fill(null).reduce((acc)=>{
     return acc *= numeric
   },1)

 }
*/

const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric,1)




// repeat(text: string, repeatCount: number): string; 반복.
/*
let repeat= (text,repeatCount)=>{
  let result='';

  for(let i=0;i<repeatCount;i++){
    result += text;
  }

  return result;
};
*/

const repeat=(text,repeatCount)=>Array(repeatCount).fill(null).reduce(acc=>acc+text,'');

repeat('안녕',3);