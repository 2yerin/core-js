/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(typeof String(YEAR)); //string
console.log(typeof(YEAR+'')); //string


// undefined, null
let days=null;
console.log(days + ''); //null

let friends;
console.log(friends+''); //undefined


// boolean
let isClicke=true;
console.log(String(isClicke)); //true


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //NaN


// null
let money=null;
console.log(Number(money)); //0


// boolean
//true=1, false=0
let isMarried = true;
console.log(Number(isMarried)); 


// string
let num ='100';

console.log(Number(num)); //명시적 변환
console.log(num*1); //암시적 변환
console.log(num/1);
console.log(+num);


// numeric string
const width ='120.5px';

console.log(parseInt(width)); //120 //parseInt: 정수로 변환 //참고: 정수 변환하다가 문자를 만나면 멈춤.
console.log(parseInt(width, 10)); //뒤에 10은 진수. 10진수. 쓰는 사람이 많지는 않지만 권장되는 방식
console.log(parseFloat(width)); //120.5

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(' '));
console.log(Boolean('0'));