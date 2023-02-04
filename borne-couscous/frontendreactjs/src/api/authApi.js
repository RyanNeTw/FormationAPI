export function loginApi(data){

    fetch('http://127.0.0.1:3333/auth/login', {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        }, 
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        })
      }).then((res) => {
        res.json().then((json) =>{
            console.log(json)
            setTokenStore(json.token.token)
            localStorage.setItem('token', json.token.token)
        })
    })
}

