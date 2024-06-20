const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = t => t.style.height = 0;

/*
depthList.forEach((item)=>{
  console.log(item);
})

depthList.forEach(console.log) //전달하려는 값이 같으면 이런식으로 줄여쓰기도 가능

depthList.forEach(h) //이것도 가능
*/

aList.forEach((a)=>{
  a.addEventListener('mouseenter',()=>{

    const target = a.lastElementChild;

    
    // 내가 선택한 depth를 제외한 항목 0
    // 모든 depth 높이를 0 
    depthList.forEach(h)

    target.style.height = '100px';
  })

})

header.addEventListener('mouseleave',()=>depthList.forEach(h))