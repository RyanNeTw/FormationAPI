import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import DeleteCategorie from '../delete/deleteCategorie';

export default function listCategory(){
    const [categories, setCategories] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        allCategories()
    },[])

    function allCategories(){
        fetch("http://127.0.0.1:3333/categories/getallCategories").then((res)=>{
            res.json().then((json)=>{
                setCategories(json.data)
            })
        })
    }

    const updatePage=(categorie)=>{
        navigate(`/admin/categorie/${categorie.id}`,{state: categorie});
          }

    return(
        <div>
            <h1 className="font-bold text-2xl flex justify-center">List categories</h1>
            <div className="flex flex-wrap gap-2">
                {
                    categories.map((categorie, index) =>{
                        return(
                            <div key={index} className="flex flex-col gap-2 border-solid border-2 border-sky-500 rounded p-4 cursor-pointer hover:bg-sky-200">
                                <h1>{ categorie.name }</h1>
                                <a onClick={()=>{updatePage(categorie)}} className="bg-sky-500 text-white p-1 rounded hover:bg-sky-400">Modifier</a>
                                <DeleteCategorie id={categorie.id} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}