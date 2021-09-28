import {useEffect, useState} from "react";

const axios = require('axios');


export const useCountriesApi = (apiName)=>{
    const [result, setResult] = useState([])
   console.log("here")

    const allCountries = () => {
        axios.get('http://api.countrylayer.com/v2/all',
            {
                params: {
                    access_key: process.env.REACT_APP_COUNTRY_LAYER_API_KEY
                }
            }
        ).then((res) => {
            setResult(res.data)
        })
    }

    const search = (name) => {
        axios.get(`http://api.countrylayer.com/v2/name/${name}`,
            {
                params: {
                    access_key: process.env.REACT_APP_COUNTRY_LAYER_API_KEY
                }
            }
        ).then((res) => {
            console.log(res.data)
            setResult(res.data)
        })
    }

    useEffect(()=>{
        console.log(apiName, "######")
        switch (apiName) {
            case 'all':
             allCountries()
             break
            default:
             search(apiName)
        }

    }, [apiName])

    return {result}
}


