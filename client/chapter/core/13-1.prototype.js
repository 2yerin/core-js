/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
  let: 4,
  tail: true,
  stomach: [],
  set eat(food){ //get,set 메서드를 사용하면 값을 넣을 떄는 animal.eat 으로 간편하게 부르기 가능.
    this.stomach.push(food);
  },
  get eat(){ //animal.eat = '고기'
    return this.stomach
  }
}


const tiger={
  pattern: '호랑이무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__ : animal
}


const 백두산호랑이={
  color:'white',
  name:'백돌이',
  __proto__: tiger
}






// 생성자 함수 


function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function (){ //함수 안에서는 메서드가 아니기 때문에 get, set을 쓸 수 없음.
    return this.stomach
  }
  this.setEat = function (food){
    this.stomach.push(food)
  }
}

//const a1 = new Animal();

function Tiger(name){
  Animal.call(this) //animal의 this를 tiger의 this로 설정해줌.
  this.name = name;
  this.pattern = '호랑이무늬'
  this.hunt = function(target){ //인스턴스 메서드 // 금강산호랑이.hunt('')
    return `${target}에게 조용히 접근한다.`
  }
}

Tiger.bark=function(sound){ //스테틱 메서드 //Tiger.bark(')
  return sound
}

//메서드: 인스턴스 메서드, 스테틱 메서드
//ex)
// Array.isArray  일반 함수처럼 자료형 상관없이 뭐 생성하지않고 그냥 가져다 쓸 수 있음 =>스테틱 메서드
// forEach 배열의 능력. 배열 생성해서 사용해야 함. 배열만 사용 가능. => 인스턴스 메서드.

//Tiger.bark('aaa') 스테틱 메서드

//스태틱 메서드 <- 어떤 생성자함수랑 관련된 기능을 그 생성자함수에 묶어놓은 부가기능?같은 함수?
//인스턴스 메서드 <- 어떤 생성자함수로 만든 인스턴스가 사용하는 함수









//Tiger.prototype = a1 //객체이기 때문에 객체로 연결해줘야함. 그래서 animal이 아니라 a1으로 연결 한거.

const 금강산호랑이 = new Tiger('금순이');







/*함수의 메서드 (함수의 능력) */
// call , , ,
// apply [ , , ]
// bind 

//call: this를 내 마음대로 바꿀 수 있음. 완전히 바꾸는게 아니라 call에 의해 실행한 것만 일시적으로.


const arr = [1,2,3,4];

function sum(a,b,c){
  console.log(this); //여기서 this는 window. 아무도 호출해주지 않았기 때문에 제일 상위.
  return  a + b + c 
}

sum.call('hello',1,2,3) // this를 전달함 인수를 개별로 받음 => 함수 실행 o
sum.apply('hello',1,2,3) // this를 전달함 인수를 배열로 받음 => 함수 실행 o

const b = sum.bind('hello',1,2,3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함 
