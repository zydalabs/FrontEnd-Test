import {useEffect, useState} from "react";

const axios = require('axios');


export const useCountriesApi = (apiName, param) => {
    const [result, setResult] = useState([])


    const allCountries = () => {
        axios.get('https://restcountries.com/v3.1/all',
            {
                params: {
                    access_key: process.env.REACT_APP_COUNTRY_LAYER_API_KEY
                }
            }
        ).then((res) => {
            setResult(res.data)
        })
    }
    //https://restcountries.eu/data/afg.svg
    const searchByName = (param) => {
        axios.get(`http://api.countrylayer.com/v2/name/${param}`,
            {
                params: {
                    access_key: process.env.REACT_APP_COUNTRY_LAYER_API_KEY
                }
            }
        ).then((res) => {
            setResult(res.data)
        })
    }

    const searchByFlag = (param) => {
        axios.get(`https://restcountries.eu/data/${param}.svg`,
            {
                params: {
                    access_key: process.env.REACT_APP_COUNTRY_LAYER_API_KEY
                }
            }
        ).then((res) => {
            setResult(res.data)
        })
    }


    useEffect(() => {
        switch (apiName) {
            case 'all':
                allCountries()
                break
            case 'name':
                searchByName(param)
                break
            case 'flag':
                searchByFlag(param)
                break


        }

    }, [apiName])

    return {result}
}


