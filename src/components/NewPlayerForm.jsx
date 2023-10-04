import React from "react";

//import useState from react
import { useState } from "react";

//import poseNewPlayer from api
import { postNewPlayer } from "../API";

const NewPlayerForm = () => {
    const [id, setId]= useState("");
    const [playerName, setPlayerName]= useState("");
    const [breed, setBreed]= useState("");
    const [imageUrl, setImageUrl]= useState("");
    const [status, setStatus]=useState("");
    const [error, setError]= useState("")


    function resetForm(){
        setId("");
        setPlayerName("");
        setBreed("");
        setImageUrl("");
        setStatus("");
        setError("");
    }

    async function handleSubmit(e){
        //prevent the browser from refreshing the page
        e.preventDefault();

        //read data directly from state
        console.log({id,name :playerName,breed,imageUrl,status});

        if(!error){
            const postPlayer= await postNewPlayer({id,name :playerName,breed,imageUrl,status})
        }
    }

    return(
        <div className="formContainer">
                <h2>Add New Player</h2>
                {error && <p>{error}</p>}
            <form className= "form" method="post" onSubmit={handleSubmit}>
                <label>
                    Id:{"  "}
                    <input
                        name="playerId"
                        value={id}
                        onChange={(e) =>setId(e.target.value)}
                    />
                </label>

                <label>
                    Name:{" "}
                    <input
                        name="playerName"
                        value={playerName}
                        onChange={(e) =>setPlayerName(e.target.value)}
                    />
                </label>

                <label>
                    Breed:{" "}
                    <input
                        name="breed"
                        value={breed}
                        onChange={(e) =>setBreed(e.target.value)}
                    />
                </label>

                <label>
                    Image:{" "}
                    <input
                        name="playerImage"
                        value={imageUrl}
                        onChange={(e) =>setImageUrl(e.target.value)}
                    />
                </label>

                <label>
                    Status:{" "}
                    <input
                        name="status"
                        value={status}
                        onChange={(e) =>setStatus(e.target.value)}
                    />
                </label>

                <button type="reset" onClick={resetForm}>Reset</button>
                <button disabled={error} type="submit">Submit</button>
            </form>
        </div>
        )
}

export default NewPlayerForm;