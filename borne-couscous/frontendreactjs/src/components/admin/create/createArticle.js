import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { StoreProvider, StoreContext } from "../../../Providers/Store";

export default function createArticle(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const {tokenStore} = useContext(StoreContext);
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [dataUpdate, setDataUpdate] = useState("");

    const onSubmit = data => addArticle(data);
  
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

    function addArticle(data){
        fetch('http://127.0.0.1:3333/articles/addArticle', {
            method: 'POST',
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
                setDataUpdate(json.message)
                setTimeout(() => {
                    setDataUpdate("")
                }, 2000);
            })
        })
    }

    useEffect(()=>{
        allIngredients()
        allCategories()
    },[])

    return(
        <div>
            <h1 className="font-bold text-2xl flex justify-center">Ajouté un article</h1>
                {
                    dataUpdate ? <p className="font-bold text-sky-800">{dataUpdate}</p> : null
                }
            
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                    <input placeholder="nom" {...register("name", { required: true })} className="border-solid border-sky-500 border-2 text-sky-500"/>
                    {errors.name && <span>This field is required</span>}
                    
                    <input type="number" placeholder="prix" {...register("price", { required: true })} className="border-solid border-sky-500 border-2 text-sky-500"/>
                    {errors.price && <span>This field is required</span>}

                    <input placeholder="image"{...register("image", { required: true })} className="border-solid border-sky-500 border-2 text-sky-500"/>
                    {errors.image && <span>This field is required</span>}

                    <select {...register("categorie")} className="border-solid border-sky-500 border-2 cursor-pointer">
                        {
                            categories.map((categorie, index)=>{
                                return(
                                    <option key={index} value={categorie.id}>{categorie.name}</option>
                                )
                            })
                        }
                    </select>
                    
                   <div className="flex flex-wrap gap-2 overflow-auto">
                    {
                            ingredients.map((ingredient, index)=>{
                                return(
                                    <div key={index} className="flex flex-row gap-1 items-center">
                                        <input type="checkbox" {...register("ingredient")} value={ingredient.id}  className="cursor-pointer"/>
                                        <label id={ingredient.id}>{ingredient.name}</label>
                                    </div>
                                )
                            })
                        }
                   </div>

                    <input type="submit" className="border-solid border-sky-500 border-2 rounded text-sky-500 cursor-pointer hover:bg-sky-500 hover:text-sky-100 transition-colors"/>
                </form>
        </div>
    )
}