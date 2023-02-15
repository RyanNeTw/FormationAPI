import { useState, useEffect, useContext } from 'react'
import { StoreProvider, StoreContext } from '../Providers/Store'
import { useNavigate, Link } from 'react-router-dom';


export default function header(){
  const {setTokenStore ,tokenStore, setUserStore, userStore, setRoleStore, roleStore, name, setName, setCart, setCommands} = useContext(StoreContext);

  const navigate = useNavigate();

  function disconnect(){
    localStorage.clear()
    setUserStore(null)
    setRoleStore(null)
    setTokenStore(null)
    setName(null)
    setCart(null)
    setCommands(null)
    navigate('/auth')
  }

  useEffect(() => {
    if(tokenStore && window.location.pathname.split("/")[1] == 'auth'){
      navigate('/')
    }

    if(!localStorage.getItem('token')){
      navigate('/auth')
    }

    if(roleStore != 'admin'&& window.location.pathname.split("/")[1] == 'admin'){
      localStorage.clear()
      navigate('/')
    }
  }, [])


    return (
      <header className='flex flex-row justify-between border-b-4 border-solid border-sky-500 mb-4'>
        {name ? <h1 className='font-bold text-xl'>Bienvenue {name} !</h1> : <h1 className='font-bold text-xl'>Bienvenue !</h1>}
        <div className='flex flex-row gap-2'>
        {roleStore == 'admin' && <Link to="/admin">Admin</Link>}
        {roleStore == 'admin' && <Link to="/kitchen">Kitchen</Link>}
        {roleStore == 'admin' && <Link to="/">Home Page</Link>}
        {roleStore == 'admin' && <button onClick={disconnect}>Disconnect</button>}
        </div>
      </header>
    )
}