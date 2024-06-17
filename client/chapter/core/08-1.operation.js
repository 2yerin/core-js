/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상
let a='10';
let b='30';

// 단항 연산자
let unary = +a;
console.log('unary : ' ,unary);

// 이항 연산자
let binary = Number(a) + Number(b);
console.log('binary : ' ,binary);

// 삼항 연산자
let ternary= a > 10 ? true : false;
console.log('ternary : ' ,ternary);

// 산술 연산자: 덧셈
let addition =1+2;

// 산술 연산자: 뺄셈
let subtraction=10-2;

// 산술 연산자: 곱셈
let multiplication=1*2;

// 산술 연산자: 나눗셈
let division=6/2;

// 산술 연산자: 나머지
let remainder=10%3;

// 산술 연산자: 거듭 제곱
let power=4**2; //16
console.log('power : ' ,power);
console.log(Math.pow(4,2)); //같은 기능


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6]; //결과: 1,2,34,5,6  //[1,2,3].toString() + [4,5,6].toString()
let onlyWorkDefaultValues2 = [1,2,3].concat([4,5,6]); //결과: 1,2,3,4,5,6  //concat: 결합

let first =[1,2,3];
let second=[4,5,6];


// spread syntax (전개 구문) //배열에서 아이템을 꺼내서 풀어 해침.
// concat은 레거시라 스프레드를 많이 씀.
console.log(...first, ...second); //아이템만 풀어 헤친거고 배열은 아님.
console.log([...first, ...second]); //풀어 헤친다음에 다시 배열로 묶어줘야 배열.



// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --
let counter1=0;
let counter2=0;

console.log(++counter1); //결과:1
console.log(counter2++); //결과:0


//복합 할당 연산자
let counter=0;
counter +=1;

//풀어서
counter = counter +1;


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3;
//total= 2 *  5 + 125 = 135

/* 위 코드를 읽기 쉽도록 쓰면
let total = count %4;
count=count/2
let pow=count**3;
total=total*count+pow;

console.log(total);
*/