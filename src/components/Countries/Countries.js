import React, {useEffect, useState} from "react";
import "./countries.styles.scss";
import {useCountriesApi} from "../../hooks/useCountriesApis";


export const Countries = ({ api }) => {

    const [ apiObject, setApiObject ] = useState();

    useEffect(() => {
        setApiObject(api);
    }, [api])

    return <div className={"py-16  grid grid-flow-row grid-cols-4 gap-x-24 gap-y-12 bg-gray-50"}>
        {useCountriesApi(apiObject).result.map((country) => {
            return <div key={country.cca2}
                        className="content-div  w-full rounded shadow-md max-w-sm">
                <div className="bg-white h-24">
                    <img src={country.flags.png} alt={`${country.name}`}
                         style={{"height": "100%", "width": "100%", "objectFit": "fill"}}/>
                </div>
                <div className="mb-8 mt-4 ml-4 h-auto">
                    {/*<span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>*/}
                    <div className={"font-semibold  text-base"}> {country.name.official}</div>
                    <div className={"font-light mt-2 "}>
                        <div className={"flex items-center"}>
                            <b className={"text-sm"}>Region:</b>
                            <div className={"text-xs ml-1"}>{country.region}</div>
                        </div>
                        <div className={"flex items-baseline "}>
                            <b className={"text-sm "}>Capital:</b>
                            <div className={"text-xs ml-1"}>{country.capital}</div>
                        </div>
                    </div>
                </div>
                {/*</div>*/}
                {/*<div className="absolute opacity-0 fd-sh group-hover:opacity-100">*/}
                {/*    <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span>*/}
                {/*    <div className="pt-8 text-center">*/}
                {/*        <button*/}
                {/*            className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn*/}
                {/*            more*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        })}
    </div>


}