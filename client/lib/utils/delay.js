import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js'
import { xhrPromise } from './xhr.js';
import { insertLast } from '../dom/insert.js'

function delay(callback, timeout = 1000){
  setTimeout(callback,timeout);
}


const first = getNode('.first');
const second = getNode('.second');




//js는 한번에 해석하기 때문에 delay 로 1초씩 걸어줘서 순서대로 실행되도록 함.
//콜백 사용하는 이유!

//같은 영역 안에 있으면 순서 달라도..
//css 애니메이션과, 딜레이 순서 다를 경우 애니메이션 반응이 달라짐.
/*
delay(()=>{
  first.style.top = '-100px';
  second.style.top = '100px';
  delay(()=>{
    first.style.transform = 'rotate(360deg)'
    second.style.transform = 'rotate(-360deg)'
    delay(()=>{
      first.style.top = '0px';
      second.style.top = '0px';
    })
  })
})
*/


//딜레이의 한계: 정확히 그 시간에 나오는 게 확실하지 않다. 오래 걸리는 경우.
//딜레이 길어지면 코드 눈으로 봤을 떄 콜백 지옥. 읽기 불편.
//그래서 사용하는게 프로미스!!



const shouldRejected = true;

//객체가 튀어나옴!!
// const p = new Promise((성공, 실패)=>{
//   if(!shouldRejected){ //나중에는 저 if 자리에 '비동기 통신' 들어감!
//     성공('성공!');
//   }else{
//     실패('실패!');
//   }
// });







// 객체 합성
const defaultOptions = {
  shouldRejected:false,
  data:'성공',
  errorMessage:'알 수 없는 오류',
  timeout:1000
}

export function delayP(options) {

  let config = {...defaultOptions}

  if(isNumber(options)){
    config.timeout = options;
  }

  
  if(isObject(options)){
    config = {...defaultOptions,...options};
  }


  const {shouldRejected,data,errorMessage,timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({message:errorMessage});
      }
    }, timeout);
  });
}


delayP(5000)








/*
delayP()
  .then((res) => {
    console.log(res);
    first.style.top = '-100px';
    second.style.top = '100px';

    return delayP();
  })
//then은 return 쓰지 않아도. 프로미스 객체를 알아서 반환함. 그래서 .then().then() 연결해서 사용가능.
//프로미스 객체를 반환 하면 프로미스 객체 안에 then 이 내장되어 있기 때문에 계속 연결해서 쓸 수 있는거.
// => 프로미스 체이닝
//대신 빈 프로미스 껍데기가 나옴. 고로 프로미스 객체 안에 있는 함수들 까지 모두 실행시켜서 연결해 주고 싶다면 return 으로 내보내줘야함.

//then은 기본적으로 알아서 프라미스 객체를 리턴하지만 result값 가질수 없는 그냥 빈 껍데기고 리턴문을 통해 프라미스 객체를 반환하면 result를 가질수 있다.
  .then((res) => {
    console.log(res);
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';

    return delayP();
  })
  .then((res) => {
    first.style.top = '0px';
    second.style.top = '0px';
    console.log(res);
  });
*/

//프라미스 객체의 값은 then 을 이용해서 가져 올 수 있음.
//then은 2개의 매게변수를 받음. 둘 다 함수. 실패와 성공.

//then의 장점: 깔끔하게 일열로 연결해서 쓸 수 있다.
//프라미스 체이닝: .then().then().then() 요런식으로 연결시켜서 쓰는 거.


//then의 실패 체크 방법
//1. then 마지막에 .catch 연결 =>  위에 모든 then들이 끝난 다음에 한번에 오류 처리 가능.
//2. 두번째 콜백 사용. => 각각의 then 매 순간마다 실패 처리해주고 싶을 때 사용.


//오류가 uncaught로 나왔다는 건 핸들링이 안됐다는거라서 catch로 잡아서 처리해주면 됨.



//promise 와 setTimeout
//promise 쓸 때 setTimeout() 코드 있는 경우가 있는데 프로미스에서 꼭 써야 하는 건 아님.
//서버랑 통신하는 걸 보여줄 수 없으니까 통신할때 걸리는 기본적인 시간을 코드적으로 연출해서 보여주기 위해 작성한 거. 이걸 감안하며 코드를 봐야 한다!


//프로미스 장점(콜백과 차이점):
//순서가 보장되어 있다. =>위에 then이 실행 되어야만 아래 then을 실행시킴. 끈끈하게 연결되어 있다.
//가독성이 좋다. => 프로미스 체이닝해서 일열로 깔끔하게 가능





//순서 보장 ㄴ
/*
console.log('물 넣기')
setTimeout(() => {
  console.log('스프 넣기')
}, 1000);
console.log('면 넣기')
console.log('완성')
*/

//순서 보장
/*
delayP()
  .then((res) => {
    console.log('물 넣기')
  })
  .then((res) => {
    setTimeout(() => {
      console.log('스프 넣기')
    }, 1000);
  })
  .then((res) => {
    console.log('면 넣기')
  })
  .then((res) => {
    console.log('완성')
  })
*/

//then 은 알아서 프로미스 객체를 반환해주는데 우리가 여기서 명시적으로 return delayP()를 하는 이유는 setTimeout이 필요하기 때문이다!
//명시적으로 리턴값을 정해주면 PromiseResult 값이 그걸로 변한다.
//여기서 setTimeout을 주는 이유는 실제 통신할 때 생기는 딜레이를 구현하기 위해서고 실제 통신할 때는 setTimeout줄 필요없다.










// async / awit

// async 는 함수 앞에 씀,
// async 함수는 무조건 promise object를 반환한다.

// await 2가지 기능 수행
// 1. result 꺼내오기 (await 뒤에 오는게 프로미스 객체여야만 값을 꺼내 쓸 수 있다.)
//  (프로미스는 then을 사용해서 값을 꺼냈었는데 async를 사용하면 await를 통해 값을 편하게 꺼낼 수 있다.)
//  원래 awit은 밖에 꺼내 쓰면 안 되는데 최근해는 가능해짐. => Top-levle await. (근데 아직 지원안하는 곳도 많기 때문에 탑레벨어웨이는 조심히 쓰는 게 좋음.)
// async 안 쓰고 밖에 awit 바로 쓰는게 => Top-levle await.

//장점: 가독성이 엄청 좋아짐.

//async, awit 사용했을 때는 try catch나 then을 써서 오류를 잡아 주면 됨.


async function delayA(data){
  const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('성공!');
    },2000);
  })
  
  const result = await p; //result가 떨어지기 전까지 절대 아래 코드를 실행하지 않음. then 과 같은 기능. 순서 보장.
  
  console.log(result);

  return;
}

// delayA()









//안전하게 설계된 비동기 함수(끈끈하게 연결되어 있음.)
// async function 라면끓이기(){

//   await delayP()
//   console.log('물');

//   await delayP()
//   console.log('스프')

//   //값 받아서 사용하는 것도 가능
//   const c = await delayP({data:'면'});
//   console.log( c );

//   const d = await delayP({data:'그릇'});
//   console.log( d );
// }

// 라면끓이기()





//어싱크. 웨잇을 많이 사용하고 제일 중요한 건 프로미스.
//프로미스를 이해해야 어싱크와 웨잇을 잘 사용할 수 있기 때문.







async function getData(){
  
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/132');

  console.log();

  insertLast(document.body,`<img src="${data.sprites.other.showdown['front_default']}" alt="" />`)

}




getData()