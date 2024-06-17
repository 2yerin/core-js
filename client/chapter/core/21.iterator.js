/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)




const arr ='1 2 3 4 5 6'.split(' ');
const iter = arr[Symbol.iterator](); //arr을 이터레이터 객체로 만듬.

/*
for(const a of iter){
  console.log(a);
}

for(const a of iter){ //위에서 순환이 한번 끝났기 때문에 실행되지 않음. => 이터레이터 객체 특징
  console.log(a);
}
*/

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);


//객체, 배열, 이터레이터 객체 =>이터레이터 객체는 일반 객체, 배열과는 다른 또 다른 자료형
//일반 객체는 next 호출할 수 없음.=> 일반 배열은 그냥 이터러블 요소.
//내장되어 있는 [Symbol.iterator]호출했을때야 비로소 이터러블 객체가 됨.

const renge= {
  from: 1,
  to:5,
  length:5,
  [Symbol.iterator](){
    let current = this.from;
    let last = this.to;

    return {
      next(){
        if(current <= last){
          return {value:'current++',done:false}
      }else{
        return {done:true}
      }
    }
  }
}
}





function* gen(){ //제너레이터 펑션은 에로우 펑션에는 없음. 일반 함수로 만들어 줘야함. => *
  yield 1;
  yield 2;
  yield 3;
}

const gene = gen();




const customIter = {
  *[Symbol.iterator](){
    yield 1;
    yield 2;
    yield 3;
  }
}

for(const a of customIter){
  console.log(a);
}


// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체




function* idGenerator(){
  let id=1;
  while(true){
    yield `user=${crypto.randomUUID()}`
  }
}

const id = idGenerator(); //id.next()하면 값 나옴.




/*
제너레이터 펑션
1. 일관된 반복 동작 제공 (for..of)
2. 커스텀 반복 제어 가능 (객체를 반복 가능한 상태로)
3. 지연 계산 (필요할 때 마다 반복을 돌림) 성능
4. 무한 시퀀스 생성 (무한대의 값 생성)
5. 비동기 반복 작업
6. 다양한 데이터 소스와의 통합 (Map, Set)
*/







// 유사배열, 이터러블 배열화




/*
이터러블한 객체로 만드는 방법
1. [Symbol.iterator]()
2. 제네레이터 펑션 => 일반적인 거에서는 안 쓰는데 함수형 프로그래밍에서 많이 쓰임
*/