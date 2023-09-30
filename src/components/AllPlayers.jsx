import React from "react";

//import useState and useEffect hook
import { useState, useEffect} from "react"

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    
    useEffect(() =>{
        const fetchPlayers = async () =>{
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players");

            const players = await response.json();
            console.log(players);
            setPlayers(players);
        };
        
        fetchPlayers();
    },[])
    return(<h1>The Allplayers component</h1>)
}

export default AllPlayers