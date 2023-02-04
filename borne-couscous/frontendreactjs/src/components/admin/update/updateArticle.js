import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StoreContext } from "../../../Providers/Store";

export default function UpdateArticle(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { tokenStore } = useContext(StoreContext);

    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [ingredientArticle, setIngredientArticle] = useState([]);
    const [dataUpdate, setDataUpdate] = useState("");

    const location = useLocation();

    const onSubmit = data => {updateArticle(data), console.log(data)};

    function allCategories(){
        fetch("http://127.0.0.1:3333/categories/getallCategories").then((res)=>{
            res.json().then((json)=>{
                setCategories(json.data)
            })
        })
    }

    function allIngredients(){
        fetch("http://127.0.0.1:3333/ingredients/allIngredient").then((res)=>{
            res.json().then((json)=>{
                setIngredients(json.data)
            })
        })
    }
    function getArticleIngredient(){
        fetch("http://127.0.0.1:3333/articles/allArticlesWithIngredients/" + location.state.article.id).then((res)=>{
            res.json().then((json)=>{
                let array = []
                for(let i=0; i<json.data[0].ingredients.length; i++){
                    array.push(json.data[0].ingredients[i].name)
                }
                setIngredientArticle([...array])
            })
        })
    }
    function updateArticle(data){
        fetch('http://127.0.0.1:3333/articles/updateArticle/' + location.state.article.id, {
            method: 'PUT',
            headers:{
            'Content-Type':'application/json',
            'Authorization': "Bearer " + tokenStore
            }, 
            body: JSON.stringify({
                name: data.name,
                price: data.price,
                image: data.image,
                categorie: data.categorie,
                ingredients: data.ingredient
            })
        }).then((res) => {
            res.json().then((json) =>{
                setDataUpdate("Ingredient updated !")
                setTimeout(() => {
                    setDataUpdate('');
                  }, 2000);
            })
        })
    }

    useEffect(()=>{
        allCategories()
        allIngredients()
        getArticleIngredient()
    }, [])

    return(
        <div>
            <div>
                <h1 className="font-bold text-2xl flex justify-center">Modifié un article</h1>
                {
                    dataUpdate ? <p className="font-bold text-sky-800">{dataUpdate}</p> : null
                }
                
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                        <input placeholder="nom" defaultValue={location.state.article.name} {...register("name", { required: true })} className="border-solid border-sky-500 border-2 text-sky-500"/>
                        {errors.name && <span>This field is required</span>}
                        
                        <input type="number" step="0.01" placeholder="prix" defaultValue={location.state.article.price} {...register("price", { required: true })} className="border-solid border-sky-500 border-2 text-sky-500"/>
                        {errors.price && <span>This field is required</span>}

                        <input placeholder="image" defaultValue={location.state.article.image} {...register("image", { required: true })} className="border-solid border-sky-500 border-2 text-sky-500"/>
                        {errors.image && <span>This field is required</span>}

                        <select {...register("categorie")} className="border-solid border-sky-500 border-2 cursor-pointer">
                            <option value={location.state.categorie.id}>{location.state.categorie.name}</option>
                            {
                                categories.map((categorie, index)=>{
                                    if(categorie.id !== location.state.categorie.id)
                                    return(
                                        <option key={index} value={categorie.id}>{categorie.name}</option>
                                    )
                                })
                            }
                        </select>
                        
                    <div className="flex flex-wrap gap-2 overflow-auto">
                            {
                                ingredients.map((ingredient, index)=>{
                                    if(ingredientArticle.length > 0)
                                    if(ingredientArticle.includes(ingredient.name)){
                                        return(
                                            <div key={index} className="flex flex-row gap-1 items-center">
                                                <input type="checkbox" {...register("ingredient")} value={ingredient.id} className="cursor-pointer" defaultChecked/>
                                                <label id={ingredient.id}>{ingredient.name}</label>
                                            </div>
                                        )
                                    }else{
                                        return(
                                            <div key={index} className="flex flex-row gap-1 items-center">
                                                <input type="checkbox" {...register("ingredient")} value={ingredient.id} className="cursor-pointer"/>
                                                <label id={ingredient.id}>{ingredient.name}</label>
                                            </div>
                                        )
                                    }
                                })
                            }
                    </div>

                        <input type="submit" className="border-solid border-sky-500 border-2 rounded text-sky-500 cursor-pointer hover:bg-sky-500 hover:text-sky-100 transition-colors"/>
                    </form>
            </div>
        </div>
    )
}