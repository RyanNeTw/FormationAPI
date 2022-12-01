import { useState, useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../Store/Store";
import { Link } from "react-router-dom";

export default function listMovies(){

    const {moviesArray, setMoviesArray, moviesLength} = useContext(StoreContext)
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [link, setLink] = useState("")

    function removeMovie(id){
        moviesArray.splice(id, 1)
        setMoviesArray([...moviesArray])
    }

    function modifieMovie(id){
        moviesArray[id].title = title
        moviesArray[id].category = category
        moviesArray[id].image = link
        setMoviesArray([...moviesArray])
    }

    return(
        <div>
            <h1 class="flex justify-center text-3xl font-bold text-white">List movies {moviesLength}</h1>
            <Link to="/create" relative="path" class="text-1xl font-bold text-white underline">Create Movie</Link>
            <div class="flex flex-col m-4">
            {
                moviesArray.map((movie, index) => {
                    return(
                    <div class="w-full ">
                        <div class="flex flex-row gap-4 justify-between items-center border-b border-stale-500 py-2">
                          <input onChange={e => setTitle(e.target.value)} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={movie.title}></input>
                          <input onChange={e => setCategory(e.target.value)} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={movie.category}></input> 
                          <input onChange={e => setLink(e.target.value)} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={movie.image}></input> 
                          <button onClick={() => removeMovie(index)} class="flex-shrink-0 bg-slate-800 hover:bg-stale-600 border-stale-500 hover:border-stale-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                            Remove
                          </button>
                          <button onClick={() => modifieMovie(index)} class="flex-shrink-0 bg-slate-800 hover:bg-stale-600 border-stale-500 hover:border-stale-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                            Modifie
                          </button>
                        </div>
                      </div>
                    )
                })
            }
            </div>
        </div>
    )
}