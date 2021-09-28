import React from "react";
import "./styles.css"
import {useCountriesApi} from "./hooks/useCountriesApis";
import {Countries} from "./Countries/Countries";


export const App = () => {

    return <div className="h-screen">
        {/*{console.log(useCountriesApi('all'))}*/}
        <Countries/>
    </div>
}