/*----------------1번 문제----------------*/
//내가 푼 거
function getValueAtObject(obj, key) {
  if(typeof obj !== "object" || Array.isArray(obj))
    throw new Error('obj의 값이 객체가 아닙니다.');

  if(typeof key !== "string")
    throw new Error('key의 값이 문자열이 아닙니다.');

  if(obj.hasOwnProperty(key)){
    return obj[key];
  }else{
    throw new Error('해당 key값이 존재하지 않습니다.');
  }
}


//범쌤 해설
function isObject(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object' //타입을 정확하게 체크해줌. 배열, 객체, null까지 모두 정확하게 체크.
}


function getValueAtObject(obj,key){
  if(typeof key !== 'string'){
    throw new TypeError('getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }
  
  if(isObject(obj)){
    if(Object.prototype.hasOwnProperty.call(obj,key)){ //obj.hasOwnProperty는 일반객체이기때문에 해즈원 프로퍼티를 안전하게 써야함. obj.hasOwnProperty=()=>{} 이렇게 원본 객체를 훼손 가능하니까. =>안전하게 조상한테 접근한다음에 call로 빌려써야함. 괄호 안에 내용은 (저걸 가져다 쓸 대상,key)
      return obj[key];
    }
    else{
      throw new Error(`getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`);
    }
  }
  else{
    throw new TypeError('getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다.');
  }
}





/*----------------2번 문제----------------*/
//내가 푼 거
function getNumberAtArray(arr, index) {
  if(!Array.isArray(arr))
    throw new Error('arr의 값이 배열이 아닙니다.');

  if(typeof index !== 'number')
    throw new Error('index의 값이 숫자가 아닙니다.');

  if(0 <= index && index < arr.length){
    return arr[index];
  }else{
    throw new Error('index의 범위값이 유효하지 않습니다.');
  }
}



//범쌤 해설
// 1. arr 변수가 배열인지 확인하기
// 2. 0보다 크거나 같음 && 배열의 길이보다 작을 때
function getNumberAtArray(arr, index){

  if(Array.isArray(arr)){
    if(index >= 0 && index < arr.length){
      return arr[index];
    }
    else{
      throw new Error('배열에 없는 index입니다.');
    }
  }
  else{
    throw new TypeError('getNumberAtArray 함수의 첫 번째 인수는 배열 타입 이어야 합니다.')
  }
  
}