import React from "react";
import "./countries.styles.scss"
import {useCountriesApi} from "../hooks/useCountriesApis";

const c = [
    {
        "name": "Afghanistan",
        "topLevelDomain": [
            ".af"
        ],
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "callingCodes": [
            "93"
        ],
        "capital": "Kabul",
        "altSpellings": [
            "AF",
            "Afġānistān"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "population": 27657145,
        "latlng": [
            33,
            65
        ],
        "demonym": "Afghan",
        "area": 652230,
        "gini": 27.8,
        "timezones": [
            "UTC+04:30"
        ],
        "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
        ],
        "nativeName": "افغانستان",
        "numericCode": "004",
        "currencies": [
            {
                "code": "AFN",
                "name": "Afghan afghani",
                "symbol": "؋"
            }
        ],
        "languages": [
            {
                "iso639_1": "ps",
                "iso639_2": "pus",
                "name": "Pashto",
                "nativeName": "پښتو"
            },
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "Oʻzbek"
            },
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "Türkmen"
            }
        ],
        "translations": {
            "br": "Afeganistão",
            "de": "Afghanistan",
            "es": "Afganistán",
            "fa": "افغانستان",
            "fr": "Afghanistan",
            "hr": "Afganistan",
            "it": "Afghanistan",
            "ja": "アフガニスタン",
            "nl": "Afghanistan",
            "pt": "Afeganistão"
        },
        "flag": "https://restcountries.eu/data/afg.svg",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "AFG"
    }
]


export const Countries = () => {

    console.log(useCountriesApi('all').result[0])
//shadow-lg group justify-center items-center    mx-auto container   rounded-md bg-white  max-w-sm flex  content-div
    return <div className={"py-8 px-8 grid grid-flow-row grid-cols-6 gap-16"}>
        {useCountriesApi('all').result.map((country) => {
            return <div className="content-div" key={country.cca2}>
                <div className="grid grid-flow-col grid-cols-1 grid-rows-2 h-full">
                    {/*<div>*/}
                    <div className="bg-red-50">
                            <img src={country.flags.png} alt="React Logo" style={{"height": "100%", "object-fit": "fill"}}/>
                        {/*upfla lkfh ahfjka hjkfhajkdfhkjadf kajkf hjkahdfk jah skjdfhakjsdfhakjhdfk*/}
                    </div>
                    <div className="bg-black">
                        {/*<span className="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>*/}
                        <div>Region: {country.region}</div>
                        <div>Capital: {country.capital}</div>
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

            </div>
        })}
    </div>


}