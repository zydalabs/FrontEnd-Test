import React, {useState} from "react";

export const Search = ({setFilter}) => {

    const [search, setSearch] = useState('');
    const [timeout, setTimeOut] = useState(null)
    return <div className="flex flex-wrap justify-between md:flex-row left-0 absolute">
        <input type="search"
               value={search}
               name="query"
               onChange={(e) => {
                   setSearch(e.target.value);
                   if (timeout) {
                       clearTimeout(timeout);
                   }

                   setTimeOut(setTimeout(() => {
                       setFilter({type: 'name', key: e.target.value});
                   }, 500));
               }}
               placeholder="Search by name"
               className="w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg lg:w-20 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"/>
    </div>
}