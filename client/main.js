/* global gsap */


import { 
  tiger,
  delayP,
  getNode,
  changeColor,
  clearContents,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
 } from "./lib/index.js";




const ENDPOINT = 'http://localhost:3000/users'



// 1. user 데이터 fetch 해주세요.
//    - tiger.get


// 2. fetch 데이터의 유저 이름만 콘솔 출력
//     - 데이터 유형 파악  ex) 객체,배열,숫자,문자
//     - 적당한 메서드 사용하기 

// 3. 유저 이름 화면에 렌더링 

const userCardInner = getNode('.user-card-inner');

async function renderUserList(){


  // 로딩 스피너 렌더링
  renderSpinner(userCardInner)
 
  // await delayP(2000);
  

  try{

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        this._targets[0].remove()
      }
    })
    // getNode('.loadingSpinner').remove()

    const response = await tiger.get(ENDPOINT);

    const data = response.data;
  
    data.forEach(user => renderUserCard(userCardInner,user))
  
    changeColor('.user-card');
  
    gsap.from('.user-card',{
      x:-100,
      opacity:0,
      stagger: {
        amount: 1,
        from:'start'
      }
    })
  
  }
  catch{
    console.error('에러가 발생했습니다!');
    renderEmptyCard(userCardInner)
  }
}

renderUserList()



function handleDeleteCard(e){
  const button = e.target.closest('button');

  if( !button ) return;

  const article = button.closest('article');

  const index = article.dataset.index.slice(5);


  tiger.delete(`${ENDPOINT}/${index}`)
  .then(()=>{
    //요청 보내고 렌더링하기
    clearContents(userCardInner) //기존에 있던 html 내용 지우기
    renderUserList()
  })
  
}


userCardInner.addEventListener('click',handleDeleteCard)




const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate(){
  gsap.to('.pop',{autoAlpha:1})
}


function handleCancel(e){
  e.stopPropagation();

  gsap.to('.pop',{autoAlpha:0})  
}

//e.stopPropagation(); =>태그의 기본 동작 차단.
//취소-팝업-크리에이트
//취소를 누르는 순간 뒤에있는 크리에이트 함수까지 실행시켜버림=> 버블링
//그래서 취소만 찍고 더이상 넘어가지 않도록 막아준 것.
//버블링을 막는 건 딱 끝은 거기 떄문에 이벤트 위임도 당연히 안됨. 그래서 신중하게 사용 = >보통 팝업에 사용함.



function handleDone(e){
  e.stopPropagation();

  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  tiger.post(ENDPOINT, { name, email, website })
  .then(()=>{
      // 1. 팝업 닫기
      gsap.to('.pop',{autoAlpha:0})
      // 2. 카드 컨텐츠 비우기
      clearContents(userCardInner);
      // 3. 유저카드 렌더링하기
      renderUserList();
  })
}


createButton.addEventListener('click',handleCreate)
cancelButton.addEventListener('click',handleCancel)
doneButton.addEventListener('click',handleDone)