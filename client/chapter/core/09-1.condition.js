/* ---------------- */
/* Condition        */
/* ---------------- */


/* 간단한 조건문 연습
const result= prompt('자바스크립트의 "공식" 이름은 무엇일까요?','');

if(result === 'ECMAScript'){
  console.log('정답입니다!');
}else{
  console.log('모르셨나요? 정답은 ECMAScript 입니다!');
}
*/


function watchingMovie(){
  
// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

let didWatchMovie= confirm('그 영화 봤니?'); //confirm 은 선택에 따라 true, false 반환함.

if(didWatchMovie){
  console.log('그 영화 재밌더라~');

}else{
  let goingToWatchMovie = confirm('그 영화 볼거니?');

  if(goingToWatchMovie){
    let withWho = prompt('누구랑 볼거니??');

    if(withWho==='you'){
      console.log('사랑해')
    }else{
      console.log('왜 나랑 안봐?');
    }

    console.log(withWho);
  }else{
    console.log('그래. 나중에 꼭 봐!');
  }
}

}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자
let didWatchMovie= 'no';
let goingToWatchMovie = 'yes';

const message = didWatchMovie.includes('yes') ? '그 영화 재밌더라~' : (goingToWatchMovie.includes('yes') ? '언제볼까?' : '그래');



// 멀티 조건부 연산자 식
function render(node,isActive){
  
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div> 
  ` //if문은 값을 반환하지 않기 때문에 대신 사용 안됨.
  node.insertAdjacentHTML('beforeend',template);
}