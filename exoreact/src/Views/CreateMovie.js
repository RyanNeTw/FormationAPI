import { useState, useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../Store/Store";
import { Link } from "react-router-dom";
export default function createMovie(){
    
    const {moviesArray, setMoviesArray, moviesLength} = useContext(StoreContext)
    const [title, setTitle] =useState("")
    const [category, setCategory] = useState("")
    const [link, setLink] = useState("")

    function create(){
        moviesArray.push({id: moviesArray.length + 1, title: title, category: category, image: link})
        setMoviesArray([...moviesArray])
    }



    return(
        <div>  
            <h1 class="flex justify-center text-3xl font-bold text-white">List movies {moviesLength}</h1>
            <Link to="/" relative="path" class="text-1xl font-bold text-white underline">List Movies</Link>
            <div class="w-full max-w-sm">
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        title
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input onChange={e => setTitle(e.target.value)} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Title"></input>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Categorie
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input onChange={e => setCategory(e.target.value)} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Category"></input>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Image
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input onChange={e => setLink(e.target.value)} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Link"></input>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                    <button onClick={()=>create()} class="shadow bg-slate-800 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Create
                    </button>
                    </div>
                </div>
                </div>
        </div>
    )
}