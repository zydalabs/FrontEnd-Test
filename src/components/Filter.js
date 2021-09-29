import React from "react";
import {useState} from "react";
import clearIcon from "../../svg/delete.svg";

export const Filter = ({setFilter}) => {

    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    const [selection, setSelection] = useState(null);
    const [dropDownVisible, setDropDownVisible ] = useState(false)

    return <div className="right-0 absolute">
                <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                    <input value={selection ? selection : ''} name="select" id="select"
                           onChange={(e) => {
                               setSelection(e.target.value);
                               setDropDownVisible(true);
                           }}
                           className="px-4 appearance-none outline-none text-gray-800 w-full" checked/>

                    <button
                        onClick={() => setSelection(null)}
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
                        <img className="w-4 h-4 mx-2 fill-current" src={clearIcon}/>
                    </button>
                </div>
                <div
                    className={`absolute rounded shadow bg-white overflow-hidden ${dropDownVisible ? '' : 'hidden'} peer-checked:flex flex-col w-full mt-1 border border-gray-200`}>
                    <div className="cursor-pointer group">
                        {
                            selection && regions.filter((r) => r.toLowerCase().includes(selection.toLowerCase())).map((r) => {
                                return <a
                                    className="block p-2 border-transparent border-l-4 hover:border-blue-600 hover:bg-gray-100"
                                    onClick={() => {
                                        setSelection(r);
                                        setDropDownVisible(false)
                                        setFilter({ type:'region', key:r });
                                    }}
                                > {r}
                                </a>
                            })
                        }
                    </div>
                </div>
            </div>
}

