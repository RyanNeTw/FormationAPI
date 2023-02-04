import { useState, useEffect, useContext } from 'react'
import { StoreProvider, StoreContext } from '../Providers/Store'
import { useNavigate } from 'react-router-dom';


export default function header(){
  const {setTokenStore ,tokenStore, setUserStore, userStore, setRoleStore, roleStore} = useContext(StoreContext);

  const navigate = useNavigate();

  if(localStorage.getItem('role') != 'admin'&& window.location.pathname.split("/")[1] == 'admin'){
    localStorage.clear()
    navigate('/auth')
  }

  if(tokenStore && window.location.pathname.split("/")[1] == 'auth'){
    navigate('/')
  }

  function disconnect(){
    localStorage.clear()
    setUserStore(null)
    setRoleStore(null)
    setTokenStore(null)
    navigate('/auth')
  }

  useEffect(() => {
      
  }, [])


    return (
      <header>
        {roleStore == 'admin' && <button onClick={disconnect}>Disconnect</button>}
      </header>
    )
}