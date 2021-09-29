import {Filter} from "./Filter";
import {Countries} from "./Countries/Countries";
import React, {useState} from "react";


export const Container = () => {

    const [apiCall, setApiCall] = useState(null);


    return <div className="h-screen">
        <Filter setFilter={setApiCall}/>
        <Countries api={apiCall}/>
    </div>
}