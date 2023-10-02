import React from "react";

//import useState and useEffect hook
import { useState, useEffect} from "react"

//import useParams from react-router-dom
import { useParams } from "react-router-dom";

// import { fetchSinglePlayer } from '../API/index'
import { handleRemove } from "../API/index";

const SinglePlayer = () => {
    const [singlePlayer, setSinglePlayer] = useState({});
    const [error, setError] = useState(null);

    const params= useParams();

    const playerId = params.id
    console.log("player id", playerId)

    useEffect(()=>{
        async function fetchSinglePlayer(){
            try{
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/${playerId}`)
                const data = await response.json();
                console.log("from single fetch",data.data.player);
                setSinglePlayer(data.data.player);
            }catch(e){
                console.error(e)
                setError(e)
            }
        }
        fetchSinglePlayer();
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

                    <button onClick={() => {handleRemove()}}> Delete Player</button>
                </div>
            </div>
        </div>
        )
}

export default SinglePlayer