import React from "react";

//import useState and useEffect hook
import { useState, useEffect} from "react"
//import useNavigate hook
import { useNavigate } from "react-router-dom";

import { fetchPlayers } from '../API/index'

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() =>{
        async function fetchPlayerData(){
         const playerData = await fetchPlayers();
         if(playerData instanceof Error){
            setError(playerData);
         }
         setPlayers(playerData);
        }
        fetchPlayerData();
    },[]);

    return(
       <div className="playerContainer">
        {error && !players && (<p> Failed to load players from roster</p>)}
       { players 
       ?(
        players.map((player)=>{
            return(
                <div key={player.name} className="playerCard">
                    <div className="playerImageContainer">
                        <img src={player.imageUrl} alt={player.name} className="playerImage"></img>
                    </div>
                    <div className="playerDetails">
                        <h3>{player.name}</h3>
                        <p><b> Breed: </b>{player.breed}</p>
                        <p> <b>Status: </b>{player.status}</p>
                        <button onClick={()=> navigate("/players/" + player.id)} >Player Info</button>
                    </div>
                </div>
            )
        })) : !error && <p>Loading ...</p>
       }
       </div>

    )
        
}

export default AllPlayers