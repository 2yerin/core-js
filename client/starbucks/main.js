/*global gsap*/

const aList = document.querySelectorAll('nav a');

aList.forEach((a)=>{
    const target = a.lastElementChild;

    const t1 = gsap.timeline({paused:true})
    .to(target,{height:100, ease:'power3.inOut'})

    a.addEventListener('mouseenter',()=>t1.play())
    a.addEventListener('mouseleave',()=>t1.reverse())
})