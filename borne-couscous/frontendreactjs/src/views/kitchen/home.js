import { useState } from "react";
import { Link } from "react-router-dom";

import ListCommands from "../../components/kitchen/list/listCommands";

import Header from "../../components/header";

export default function Home(){


    return(
        <div>
            <Header/>
            <ListCommands />
        </div>
    )
}