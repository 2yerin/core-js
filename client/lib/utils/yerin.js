const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

//fetch => promise
//fetch: (가지고 와요.) 데이터를 가지고 옴.

const tiger = async() => {
  const response = await fetch(ENDPOINT); //프로미스 객체 나옴


  if(response.ok){
   response.data = await response.json();
  }

  return response;
}

tiger()


//ok, json => response 객체가 가지고 있는 거.
//ok : 통신 성공했을 때 나옴. http 상태코드가 200~299 사이일 경우 true 반환

//서버에서 온 문자 해석하기 위해 JSON.parse(data) 사용해서 해석했었음.
//근데 fatch에서는 response.json()을 통해 얘가 해석해줌.



//fetch는 프로미스 객체를 반환하고 한번 더 껍데기 까줘야한다.