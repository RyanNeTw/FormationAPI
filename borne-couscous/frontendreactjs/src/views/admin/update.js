import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Providers/Store";

import UpdateArticle from "../../components/admin/update/updateArticle";
import UpdateCategorie from "../../components/admin/update/updateCategorie";
import UpdateIngredient from "../../components/admin/update/updateIngredient";

import Header from "../../components/header";

export default function update(){

    const { tokenStore } = useContext(StoreContext);

    return(
        <div>
            <Header />
            <Link to="/admin" className="underline hover:opacity-80">Retour</Link>
            {window.location.pathname.split("/")[2] === "article" ? <UpdateArticle /> : null}
            {window.location.pathname.split("/")[2] === "categorie" ? <UpdateCategorie /> : null}
            {window.location.pathname.split("/")[2] === "ingredient" ? <UpdateIngredient /> : null}
        </div>
    )
}