/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(){
  console.log('클릭 이벤트 발생!!!');
}



// 2. DOM 프로퍼티 : element.onclick = handler

const first = getNode('.first');
//first.onclick = handler; //js로 실행할 떄는 실행() 말고 본문 전달.



// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e){ //이벤트 객체는 우리가 만드는게 아니라 알아서 줌. 메게변수 이름을 event, e 라고 주로 씀.
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
}


//first.addEventListener('click',handleClick); //이벤트 생성



const second = getNode('.second');

/*
second.addEventListener('click',()=>{
  first.removeEventListener('click',handleClick);
})
*/

//이벤트는 추가를 하는 것과 동시에 제거를 할 수 있는 환경도 만들어 줘야 한다.
//단순히 클릭을 막아 놓는 경우에는 메모리가 여전히 남아있어서 성능 저하가 있을 수 있으니까 완전히 제거 해주는게 좋음.


//bindEvent.js => 이벤트 생성과,제거 동시에 만들어주는 유틸함수






/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener






const ground = getNode('.ground');
const ball = getNode('#ball');


function handleClickBall({offsetX:xPos,offsetY:yPos}){ //이벤트를 생성하면 이벤트객체도 같이 생성되는데 그거 받아옴

  //const {offsetX:x, offsetY:y} = e; //구조분해 할당. 리네임
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  //let x = e.offsetX;
  //let y = e.offsetY;

  ball.style.transform = `translate(${xPos - (w / 2)}px,${yPos - (h / 2)}px)`

}

//ground.addEventListener('click',handleClickBall)






function handleMove({offsetX:x,offsetY:y}){
  console.log(x,y);

  let template = /*html*/`
  <div class="emotion" style="top:${y}px; left:${x}px;">ㅋ</div>
  `
  insertLast(ground,template);
}




//let timeout; //timeout 변수는 함수 밖에 선언해 줘야됨. 함수 안에 넣으면 계속 초기화되니까. 만약 함수 안에 넣으려면 클로저로 만들어 줘야 함.

function debounce(callback,limit = 500){ //디바운스 //callback으로 실행할 함수 본문을 담음.

  let timeout;

  return function(e){ //timeout 변수를 함수 안에 넣기 위해 클로저로 만들어줌.
    clearTimeout(timeout); //기존에 있던 타이머 제거. =>callback()을 여러번 실행할 때 전에 있는 타이머를 기다리지 않고 계속 새로호출되면 전에거 제거하다가 마지막 거는 제거가 안 돼서 실행되는 개념.
    //첫번째로 호출되는 경우에는 전에 존재하는 타이머가 없으니까 아직 제거될 타이머가 없어서 차피 똑같이 undefined
  
    timeout = setTimeout(()=>{ //디바운스를 실행할 때 타이머 등록(web api에서 타이머 돌아감)) //setTimeout은 실행할 때 타이머 id 나오는데 그거 담은 거.
      callback.call(this,e)
    },limit) //callback() 을 limit초 뒤에 한번만 실행
  }
}

/*
ground.addEventListener('mousemove',debounce(function(e){
  console.log(this);
})) //debounce만 넣으면 함수 본문만 들어가는 거니까 ()로 실행 시켜줘야 실행이 됨.
//debounce 실행할떄 안쪽 함수가 실행이 되는데 저 안에서는 this가 누군지 알 수 있음. 그래서 그 this를 call을 이용해서 받아옴.
*/

//ground.addEventListener('mousemove',debounce(handleMove))







//call(this,a,a,a,a), aply(this,[a,a,a,a])

function throttle(callback, limit = 500){ //쓰로틀

  let waiting = false;

  return function(...args){ //apply 배열 넣을 수 있다는 예시 보여주려고 스프레드 문법으로 배열 쓴 거. call은 안 씀.

    if(!waiting){ //waiting이 false 일때만 실행
      callback.apply(this,args) //apply나 call로 넣을 수 있음. apply 사용하면 배열로도 넣을 수 있음.
      waiting = true; //실행하자마자 true로 바꿈. => if 안에 코드가 한번만 실행 되도록
  
      setTimeout(()=>{ //타이머에게 몇 초 뒤에 waiting을 false로 바꾸도록 타이머 돌아감. => 지속적인 호출이 아니라 일정 시간에 따른 호출 가능.
        waiting = false;
      },limit)
    }
  }
}



ground.addEventListener('mousemove',throttle(handleMove)); //mousemove 실행시킬때 나오는 이벤트 객체가 throttle로 들어감.


/*
throttle(()=>{
  console.log('hello throttle?')
})()
*/


//this를 주는 이유: 연결된 콜백 안에서 this를 쓸 일이 있을수도 있기 때문에 this를 찾아준 거.(지금 작성한 함수에서는 쓸 일이 없는데 나중에 쓸 일 생길 수 있으니까 연습해본 거)







//ground.addEventListener('mousemove',handleMove)
//mousemove 사용하면 마우스 움직일 때마다 그릴 수 있지만 성능에 안 좋음.
//=> 계속해서 태그가 만들어지기 떄문.



//=> 해결 방안
//throttle (수도꼭지), debounce (공 튀김 방지)

//throttle : 수도꼭지에서 물이 콸콸콸 나오는 걸 쫄.쫄.졸 적당히 나오도록 조절해주는게 throttle
//여러번 호출하는게 아니라 정해진 일정 시간마다 호출하는거.

//debounce : 계속 공이 튀기는 걸 막았다가 멈춘 순간 단 한번만 실행하는 거
//전에 했던 건 다 캔슬이 되고 입력이 끝난 다음에 한번 호출되는 거

//범쌤이 검색을 예시로 보여줌. 일반-throttle-debounce




/*
debounce(callback)  실행 시 매개변수인 함수가 debounce함수 내부로 전달
ㄴ (최초 실행시 clearTimeout(timeout) 은 전달받은게 없으니 패스) 전달받은 callback이 timeout이라는 할당 후 web API에서 대기
ㄴ timeout (setTimeout의 시간)이 실행전에 함수를 재 호출시 web API에서 대기중이던 이전 호출을 없앰 (시간 내 반복 호출시 계속 반복)
ㄴ 일정시간 동안 입력 없을시에 callback함수 반환
*/