/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

console.log('valueOf' in javaScript);

Object.prototype.nickName = '호랑이'; 

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
//console.log(javaScript.hasOwnProperty('nickName'));

                                      //메서드 빌렸쓰기
//console.log(Object.prototype.hasOwnProperty.call(javaScript.'nickName'));
//console.log(({}).hasOwnProperty.call(javaScript.'nickName')); //위에 꺼 줄여쓰는 방법. 완전 같지는 않음. 위에거가 조상 걸 가져온다면 이건 새로운 객체 생성해서 거기서 가져오는 거.


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for(let key in javaScript){ //객체를 넣으면 객체의 키를 순환
  //let key=creator
  //let key=createAt
  //.. //for in 안에서는 선언하고 지우고 다음 내용 다시 선언하고 지우고. 이런식으로 키 순환.

  if(Object.prototype.hasOwnProperty.call(javaScript, key)){
    console.log(key);
  }
}



//enumerable: 열거 가능한 //순환. 조회 가능한 요소.
//아래처럼 객체 설정해줘서 얼려놓기도 가능.

/*
const obj={};
obj.nickName='tiger';



Object.defineProperty(obj, 'age',{
  value:30,
  enumerable: true, //조회 가능하도록 바꿔줌.
  writable: true, //객체를 보호해서 값 변경 밖에서 막을 수 있음.
  configurable:true
})



Object.defineProperties(obj,{
  age:{
  alue:30,
  enumerable:true,
  writable:true
  }
})
*/


for(let key in javaScript){
  if(Object.prototype.hasOwnProperty.call(javaScript, key)){
    console.log(javaScript[key]); //객체의 값에 접근하는 방법
  }
}

//점 표기법     =>변수 설정 x  _ex.javaScript.key
//대괄호 표기법 => 변수 설정 o _ex.javaScript['key']


const tens =[10,100,1000,10_000]

for(let key in tens){
  console.log(tens[key]);
} //for in으로 배열 순환하는 건 권장되지 않음. 순서가 중요한 배열에게 정확한 순서를 보장해주지 않고, 성능 저하도 있기 때문.
//for ...in은 객체에게 양보하자.
//배열 반복문: for문, for..of 권장.