import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import DeleteArticle from '../delete/deleteArticle';

export default function allArticleAdmin(){

    const [categories, setCategories] = useState([])
    const [categorieName, setCategorieName] = useState("")

    const navigate = useNavigate();

    useEffect(()=>{
        allCategories()
        getCategorieName()
    },[])

    function allCategories(){
        fetch("http://127.0.0.1:3333/categories/allCategories").then((res)=>{
            res.json().then((json)=>{
                setCategories(json.data)
            })
        })
    }

    function getCategorieName(categorieName, e){
        setCategorieName(categorieName)
        console.log(e)
    }

    const updatePage=(article, categorie)=>{
        navigate(`/admin/article/${article.id}`,{state: {article: article, categorie: categorie}});
          }

    return(
        <div>
            <h1 className="font-bold text-2xl flex justify-center">List Article</h1>
            <div className="flex flex-row justify-between p-8">
            {
              categories.map((categorie, index) =>{
                    return(
                        <div key={index}>
                            <input type="radio" id={categorie.id} name="categorie" value={categorie.id} onClick={(e)=>{getCategorieName(categorie.name)}} className="hidden" />
                            <label for={categorie.id} className="text-3xl text-sky-500 p-1 font-bold border-solid border-2 border-sky-500 rounded hover:bg-sky-200 cursor-pointer" >{categorie.name}</label>
                        </div>
                    )
              })
            }
            </div>
            {
                categories.map((categorie, index) =>{
                    if(categorie.name == categorieName){
                        return(
                            <div key={index} className="flex flex-wrap gap-5">
                                {
                                    categorie.articles.map((article, index) =>{
                                        return(
                                            <div key={index} className="w-60 flex flex-col gap-2 justify-center items-center border-solid border-2 border-sky-500 rounded p-4 cursor-pointer hover:bg-sky-200">
                                                <h1>Nom : { article.name }</h1>
                                                <h2>prix : { article.price }$</h2>
                                                <img src="http://127.0.0.1:3333/images/shyGangster.png" alt="shyGangster" className="h-20"/>
                                                {
                                                    article.ingredients.map((ingredient, index) =>{
                                                        return(
                                                            <div>
                                                                <h3 key={index}>{ingredient.name}</h3>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <a onClick={()=>{updatePage(article, categorie)}} className="bg-sky-500 text-white p-1 rounded hover:bg-sky-400">Modifier</a>
                                                <DeleteArticle id={article.id}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}