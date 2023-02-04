import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function allArticles(){

    const [articles, setArticles] = useState("")

    useEffect(()=>{
        allArticles()
    },[])

    function allArticles(){
        fetch("http://127.0.0.1:3333/articles/allArticles").then((res)=>{
            res.json().then((json)=>{
                setArticles(json.data)
            })
        })
    }
}