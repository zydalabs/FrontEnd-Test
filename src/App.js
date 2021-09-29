import React from "react";
import "./styles.css"
import {Countries} from "./components/Countries/Countries";
import {Filter} from "./components/Filter"



export const App = () => {

    return <div className="h-screen">
        <Filter/>
        <Countries/>
    </div>
}