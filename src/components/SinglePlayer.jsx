import React from "react";

//import useState and useEffect hook
import { useState, useEffect} from "react"

//import useParams from react-router-dom
import { useParams } from "react-router-dom";


const SinglePlayer = () => {
    const [player, setPlayer] =useState([]);
    const [error, setError] =useState(null);

    const params= useParams();

    const playerId = params.id

    useEffect(()=>{
        async function fetchSinglePlayer(){
            try{
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/${player}`)
                const data = await response.json();
                console.log(data)
                
            }catch(e){

                console.error(e)
            }
        }
        fetchSinglePlayer();
    }, [])
    return(<h1>hi</h1>)
}

export default SinglePlayer