import React from "react";
import {BsMoon} from "react-icons/bs"


export const Header = () => {
    return <nav className="flex px-5 py-4 bg-white justify-between shadow">


        <div className="flex items-center space-x-3 font-nunito font-semibold">
            Where in the World  ?
        </div>

        <div className="flex items-center space-x-3">
            <BsMoon/>
            <a className="block p-1">Dark Mode</a>
        </div>

    </nav>
}