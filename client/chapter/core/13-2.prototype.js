/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


//1. 객체의 상속
//2. 생성자 함수의 상속
//3. 생성자 함수 모던 방식 class


class Animal{ //클래스 문법

  constructor(){
    this.legs=4;
    this.tail=true,
    this.stomach =[]
  }

  get eat(){
    return this.stomach
  }

  set eat(food){
    this.stomach.push(food)
  }
}

const a = new Animal('포동이'); //호출

class Tiger extends Animal{ //extends: 연장된, 확장 //animal에서 확장해서 tiger를 만들겠다는 뜻. 상속. //"생성자 함수만들래. Tiger 상송해줘 Animal"
  
  static options={ //값을 저장하는 용도로 쓰는 것도 가능. 밖에 let으로 저장하는 것과 차이점: 훨씬 값이 안전하게 보관된다. Tiger.options.verion 을 통해 접근 가능.=>encapsulation 캡슐화.
    version:'1.0.0',
    company:'8b-studio',
    ceo:'심선범'
  }
  //IIFE 즉시실행함수 쓰는 이유: 안에 변수를 보호하기 위해서 =>근데 클래스, 모듈화가 등장해서 캡슐화 가능하기 때문에 즉시실행함수 잘 안씀. 그 이유가 요거.
  
  constructor(name){ //만약 아무것도 전달할 내용이 없다면 constructor 안 써도 됨. 근데 만약 전달할 내용이 있다면 constructor 안에 내용 쓰면 됨.
    super(name) //super를 쓰면 부모의 constructor를 호출해서 쓸 수 있음. //Animal.call(this)와 비슷한 느낌.
    this.pattern='호랑이무늬'
  }

  static bark(sound){ //스테틱 메서드 => 뭐 따로 안 만들어도 그냥 바로 가져다가 쓸 수 있
    return sound+'🐯'
  }

  hunt(target){ //인스턴스 메서드 => 클래스로 인스턴스 만들어야만 쓸 수 있음
    return `${target}에게 조용히 접근한다.`
  }
}

const 호랑이 = new Tiger('호돌이');





/*
class Array extends Object{ //js 세상은 이렇게 이루어져 있음. 이걸 가져다 쓰느냐 내가 만들어 쓰느냐의 차이!
  constructor(){
    
  }

  forEach(callback,arg){

  }

  reduce(){

  }

  map(){

  }

  static isArray(){

  }

  static from(){
    
  }
}
*/





//Model   (데이터)
//View    (랜더링)
//Control (이벤트)


class Todo {

  target = null;
  registerButton = null;
  list = null;
  
  constructor({input,button,renderPlace}){
    
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace)
    this.todoListArray = [];
    this.data;

    this.registerEvent()

    this.target.addEventListener('input',()=>{
      this.data = this.currentInputTodoData;
    })
  }

  get currentInputTodoData(){
    return this.target.value;
  }

  set currentInputTodoData(value){
    this.target.value = value;
  }

  get todoList(){
    return this.todoListArray
  }

  set todoList(value){
    this.todoList.push(value);
  }

  #createList(){
    let template = `
      <li>${this.data}</li>
    `
    return template;
  }

  render(){ 
    this.list.insertAdjacentHTML('beforeend',this.#createList());
    this.target.value = ''
  }
  
  addTodoData(){
    this.todoList = this.data;
  }

  registerEvent(){
    this.registerButton.addEventListener('click',()=>{
      this.addTodoData()
      this.render()
    });
  }

}




const button = new Todo({
  input:'#todo',
  button:'.register',
  renderPlace:'.todoList'
})



const button2 = new Todo({
  input:'#todo2',
  button:'.register2',
  renderPlace:'.todoList2'
})

