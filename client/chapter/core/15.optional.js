/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
//console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
//portableFan && portableFan.photos && portableFan.photos.animate


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName?.();

console.log(fullName)

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.







// sync(동기) async(비동기)
//동기: 일이 끝나야지만 다음일을 처리. ex)세탁기 돌리면 돌리는 중에는 새로운 빨래 못 돌리는 거.
//비동기: 동기적 방식의 반대. ex)세탁기가 여러대라면 돌리는 도중에 새로운 빨래도 또 돌릴 수 있는 거.
//js는 싱글 스레드를 기본으로 가짐

//웹에서 제공하는 비동기 처리 방법 => web API

//작성한 코드는 js의 엔진 영역으로 들어감.(stack. 스택) 원래 js는 동기인데 이걸 비동기로 바꿔서 처리하도록 도와주는게 웹 API

console.log(1);
console.log(2);

setTimeout(function(){ //간단하게 비동기 통신을 해볼 수 있는 setTimeout
  console.log(3);
},1000) //1초 뒤에 해당 코드 실행

console.log(4);
console.log(5);




const button = document.querySelector('.my-button');

const id= setTimeout(()=>{  
  const template = /* html */`
    <button type="button" class="my-button">my-button</button>
  `
  document.body.insertAdjacentHTML('beforeend',template) //beforeend 위치에 template 내용 넣어달라는 의미
},3000) //setTimeout의 값을 변수 안에 받으면 등록한 타이머의 아이디가 나옴.

clearTimeout(id) //타이머의 아이디 값을 이용해서 등록한 타이머 제거.

button?.addEventListener('click',()=>{ //위에 const button에서 아직 코드가 생성이 안 돼서 null이 나오는데 null에 addEventListener 걸어주려고 하니까 에러나옴. 그럴 때 에러 안나게 막아주는 거 -> '?.'
  console.log('clicked~!');
})


//간단한 비동기 처리 방법(web API)
//타이머 설정 메서드: setTimeout(), setInterval(), requestAnimationFrame //setTimeout: 한번 실행, setInterval: 계속 실행
//타이머 제거 메서드: clearTimeout(),clearInterval() //둘 다 똑같음
//requestAnimationFrame 을 사용했을 때 setInterval보다 애니매이션 했을 때 더 결과값 이동이 부드러움.

//http://latentflip.com/loupe/?code=Cgpjb25zb2xlLmxvZygiSGkhIik7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygiQ2xpY2sgdGhlIGJ1dHRvbiEiKTsKfSwgNTAwMCk7CgoKCmZ1bmN0aW9uIGZpYm9uYWNjaShuKXsKICBpZihuIDw9IDApIHJldHVybiAwOwogIGlmKG4gPD0gMikgcmV0dXJuIDE7CiAgcmV0dXJuIGZpYm9uYWNjaShuLTEpICsgZmlib25hY2NpKG4tMikKfQoKZmlib25hY2NpKDMwKQoKCmNvbnNvbGUubG9nKCJXZWxjb21lIHRvIGxvdXBlLiIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
//https://www.youtube.com/watch?v=8aGhZQkoFbQ


/*setInterval

let count = 0;

const id2 = setInterval(()=>{
  console.log(++count);

  document.querySelector('.first').style.transform = `translateY(${count}px) rotate(${count}deg)`

  if(count >= 500){
    // clearInterval(id2)
  }
},10)
*/

/*requestAnimationFrame => 최신 기술. 사용자의 컴퓨터에 따라 맞춰서.

let counter =0;

function animation(){
  console.log(++counter);

  const id=requestAnimationFrame(animation)

  if(counter>=100){
    cancelAnimationFrame(id);
  }
}

animation()
*/