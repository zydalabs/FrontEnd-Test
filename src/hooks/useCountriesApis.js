import {useEffect, useState} from "react";

const axios = require('axios');


export const useCountriesApi = (apiObject) => {
    // console.log(apiObject, 'apiObject')
    const [result, setResult] = useState([]);


    const allCountries = () => {
        axios.get('https://restcountries.com/v3.1/all',
            {
                params: {
                    access_key: process.env.REACT_APP_COUNTRY_LAYER_API_KEY
                }
            }
        ).then((res) => {
            setResult(res.data);
        })
    }
    //https://restcountries.eu/data/afg.svg
    const searchByCriteria = () => {
        axios.get(`https://restcountries.com/v3.1/${apiObject.type}/${apiObject.key}`,
            {
                params: {
                    access_key: process.env.REACT_APP_COUNTRY_LAYER_API_KEY
                }
            }
        ).then((res) => {
            setResult(res.data);
        })
    }



    useEffect(() => {
        apiObject ? searchByCriteria() :  allCountries()   ;
    }, [apiObject])

    return {result}
}


