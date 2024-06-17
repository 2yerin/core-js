/* ------------------ */
/* Variables          */
/* ------------------ */

let admin;
let name;

name="John"; //윈도우에 내장되어 있는 전역 객체에 name 이라는 이름이 이미 있어서 선 그어진 거! 문제는 없음.
admin=name;

console.log(admin); //윈도우는 생략이 가능. 콘솔 원래 윈도우 기능이라 window.consol.log()

const OUR_PLANET_NAME="Earth";
let onlineUserName;



/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let productPriceByQuantity;
// - 구매 제품 가격의 총 합
let totalPriceOfPurchasedProducts;
// - 1년 기준 일(day)자 수
const NumberOfDaysPerYear = 365;
const DAY_PER_YEAR = 365;
// - 구매 결제 여부
//true/false => boolean date 쓸 때는 관례적으로 이름 앞에 is나 has 를 붙여서 씀.
let isPayment = false;
let hasCartList = false;
// - 구매 결제 내역
let PurchasePaymentHistory;
let paymentList;
// - 브랜드 접두사
const brandPrefix='';
const BRAND_PREFIX = 'Stussy';
// - 오늘의 운세
let todayHoroscope;
// - 상품 정보
const productInformation = '';


/* variables ----------------------------------------------------------- */


/* constant variables -------------------------------------------------- */

