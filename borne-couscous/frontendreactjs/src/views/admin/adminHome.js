import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import AllArticle from "../../components/admin/list/allArticle";
import AllCategories from "../../components/admin/list/allCategories";
import AllIngredients from "../../components/admin/list/allIngredients";

export default function adminHome() {
    return(
        <div>
            <Header />
            <div className="flex flex-row gap-4">
                <Link to="/admin/create" className="underline hover:opacity-80">Créer un élément</Link>
                <Link to="/admin/listeCommandes" className="underline hover:opacity-80">Liste des commandes</Link>
            </div>
            <AllCategories />
            <AllIngredients />
            <AllArticle />
        </div>
    )
}