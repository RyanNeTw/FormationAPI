import { createContext, useEffect, useState} from "react";

export const StoreContext = createContext()

export function StoreProvider(props){

    const [tokenStore, setTokenStore] = useState([])
    const [ userStore, setUserStore] = useState([])
    const [roleStore, setRoleStore] = useState("")
    const [name, setName] = useState("")

    useEffect(()=>{
        setTokenStore(localStorage.getItem('token'))  
        setUserStore(localStorage.getItem('user'))
        setRoleStore(localStorage.getItem('role'))
    },[])

    return(
        <StoreContext.Provider value={{
            setTokenStore: setTokenStore,
            tokenStore: tokenStore,
            setUserStore: setUserStore,
            userStore: userStore,
            setRoleStore: setRoleStore,
            roleStore: roleStore,
            setName: setName,
            name: name
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}