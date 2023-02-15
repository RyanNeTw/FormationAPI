import { createContext, useEffect, useState} from "react";

export const StoreContext = createContext()

export function StoreProvider(props){

    const [tokenStore, setTokenStore] = useState([])
    const [ userStore, setUserStore] = useState([])
    const [roleStore, setRoleStore] = useState("")
    const [name, setName] = useState("")
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [commands, setCommands] = useState([])

    function allProducts(){
        fetch("http://127.0.0.1:3333/categories/allCategories").then((res)=>{
            res.json().then((json)=>{
                setProducts(json.data)
            })
        })
    }

    function allCommands(){
        fetch("http://127.0.0.1:3333/commands/allCommands").then((res)=>{
            res.json().then((json)=>{
                setCommands(json.data)
                console.log(json.data)
            })
        })
    }


    useEffect(()=>{
        setTokenStore(localStorage.getItem('token'))  
        setUserStore(localStorage.getItem('user'))
        allProducts()
        allCommands()
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
            name: name,
            setCart: setCart,
            cart: cart,
            products: products,
            setProducts: setProducts,
            total: total,
            setTotal: setTotal,
            commands: commands,
            setCommands: setCommands
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}