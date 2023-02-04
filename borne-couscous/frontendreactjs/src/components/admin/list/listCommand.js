import { useState, useEffect } from "react";

export default function listCommand(){
    const [commands, setCommands] = useState([])

    function allCommands(){
        fetch("http://127.0.0.1:3333/commands/allCommands").then((res)=>{
            res.json().then((json)=>{
                setCommands(json.data)
            })
        })
    }

    useEffect(()=>{
        allCommands()
    }, [])

    return(
        <div>
            <h1>Liste des commandes</h1>
            <div className="flex flex-wrap gap-2">
                {
                    commands.map((command, index) =>{
                        return(
                            <div key={index} className="flex flex-col gap-2 border-solid border-2 border-sky-500 rounded p-4 cursor-pointer hover:bg-sky-200">
                                <h1>Nom : { command.name }</h1>
                                <h4>Prix : { command.status }</h4>
                                <h4>Total : { command.total }</h4>
                                <h4>Borne N°: { command.user_id }</h4>
                                {
                                    command.articles.map((article, index) =>{
                                        return(
                                            <div key={index} className="flex flex-col gap-2 border-solid border-2 border-sky-500 rounded p-4 cursor-pointer hover:bg-sky-200">
                                                <h1>Nom : { article.name }</h1>
                                                <h4>Prix : { article.price }</h4>
                                                <h4>Ingrédients :</h4>
                                                {
                                                    article.ingredients.map((ingredient, index) =>{
                                                        return(
                                                            <div key={index}>
                                                                <h4>{ingredient.name}</h4>
                                                            </div>
                                                        )
                                                    })
                                                }
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
    )
}