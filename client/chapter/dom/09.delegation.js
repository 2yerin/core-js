/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


const nav = getNode('nav');



function handleClick(e){
  //console.log(e.target);
  const target = e.target;
  const name = target.dataset.name;
  const li = target.closest('li'); //sapn을 클릭했더라도 인접한 li를 찾아줌.

  if(!li) return;

  //if(target.tagName !== 'LI') return; //li만 정확하게 찾도록

/* 클래스를 사용한 위임 ---------------- */

//if(e.target.classList.contains('about')) console.log('about!!');
//if(e.target.classList.contains('home')) console.log('home!!');
//if(e.target.classList.contains('contact')) console.log('contact!!');



/* 속성을 사용한 위임 ------------------ */

//console.log(target.getAttribute('data-name'));
//console.log(target.dataset.name);
//console.log(attr(target,'data-name'));

/*
if(name === 'about') console.log('about!!');
if(name === 'home') console.log('home!!');
if(name === 'contact') console.log('contact!!');
*/



/* 노드를 사용한 위임 ------------------ */

//정확히 li만 조회해야함(ul조회하면 ul에도 li가 포함되어 있끼 때문에 같이 나옴.)

if(li.textContent.includes('ABOUT')) console.log('about!!');
if(li.textContent.includes('HOME')) console.log('home!!');
if(li.textContent.includes('CONTACT')) console.log('contact!!');


}


nav.addEventListener('click',handleClick)









const navList = document.querySelectorAll('nav li');


navList.forEach((li,i)=>{
  li.addEventListener('click',()=>{
    console.log(i);

    switch (i) {
      case 0: console.log('about'); break;
      case 1: console.log('home'); break;
      case 2: console.log('contact'); break;
    }
  })
})