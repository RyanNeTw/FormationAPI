import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StoreProvider, StoreContext } from "../../Providers/Store";

import Header from "../../components/header";
import CreateArticle from "../../components/admin/create/createArticle";
import CreateCategorie from "../../components/admin/create/createCategorie";
import CreateIngredient from "../../components/admin/create/createIngredient";

export default function create(){

    const { tokenStore, userStore } = useContext(StoreContext);

    const [role , setRole] = useState([]);

    useEffect(()=>{
        
    },[])

    return(
        <div className="flex flex-col gap-5">
            <Header />
            <Link to="/admin" className="underline hover:opacity-80">Retour</Link>
            <CreateArticle />
            <CreateCategorie />
            <CreateIngredient />
        </div>
    )
}