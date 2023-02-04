import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StoreContext } from "../../../Providers/Store";

export default function UpdateCategorie(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { tokenStore } = useContext(StoreContext);

    const location = useLocation();

    const onSubmit = data => {updateCategorie(data), console.log(data)};

    const [dataUpdate, setDataUpdate] = useState("");

    function updateCategorie(data){
        fetch('http://127.0.0.1:3333/categories/updateCategories/' + location.state.id, {
            method: 'PUT',
            headers:{
            'Content-Type':'application/json',
            'Authorization': "Bearer " + tokenStore
            }, 
            body: JSON.stringify({
                name: data.name
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

    return(
        <div>
            {
                    dataUpdate ? <p className="font-bold text-sky-800">{dataUpdate}</p> : null
                }
             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                <input placeholder="name" defaultValue={location.state.name} {...register("name")} className="border-solid border-sky-500 border-2 text-sky-500" />
                {errors.name && <span>This field is required</span>}

                <input type="submit" className="border-solid border-sky-500 border-2 rounded text-sky-500 cursor-pointer hover:bg-sky-500 hover:text-sky-100 transition-colors" />
            </form>
        </div>
    )
}