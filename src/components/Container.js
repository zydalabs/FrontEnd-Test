import {Filter} from "./Filter";
import {Countries} from "./Countries/Countries";
import React, {useState} from "react";
import {Search} from "./Search";


export const Container = () => {

    const [apiCall, setApiCall] = useState(null);



    return <div className="h-screen px-16">
        <div className="mt-10 mb-10 bg-gray-50 relative">
            <div className="flex max-w-md mx-auto">
                <Search setFilter={setApiCall}/>
                <Filter setFilter={setApiCall}/>
            </div>
        </div>

        <Countries api={apiCall}/>
    </div>
}