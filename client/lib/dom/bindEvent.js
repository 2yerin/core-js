function bindEvent(node,type,handler){
  if(isString(node)) node = getNode(node);

  node.addEventListener(type,handler); //이벤트 생성

  return () => node.removeEventListener(type,handler);
}

//const remove = bindEvent('.first','click',handleClick)

//이제 remove() 호출하면 생성한 이벤트 지울 수 있음.
//가능한 이유: 클로저 때문.
//클로저는 태어난 환경을 기억하기 때문에 제거 함수가 밖으로 튀어나왔지만 태어났을 떄 환경의 node,type,handler를 기억한 상태로 튀어나왔기 때문에 그대로 튀어나온거. 그래서 제거도 훨씬 더 쉽게 가능
