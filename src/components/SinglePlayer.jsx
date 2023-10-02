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
    console.log(playerId)

    useEffect(()=>{
        async function fetchSinglePlayer(){
            try{
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/${playerId}`)
                const data = await response.json();
                console.log(data.data.player);
                setSinglePlayer(data.data.player);
            }catch(e){
                console.error(e)
                setError(e)
            }
        }
        fetchSinglePlayer();
    }, []) 
    return(
        <div>
            <h3>{singlePlayer.name}</h3>
            <p><img src={singlePlayer.imageUrl}></img></p>
            <p><b>Breed:</b> {singlePlayer.breed}</p>
            <p><b>Status:</b> {singlePlayer.status}</p>

            <button onClick={() => {handleRemove()}}> Delete Player</button>
        </div>
        )
}

export default SinglePlayer