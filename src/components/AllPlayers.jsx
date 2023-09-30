import React from "react";

//import useState and useEffect hook
import { useState, useEffect} from "react"

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] =useState(null);
    useEffect(() =>{
        async function fetchPlayers(){
            try{
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players");
                const playersData = await response.json();
                console.log(playersData);
                setPlayers(playersData);
            }catch(e){
                console.error(e)
                setError(e);
            };
        };
        fetchPlayers();
    },[]);

    return(
        <div>
            {error ? (
                <p>{error}</p>
            ):(

                players.map((player) =>{
                    return(
                        <div>
                            <h4>{player.name}</h4>
                            <p>{player.imageUrl}</p>
                            <p>{player.breed}</p>
                            <p>{player.stauts}</p>
                        </div>
                    )
                })
            )
            }
        </div>
    )
}

export default AllPlayers