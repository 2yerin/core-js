/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

//타입 정확하게 체크하는 방법: Array.isArray, 아래 코드


/*
function isArray(data){
  Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}
*/
//object.tostring : 정확한 타입을 체크해줌. ex) [object array]
//toString은 Object의 능력.(array에도 있는데 그건 이름만 같고 능력이 다름. 문자로 바꿔주는 능력)


/*
const typeOf  = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase()

const isArray = data => typeOf(data) === 'array'
const isNull = data => typeOf(data) === 'null'
const isNumber = data => typeOf(data) === 'number'
*/




const people = [
  {
    id:0,
    name:'안재명',
    age:25,
    job:'물음표살인마',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:1,
    name:'황선우',
    age:51,
    job:'요식업 사장님',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:2,
    name:'유진',
    job:'디스코드 봇',
    age:12,
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:3,
    name:'김한울',
    job:'비둘기',
    age:39,
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt:'대체 텍스트입니다.'
  }
]



/* 요소 순환 ---------------------------- */

// forEach
people.forEach((user)=>console.log(user.job));




/*
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

first.addEventListener('click',()=>{
  console.log('first를 클릭하셨습니다.');
})

second.addEventListener('click',()=>{
  console.log('second 클릭하셨습니다.');
})

third.addEventListener('click',()=>{
  console.log('third 클릭하셨습니다.');
})
*/


const span = document.querySelectorAll('span');

span.forEach((tag)=>{
  tag.addEventListener('click',function(){ //this 써야해서 일반함수 쓴거. 에러우펑션은 this 안 되니까!
    this.style.color = 'dodgerblue'
  })
})




/* 원형 파괴 ----------------------------- */

// push
//people.push('admin')

// pop
//people.pop()

// unshift

// shift

// reverse //원본을 진짜로 뒤집어 버리기 때문에 위험할 수도 있음. => 해결방법: 복사한 값을 뒤집기
/*
const arr =[...people]; //뒤집으려면 안전하게 값을 복사해서 뒤집어야 하기 때문에 이러한 불편함을 보완한게=> toReversed : 알아서 복사해서 뒤집어줌.
arr.reverse()
*/

// splice
//people.splice(0,2,'안녕','잘가')

// sort
function compare({age: a},{age: b}){ //구조분해 할당, 리네임 동시에 한 거
  if(a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a == b) return 0; // 두 값이 같은 경우 
  if(a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

people.sort(compare)


/* 새로운 배열 반환 ------------------------ */

// concat
// toSpliced
const toSpliced = people.toSpliced(0,2)

// toSorted
const toSorted = people.toSorted(compare)

// toReversed
const toReversed = people.toReversed();

// map  //특정 부분을 새로운 배열로 만들어낼 때 자주 사용됨.
//이름만 담은 배열 반환
/*
const nameList = people.map((user) => {
  return user.name
  });
*/

const nameList = people.map(u => u.name);

//현재 나이에 +2 배열 반환
const age = people.map(u=> u.age+2);



const cardTag = people.map(({name,age,job,imgSrc,imgAlt})=>{
  
  let template = /* html */`
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `
  return template;
})

const ul = document.querySelector('ul');

cardTag.forEach(tag => ul.insertAdjacentHTML('beforeend',tag))
//insertAdjacentHTML(선택 태그 기준으로 어느 위치에 추가할지,태그 선택 ) : html 추가하는 거 



/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes


/* 요소 찾기 ------------------------------ */

// find
const 황 = people.find((item)=>{
  return item.name ==='황선우'
})

// findIndex



/* 요소 걸러내기 --------------------------- */

// filter
const filter = people.filter((item)=>{
  return item.age > 20
})

//console.log(...filter);

//필터링을 걸쳐서 조건에 참이 나오는 것들을 모아서 배열로 반환해줌.
/*
filter, find 차이점
1. filter: 조건에 부합하는 모든 걸 찾아서 배열로 반환, find:마주치는 얘 하나만 찾음
2. filter: 배열만 반환, find: 아이템이 뭔지에 따라 다름.
*/



/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce


// const reduce = people.reduce((acc,cur)=>{
//   return acc + cur.age 
// },0)

const reduce = people.reduce((acc,cur) => acc + cur.age ,0)

const template = people.reduce((acc,cur)=>{
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`
},'')

ul.insertAdjacentHTML('beforeend',template)



// reduceRight


/* string ←→ array 변환 ------------------ */

const str = '유진 정민 현주 재명'

// split //문자를 배열로 바꿔줌
const stringToArray= str.split(' ');
console.log(stringToArray);

// join
const arrayToString= stringToArray.join('/')
console.log(arrayToString);








//forEach, map, filter, reduce 중요함!!

/*
//forEach 함수로 만들어보기
[1,2,3].forEach(()=>{})


const forEach = (f,i) => {
  for(const a of i) f(a)
}

forEach((item)=>{
  console.log( item );
},[1,2,3])


//map 함수 만들어보기
const map = (f,i) => {
  let result =[];

  for(const a of i){
    result.push( f(a) )
  }

  return result;
}

map((i)=>{i+2},[1,2,3])



//filter
const _filter = (f,i) =>{
  let result =[];

  for(const a of i){
    if(f(a)) result.push(a)
  }
  return result;
}


_filter( n=> n>3, [1,2,3,4,5])



//reduce
const _reduce =(f,acc,i) => {
  if(!i){ //초깃값 설정이 없을 경우 대비
    i = acc;
    acc = i.shift() //초깃값 설정이 없으면 배열의 첫번째 값을 초깃값으로 설정.
  }
    
  for(const a of i){
    acc = f(acc, a);
  }
  
  return acc;
}

const add=(a,b) => a+b;
_reduce(add, 0,[1,2,3])

*/







const products = [
  {name: '냉동 만두', price: 10000, brand: '비비고'},
  {name: '냉동 피자', price: 15000, brand: '오뚜기'},
  {name: '냉동 치킨 너겟', price: 12000, brand: '하림'},
  {name: '냉동 감자튀김', price: 8000, brand: '맥케인'},
  {name: '냉동 새우', price: 18000, brand: '곰곰'}
];


const forEach = (f,i) => {
  for(const a of i) f(a)
}

forEach((item)=>{
  console.log( item );
},[1,2,3])


const map = (f,i) => {
  let result = [];

  for(const a of i){
    result.push( f(a) )
  }
  return result;
}


const _filter = (f,i) => {
  let result = [];

  for(const a of i){
    if(f(a)) result.push(a)
  }  
  return result;
}

_filter(n => n > 3,[1,2,3,4,5]) 



const _reduce = (f,acc,i) => {

  if(!i){
    i = acc;
    acc = i.shift()
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }

  for(const a of i){
    acc = f(acc,a);
  }
  return acc;
}

const add = (a,b) => a + b;
console.log( _reduce( (t,p) => t + p.price,0 ,products) );

console.log(  //함수형 프로그래밍

  _reduce(
    add,
    map(p => p.price,
      _filter(p => p.price < 10000,products)),
  )
);