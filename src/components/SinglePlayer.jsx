import React from "react";

//import useState and useEffect hook
import { useState, useEffect} from "react"

//import useParams from react-router-dom
import { useParams } from "react-router-dom";

// import { fetchSinglePlayer } from '../API/index'
import { handleRemove , fetchSinglePlayer } from "../API/index";

const SinglePlayer = () => {
    const [singlePlayer, setSinglePlayer] = useState({});
    const [error, setError] = useState(null);

    const params= useParams();

    const playerId = params.id
    console.log("player id", playerId)

    useEffect(()=>{
        async function fetchSinglePlayerData(playerId){
           const singlePlayerData = await fetchSinglePlayer(playerId);
           if( singlePlayerData instanceof Error){
                setError(singlePlayerData)
           }
           console.log("from the fetch single data" ,singlePlayerData)
           setSinglePlayer(singlePlayerData);
        }
        fetchSinglePlayerData(playerId);
    }, []) 
    return(
        <div className="singlePlayerContainer">
            <div className="singlePlayerCard">
                <div className="playerImageContainer">
                    <img src={singlePlayer.imageUrl} alt={singlePlayer.name} className="playerImage"></img>
                </div>
                <div className="playerDetails">
                    <h3>{singlePlayer.name}</h3>
                    <p><b>Breed:</b> {singlePlayer.breed}</p>
                    <p><b>Status:</b> {singlePlayer.status}</p>

                    <button onClick={() => {handleRemove(singlePlayer.id)}}> Delete Player</button>
                </div>
            </div>
        </div>
        )
}

export default SinglePlayer