import { useEffect, useState, useContext } from "react"
import { StoreContext} from "../../../Providers/Store"

import Timer from "../../timer/Timer";

export default function listCommands(){

    const [showModal, setShowModal] = useState(false);

    const {tokenStore, commands, setCommands} = useContext(StoreContext);

    function updateStatus(id){
        fetch('http://127.0.0.1:3333/commands/updateCommand/' + id, {
            method: 'PUT',
            headers:{
            'Content-Type':'application/json',
            'Authorization': "Bearer " + tokenStore
            }
        }).then((res) => {
            res.json().then((json) =>{
                console.log(json)
                setCommands(commands.filter((command) => command.id !== id))
            })
        })
    }

    useEffect(()=>{

    },[])

    return(
        <div>
            <h1 className="font-bold text-2xl flex justify-center">List Commandes</h1>
            <div className="flex flex-wrap gap-2">
                {
                    commands?.map((command, index)=>{
                        if(command.status == 0){
                        return(
                            <div key={index} className="flex flex-col gap-2 border-solid border-2 border-sky-500 rounded p-4">
                                <div className="flex flex-col">
                                    <h2 className="font-bold text-xl">Commande n°{command.id}</h2>
                                    <p>Client : {command.name}</p>
                                    <p>Total : {command.total}</p>
                                    <p>{command.created_at }</p>
                                    <Timer props={command.created_at}/>
                                    { command.status == 0 ? <button onClick={(()=>updateStatus(command.id))} className="border-solid border-sky-500 border-2 rounded text-sky-500 cursor-pointer hover:bg-sky-500 hover:text-sky-100 transition-colors">Completer</button> : null}
                                    {/* {showModal ? (
                                        <>
                                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                                <button onClick={(()=>updateStatus(command.id))} value={command.id} className="rounded p-4 bg-sky-900 hover:bg-sky-800 text-sky-200 font-bold w-40 h-24" style={{margin: "50vh 45vw"}}>Completer</button>
                                            </div>
                                        </>
                                    ) : null} */}
                                    <div className="flex flex-col gap-2">
                                        {
                                            command.articles.map((article, index)=>{
                                                return(
                                                    <div key={index} className="flex flex-col gap-2 border-solid border-2 border-sky-500 rounded p-4">
                                                        <p>Article : {article.name}</p>
                                                        {
                                                            article.ingredients.map((ingredient, index)=>{
                                                                return(
                                                                    <div key={index} className="flex flex-col gap-2 border-solid border-2 border-sky-500 rounded p-4">
                                                                        <p>Ingrédient : {ingredient.name}</p>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    })
                }
            </div>
        </div>
    )
}