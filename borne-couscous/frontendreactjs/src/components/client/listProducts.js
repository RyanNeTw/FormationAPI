import { useState, useEffect, useContext, useRef } from "react"

export default function ListProducts(){

    const [Products, setProducts] = useState([])
    const [ProductByCategories, setProductByCategories] = useState([])

    function allProducts(){
        fetch("http://127.0.0.1:3333/categories/allCategories").then((res)=>{
            res.json().then((json)=>{
                setProducts(json.data)
                console.log(json.data[0])
                setProductByCategories(json.data[0].articles)
            })
        })
    }

    function chooseProduct(data){
        if(data.length == 0){
            setProductByCategories([])
        }else{
            setProductByCategories(data)
        }
        console.log(data)
    }

    useEffect(()=>{
        allProducts()
    },[])

    return(
    <div className="flex">
        <div className="overflow-auto" style={{ maxHeight: "70vh", maxWidth: "20vw" }}>
            {
                Products.map((categorie, index)=>{
                    return(
                        <div className="p-4" key={index}>
                            <button className="bg-sky-500 p-12 rounded" onClick={(() => chooseProduct(categorie.articles))}>{categorie.name}</button>
                        </div>
                    )
                })
            }
        </div>
        <div className="overflow-auto" style={{maxHeight: "70vh", maxWidth: "70vw"}}>
            <div className="flex flex-wrap gap-4">
                {
                    ProductByCategories.map((product, index)=>{
                        return(
                            <div className="p-4 bg-sky-500 rounded" key={index}>
                                <h4 className="p-12">{product.name}</h4>
                                {
                                    product.ingredients.map((ingredient, index)=>{
                                        if(ingredient.name.toLowerCase() != product.name.toLowerCase()){
                                            return(
                                                <div key={index} className="">
                                                    <h4>{ingredient.name}</h4>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}