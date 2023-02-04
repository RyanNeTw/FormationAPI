import Login from "../../components/auth/login"
import Register from "../../components/auth/register"

import { useContext } from "react"
import { StoreContext } from "../../Providers/Store"
import { useNavigate } from "react-router-dom"

import Header from "../../components/header"

export default function LoginPage(){
    const { tokenStore, roleStore } = useContext(StoreContext)

    const navigate = useNavigate()

    return (
        <div>
            {roleStore == 'admin' ? <Header /> : null}
            {!tokenStore ? <Register /> : null}
            {!tokenStore ? <Login /> : null}
        </div>
    )
}