import { createContext, useEffect, useState} from "react";
import {getMovies} from '../Api/Movies'
export const StoreContext = createContext()


export function StoreProvider(props){

    const [moviesArray, setMoviesArray] = useState([])
    const [moviesLength,  setMoviesLength] = useState("")

    function moviesList(){
        getMovies().then(values=>{
            setMoviesArray(values)
            setMoviesLength(values.length)
        })
    
    }

    useEffect(()=>{
        moviesList()
    },[])

    return(
        <StoreContext.Provider value={{moviesArray: moviesArray, setMoviesArray: setMoviesArray}}>
            {props.children}
        </StoreContext.Provider>
    )
}