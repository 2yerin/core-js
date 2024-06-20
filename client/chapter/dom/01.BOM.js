/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;


/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location; //window.location인데 location이라고 써도 됨.

console.log(host);
/* ( 참고 ) -> 나중에 페이지 이동할 떄 자주 쓰임.
href: 주소
protocol: 통신규약. http인지 https 인지
host: 어디서 부터 주체기 이루어 졌는지
port: 포트 번호
search : 검색할 때 정보..?
hash : #  //해시 이용해서 원하는 위치로 이동 가능.
*/

const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }



/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;



//콜백
function getGeolocation(success, fail){

  navigator.geolocation.getCurrentPosition((data)=>{
    if(data){
      const {latitude:lat,longitude:long} = data.coords;

      const geo = { lat, long };  //숏 핸드 프로퍼티.(키와 벨류가 똑같아서)
      success(ge0) 
    }
    else{
      fail({message: '위치 서비스 동의 하세요'});
    }
  })

}



getGeolocation( //{let: , long: }
  ({lat, long})=>{
    console.log(lat, long);
  },
  (e)=>{
    console.log(e);
  }
)


// 문제상황: 처음에 return 사용했을 떄 undefined 나온 이유. js 코드가 위에서 아래로 읽지만 위에서 오래 걸리면 아래는 기다려 주지 않고 실행됨 => 비동기
// =>해결방법: 콜백함수, promise

//callback -> promise -> async await


//비동기 함수인지 확인하는 방법
//1. 콘솔에 찍어 봤을 때 Promise 객체가 떨어짐.
//2. 알맞은 코드인데 실행되지 않음.



//프로미스
function getGeolocation(){
  
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((data)=>{
  
    if(data){
      const {latitude:lat,longitude:long} = data.coords;
      const geo = { lat, long };
      resolve(geo)
    }
    else{
      reject({message:'위치 서비스 동의 하세요'});
    }
    })
  })
}

getGeolocation()
.then(res => console.log(res))





//navigator.mediaDevices.getUserMedia({video:true}) //(참고) 카메라 동의 여부








//js에서 innerWidth, innnerHeight -<= css에서 100vw, 100vh
//orientation : 현재 모니터가 가로방향인지 세로방향인지

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;


/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;