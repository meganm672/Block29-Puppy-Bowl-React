import React, { useEffect, useState } from "react";

import { searchApiCall } from "../API";

export default function Searchbar (){
    const [data,setData] = useState([]);
    const [filterData,setFilterData]= useState([]);

    useEffect(()=>{
        async function searchApi(){
            const searchResult = await searchApiCall();
            console.log("from search api", searchResult)
            setFilterData(searchResult);
        }
        searchApi();
    },[])

    const handleFilter = (value) =>{
        const result = filterData.filter(f => f.name.toLowerCase().includes(value))
        setData(result);
        if(value === ""){
            setData([]);
        }
    }
    return(
        <div className="searchTop">
            <div className="search">
                <label>
                   Search {" "} <input type="text" placeholder="Search Here..." onChange={e => handleFilter(e.target.value)}/>
                </label>
            </div>
            <div className="searchResult">
                {data.map((data) => (
                    <div key={data.name}> 
                        {data.name}
                    </div>
                )) }
            </div>
        </div>
    )
}