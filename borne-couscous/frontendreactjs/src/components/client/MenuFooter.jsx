import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../Providers/Store";
import { useState, useEffect } from "react";

export default function MenuFooter(){
    const { cart, setCart, total, setTotal, name, tokenStore } = useContext(StoreContext);

    function removeProduct(index){
        setCart([...cart.slice(0, index), ...cart.slice(index + 1)])
        setTotal(total - cart[index].price)
    }

    function checkout(){
        console.log(cart)
        fetch('http://127.0.0.1:3333/commands/addCommand', {
            method: 'POST',
            headers:{
            'Content-Type':'application/json',
            'Authorization': "Bearer " + tokenStore
            }, 
            body: JSON.stringify({
            name: name,
            total: total,
            articles: cart
            })
        }).then((res) => {
            res.json().then((json) =>{
                console.log(json)
            })
        })
    }

useEffect(() => {
    checkout()
}, [])

    return(
        <div className="flex flex-row justify-between border-solid border-sky-500 border-t-2 pl-8 pr-8 pt-4 mt-8" style={{maxHeight:"28vh"}}>
            <div className="flex flex-col overflow-auto">
                <h4>Menu : </h4>
                {
                    cart?.map((product, index) => {
                        return(
                            <div key={index}>
                                <div className="flex flex-row justify-between">
                                    <p>- {product.name}</p>
                                    <button onClick={(()=>removeProduct(index))} className="text-red-500">X</button>
                                </div>
                                <ul className="flex flex-wrap gap-2">
                                {
                                    product.ingredients.map((ingredient, index) => {
                                        if(ingredient.name.toLowerCase() != product.name.toLowerCase()){
                                            return(
                                                <li key={index} className="">{ingredient.name}</li>
                                            )
                                        }
                                    })
                                }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <h4>Total : {total}</h4>
            <button onClick={(()=>checkout())} className="self-start border-solid border-2 border-sky-500 rounded p-4 text-sky-500 hover:bg-sky-500 hover:text-white">Panier</button>
        </div>
    )
}