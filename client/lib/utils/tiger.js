const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}


//fetch => promise
//fetch: (가지고 와요.) 데이터를 가지고 옴.


export const tiger = async (options) => {

  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }
  const response = await fetch(url,restOptions); //프로미스 객체 나옴

  if(response.ok){
    response.data = await response.json();
  }

  return response;
}



// const result = await tiger.get(ENDPOINT);

// console.log( result );



//ok, json => response 객체가 가지고 있는 거.
//ok : 통신 성공했을 때 나옴. http 상태코드가 200~299 사이일 경우 true 반환

//서버에서 온 문자 해석하기 위해 JSON.parse(data) 사용해서 해석했었음.
//근데 fatch에서는 response.json()을 통해 얘가 해석해줌.


//fetch는 프로미스 객체를 반환하고 한번 더 껍데기 까줘야한다.






tiger.get = (url,options) => {
  return tiger({
    url,
    ...options
  })
}


tiger.post = (url,body,options) => {
   return tiger({
    method:'POST',
    url,
    ...options,
    body:JSON.stringify(body)
   })
}


tiger.delete = (url,options) => {
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}


tiger.put = (url,body,options) => {
  return tiger({
    method:'PUT',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}


tiger.patch = (url,body,options) => {
  return tiger({
    method:'PATCH',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}





// IIAFE

// (async function(){



  
  

// })()