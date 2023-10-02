import React from "react";

//import useState and useEffect hook
import { useState, useEffect} from "react"
//import useNavigate hook
import { useNavigate } from "react-router-dom";

// import { fetchPlayers } from '../API/index'

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] =useState(null);
    
    const navigate = useNavigate();

    useEffect(() =>{
        async function fetchPlayers(){
            try{
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players");
                const data = await response.json();
                console.log("from the allplayers",data.data.players);
                setPlayers(data.data.players)
            }catch(e){
                console.error(e)
                setError(e);
            };
        };

        // if(response instanceof Error){
        //     setError(response);
        // }
        // setPlayers(data.data.players);
        fetchPlayers();
    },[]);

    return(
       <div>
        {error && !players && (<p> Failed to load players from roster</p>)}
       { players 
       ?(
        players.map((player)=>{
            return(
                <div key={player.name}>
                    <h4>{player.name}</h4>
                    <p><img src={player.imageUrl}></img></p>
                    <p>{player.breed}</p>
                    <p>{player.status}</p>
                    <button onClick={()=> navigate("/players/" + player.id)} >Player Info</button>
                </div>
            )
        })) : !error && <p>Loading ...</p>
       }
       </div>

    )
        
}

export default AllPlayers