//모듈 내보내기 방식   =>크게 어떤게 좋다고 구분지을 수 없기 때문에 상황에 맞게 사용하기.
//1. named export (이름 내보내기)
// export function clearContents(){}

//2. default export (기본 내보내기) 무조건 1개만 내보낼 수 있음
// export default clearContents
//내보낸 게 하나밖에 없어서 inport 할 때 중괄호 안 쓰고 받기 가능.
//export {default as clearContents} from './clearContents.js' //엔트리에서 다시 내보낼때 디폴트는 이런식으로 내보내야 함.




//참고: import 에서는 * 안 되기 때문에 따로따로 받아와야 함.
import { 
  attr, 
  getNode, 
  insertLast,
  clearContents, 
} from "./lib/index.js"; //모듈 프로그래밍




function phase1(){
  // 1. input value 값 가져오기 (first,second)
  //    - input 선택하기 
  //    - input에게 input 이벤트를 걸어준다.
  //    - input.value 값을 가져온다.

  // 2. 숫자 더하기
  //    - 숫자 형변환 

  // 3. result 내용 비우기
  //    - clearContents

  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');


  function handleInput(){
    const firstValue = Number(first.value);
    const secondValue = +second.value;
    const total = firstValue + secondValue;

    clearContents(result)
    
    insertLast(result,total);
  }

  function handleClear(e){
    e.preventDefault();
    
    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input',handleInput);
  second.addEventListener('input',handleInput);
  clear.addEventListener('click',handleClear);

}


phase1()





function phase2(){
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')]
  
  
  
  function handleInput(){
  
    const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value),0)
    
    clearContents(result);
    insertLast(result,total);
  }
  
  
  
  
  
  function handleClear(e){
    e.preventDefault();
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }
  
  
  
  calculator.addEventListener('input',handleInput);
  clear.addEventListener('click',handleClear);
  
}