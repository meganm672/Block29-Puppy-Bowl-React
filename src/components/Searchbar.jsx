import React, { useEffect, useState } from "react";

export default function Searchbar (){
    const [data,setData] = useState([]);
    const [filterData,setFilterData]= useState([]);

    useEffect(()=>{
        async function searchApi(){
            try{
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players");
                const data = await response.json();
                console.log(data.data.players);
                setFilterData(data.data.players);
            }catch(e){
                console.error(e)
            }
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
        <div>
            <div>
                <input type="text" placeholder="Search Here..." onChange={e => handleFilter(e.target.value)}/>
            </div>
            <div>
                {data.map((data) => (
                    <div key={data.name}> 
                        {data.name}
                    </div>
                )) }
            </div>
        </div>
    )
}