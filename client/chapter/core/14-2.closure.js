function earth(){
  let water = true;
  let gravity = 10;

  return function (value){ //외계인은 정보만 가져오면 되지 호랑이인지 알 필요없기 때문에 이름 쓰지 않고 그냥 return 한 거.
    gravity=value;
    return
  }
  /*
  return (value) => {
    gravity=value;

    return [water,gravity]
  }
  */
}

const ufo= earth()

ufo(-10)

//또 호랑이 데려오면 그 세계관이 다시 하나 만들어지는거. 평행우주.









const button = document.querySelector('button');


/* normal function */
/*
function handleClick(){
 let isClicked = false;

 function inner() {
    if(!isClicked){
       document.body.style.background = 'orange'
    }else{
      document.body.style.background = 'white'
    }
    isClicked = !isClicked;
  }
   return inner;
 }
*/


//IIFE 즉시실행 함수 : 만들어짐과 동시에 실행.
/* arrow function */
const handleClick = (() => {
  let isClicked = false;
  
  return () => {
    if(!isClicked){
      document.body.style.background = 'orange'
    }else{
      document.body.style.background = 'white'
    }
    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick)






function useState(init){
  let value =init;

  function read(){
    return value;
  }
  
  function write(newValue){
    value = newValue;
  }

  return [read,write]; //함수 본문이 들어있는 배열
}

const [getNumber,setNumber] = useState(10); //앞에 use가 붙은 건 react에서는 다 훅이라고 부름.

/*
const getter = result[0]
const setter = result[1]
*/


//React 객체 class 문법 -(어려워서 대체할만 한 거)-> 함수 -(함수 단점: 기억을 못함)-> hook(리엑트에서 함수를 훅이라고 부름?) / 클로저
//hook 특징: 앞에 use 라는 단어가 붙음
//훅 장점: 값은 절대적으로 지켜지고 기억된다. 