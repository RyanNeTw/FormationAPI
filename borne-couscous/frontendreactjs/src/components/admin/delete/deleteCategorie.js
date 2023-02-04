import { useState, useEffect, useContext } from "react";

import { StoreProvider, StoreContext } from "../../../Providers/Store";

export default function deleteCategorie(props){

    const {tokenStore} = useContext(StoreContext)

    function deleteCategorie(id){
        fetch("http://127.0.0.1:3333/categories/deleteCategories/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer " + tokenStore
            },
            body: JSON.stringify({
                id: id
        })
        }).then((res) => {
            res.json().then((json) =>{
                console.log(json)
            })
        })
    }

    return(
        <div>
            <button onClick={(e)=>{deleteCategorie(props.id)}} className="text-3xl text-red-500 p-1 font-bold border-solid border-2 border-red-500 rounded hover:bg-red-200">Supprimer</button>
        </div>
    )
}