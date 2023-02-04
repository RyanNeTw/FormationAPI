import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { StoreProvider, StoreContext } from "../../../Providers/Store";

export default function createCategorie(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const {tokenStore} = useContext(StoreContext);

    const onSubmit = data => addCategorie(data);

    const [dataUpdate, setDataUpdate] = useState("")

    function addCategorie(data){
        fetch('http://127.0.0.1:3333/categories/addCategory', {
            method: 'POST',
            headers:{
            'Content-Type':'application/json',
            'Authorization': "Bearer " + tokenStore
            }, 
            body: JSON.stringify({
                name: data.name
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

    }, [])

    return(
        <div>
            <h1 className="font-bold text-2xl flex justify-center">Ajouté une catégorie</h1>
            {
                    dataUpdate ? <p className="font-bold text-sky-800">{dataUpdate}</p> : null
                }
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                <input placeholder="name" {...register("name")} className="border-solid border-sky-500 border-2 text-sky-500" />
                {errors.name && <span>This field is required</span>}
                
                <input type="submit" className="border-solid border-sky-500 border-2 rounded text-sky-500 cursor-pointer hover:bg-sky-500 hover:text-sky-100 transition-colors" />
            </form>
        </div>    
    )

}