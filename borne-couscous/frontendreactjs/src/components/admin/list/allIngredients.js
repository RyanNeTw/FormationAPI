import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import DeleteIngredient from '../delete/deleteIngredient';

export default function listIngredient(){
    const [ingredients, setIngredients] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        allIngredients()
    },[])

    function allIngredients(){
        fetch("http://127.0.0.1:3333/ingredients/allIngredient").then((res)=>{
            res.json().then((json)=>{
                setIngredients(json.data)
            })
        })
    }

    const updatePage=(ingredient)=>{
        navigate(`/admin/ingredient/${ingredient.id}`,{state: ingredient});
          }

    return(
        <div>
            <h1 className="font-bold text-2xl flex justify-center">List Ingredients</h1>
            <div className="flex flex-wrap gap-2">
                {
                    ingredients.map((ingredient, index) =>{
                        return(
                            <div key={index} className="w-60 flex flex-col gap-2 justify-center items-center border-solid border-2 border-sky-500 rounded p-4 cursor-pointer hover:bg-sky-200">
                                <h1>{ ingredient.name }</h1>
                                <h2>{ ingredient.stock } stock</h2>
                                <a onClick={()=>{updatePage(ingredient)}} className="bg-sky-500 text-white p-1 rounded hover:bg-sky-400">Modifier</a>
                                <DeleteIngredient id={ingredient.id}/>
                            </div>
                        )
                    })
                }   
            </div>
        </div>
    )
}