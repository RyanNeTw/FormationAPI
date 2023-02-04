import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { StoreProvider, StoreContext } from "../../../Providers/Store";

export default function createIngredient(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const {tokenStore} = useContext(StoreContext);
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [dataUpdate, setDataUpdate] = useState("");

    const onSubmit = data => addIngredient(data);

    function addIngredient(data){
        fetch('http://127.0.0.1:3333/ingredients/addIngredient', {
            method: 'POST',
            headers:{
            'Content-Type':'application/json',
            'Authorization': "Bearer " + tokenStore
            }, 
            body: JSON.stringify({
                name: data.name,
                stock: data.stock
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

    return(
        <div>
            <h1 className="font-bold text-2xl flex justify-center">Ajouté un ingredient</h1>
            {
                    dataUpdate ? <p className="font-bold text-sky-800">{dataUpdate}</p> : null
                }
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                <input placeholder="name" {...register("name")} className="border-solid border-sky-500 border-2 text-sky-500" />
                {errors.name && <span>This field is required</span>}

                <input placeholder="stock" type="number" {...register("stock")} className="border-solid border-sky-500 border-2 text-sky-500" />
                {errors.stock && <span>This field is required</span>}
                
                <input type="submit" className="border-solid border-sky-500 border-2 rounded text-sky-500 cursor-pointer hover:bg-sky-500 hover:text-sky-100 transition-colors" />
            </form>
        </div>   
    )
}