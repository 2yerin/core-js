/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log(extractCharacter);


// enumerable 열거 가능한
// iterable 반복 가능한
// immutable 불변의(변하지 않는)   //변경 방법: const a= {...immutable}
// mutable 변경 가능한
// mutant 돌연변이


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P'+ message.slice(1);
console.log(immutableChangeCharacter);



// 부분 문자열 추출
let slice = message.slice(4,-1); //4번째 부터 -1번째까지 자름.
console.log('slice: ',slice);

let subString=message.substring(2,5);
console.log('subString: ',subString)

//let subStr=message.substr();


// 문자열 포함 여부 확인
let indexOf=message.indexOf('hi');
console.log('indexOf: ',indexOf); //해당 문자가 없다면 음수 반환. 있다면 해당 위치 반환


function checkBrowser(){

  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch(true){
    case agent.indexOf('edg') > -1 :
      browserName = 'MS Edge'
    break;
    case agent.indexOf('chrome') > -1 && !!window.chrome :
      browserName = 'Chrome'
    break;
    case agent.indexOf('safari') > -1 :
      browserName = 'Safari'
    break;
    case agent.indexOf('firefox') > -1 :
      browserName = 'Firefox'
    break;
    case agent.indexOf('trident') > -1 :
      browserName = 'IE'
    break;
    default:
      browserName = '무슨 브라우저 쓰세요..?'
  }

  return browserName

}


checkBrowser() // chrome







let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ',lastIndexOf)

let includes = message.includes('Less');
console.log('includes : ',includes)

let startsWith = message.startsWith('less');
console.log('startsWith : ',startsWith)

let endsWith = message.endsWith('more.');
console.log('endsWith : ',endsWith)


let str = '  a    b   c                d     '

// 공백 잘라내기
let trimStart = str.trimStart(); //trimLeft 요즘 안 쓰임. 요즘에는 left,right 말고 start, end개념을 많이 사용하기 때문. 글의 시작 방향 이 어느쪽일지 모르니까.
console.log('trimStart : ',trimStart)

let trimEnd = str.trimEnd();
console.log('trimEnd : ',trimEnd)

let trim = str.trim();
console.log('trim : ',trim)


const replaceAll = str.replaceAll(' ',''); //외쪽 값을 찾아서 오른쪽 값으로 바꿔 줌.
console.log('replaceAll : ',replaceAll)


const replace = str.replace(/\s*/g,''); //replace 사용할 수 도 있는데 이건 정규표현식 사용해 줘야함.
console.log('replace : ',replace)




// function trimText(string){
//   return string.replace(/\s*/g,'');
// }

const trimText = (s) => s.replace(/\s*/g,'');
trimText(str) // abcd





// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ',repeat)


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ',toLowerCase)

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ',toUpperCase)



// 텍스트 이름 변환 유틸리티 함수(카멜 케이스로 이름 바꾸기) (카멜케이스: helloWord)
function toCamelCase(string) { 
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}// \s : 공백
// (\s|-|_)+./g 에서 걸러진 문자들이 ($1) 에 수집이 됨. //정규표현식
// $1.trim() 으로 혹시 모를 공백 제거


function toPascalCase(string) { //파스칼 케이스: 카멜케이스이긴 한데 첫 글자가 대문자로 나오는 거! HelloWord
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
