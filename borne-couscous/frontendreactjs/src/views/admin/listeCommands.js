import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Providers/Store";

import Header from "../../components/header";
import ListCommand from "../../components/admin/list/listCommand";

export default function ListeCommands(){

    const { tokenStore } = useContext(StoreContext);

    return(
        <div>
            <Header />
            <Link to="/admin">Retour</Link>
            <ListCommand />
        </div>
    )
}