import { useState, useEffect, useContext, useRef } from "react"
import { set } from "react-hook-form";
import { StoreContext } from "../../Providers/Store"
const _ = require('lodash');
   

export default function ListProducts(){

    const [showModal, setShowModal] = useState(false);
    const [Products, setProducts] = useState([])
    const [produtModal, setProductModal] = useState([])
    const [productCart, setProductCart] = useState([])
    const [ProductByCategories, setProductByCategories] = useState([])
    const {setCart, cart, products, setTotal, total} = useContext(StoreContext)

    function chooseProduct(data){
        if(data.length == 0){
            setProductByCategories([])
        }else{
            setProductByCategories(data)
        }
        console.log(data)
    }

    function addToCart(){
        setCart([...cart, produtModal])
        setShowModal(false)
        console.log(produtModal)
        setTotal(total + produtModal.price)
    }

    function removeIngredient(product ,index){
        let productFunction = _.cloneDeep(product)
        productFunction.ingredients.splice(index, 1)
        setProductModal(productFunction)
    }

    useEffect(()=>{
        setProductByCategories(products[0]?.articles)

    },[])

    return(
    <div className="flex">
        <div className="overflow-auto" style={{ maxHeight: "60vh", maxWidth: "20vw" }}>
            {
                products.map((categorie, index)=>{
                    return(
                        <div className="p-4" key={index}>
                            <button className="bg-sky-500 p-12 rounded" onClick={(() => chooseProduct(categorie.articles))}>{categorie.name}</button>
                        </div>
                    )
                })
            }
        </div>
        <div className="overflow-auto" style={{maxHeight: "60vh", maxWidth: "70vw"}}>
            <div className="flex flex-wrap gap-4">
                {
                    ProductByCategories?.map((product, index)=>{
                        return(
                            <div className="p-4 bg-sky-500 rounded flex flex-col justify-end" key={index}>
                                <h4 className="p-12">{product.name} : {product.price}$</h4>
                                <img src={product.image} alt="" className="w-40 h-40" />
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
                                <button onClick={()=>{setShowModal(true), setProductModal(product)}} className="text-bold text-white border-solid border-white border-2 hover:bg-sky-400">Ajouter</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        {showModal ? (
            <>
             <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    {/*body*/}
                    <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
                <button onClick={() => setShowModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                        <h2 className="text-2xl font-semibold text-white dark:text-gray-100">{produtModal.name}</h2>
                        <ul>
                            {
                                produtModal.ingredients.map((ingredient, index)=>{
                                    if(ingredient.name.toLowerCase() != produtModal.name.toLowerCase()){
                                        return(
                                         <div key={index} className="flex flex-row gap-2">
                                            <li  className="text-sm text-gray-400 dark:text-gray-300">{ingredient.name}</li>
                                            <div>
                                                <button onClick={(()=>removeIngredient(produtModal, index))} className="text-sm text-gray-400 dark:text-gray-300 border-solid border-2 border-white hover:bg-white hover:text-black">-</button>
                                            </div>
                                         </div>
                                        )
                                    }
                                })
                            }
                        </ul>
                        <button onClick={(()=>addToCart(produtModal))} className="text-sm text-gray-400 dark:text-gray-300 p-2 border-solid border-2 border-white hover:bg-white hover:text-black">Ajouter au panier</button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
    </div>
    )
}