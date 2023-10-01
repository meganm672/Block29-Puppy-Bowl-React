import React from "react";

import { useState } from "react";

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
        console.log({id,playerName,breed,imageUrl,status});

        if(!error){
            try{
                //send data to the server with fetch
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players",{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id,playerName,breed,imageUrl,status}),
                })
                const result= await response.json();
                console.log(result);
            }catch(e){
                console.error(e);
                setError(e.message);
            }
        }
    }
    return(
        <form method="post" onSubmit={handleSubmit}>
            <h2>Add New Player</h2>
            {error && <p>{error}</p>}
            <lable>
                Id:{"  "}
                <input
                    value={id}
                    onChange={(e) =>setId(e.target.value)}
                />
            </lable>

            <br />
            <br />

            <lable>
                Name:{" "}
                <input
                    value={playerName}
                    onChange={(e) =>setPlayerName(e.target.value)}
                />
            </lable>

            <br />
            <br />

            <lable>
                Breed:{" "}
                <input
                    value={breed}
                    onChange={(e) =>setBreed(e.target.value)}
                />
            </lable>

            <br />
            <br />

            <lable>
                Image:{" "}
                <input
                    value={imageUrl}
                    onChange={(e) =>setImageUrl(e.target.value)}
                />
            </lable>

            <br />
            <br />

            <lable>
                Status:{" "}
                <input
                    value={status}
                    onChange={(e) =>setStatus(e.target.value)}
                />
            </lable>

            <br />
            <br />

            <button type="reset" onClick={resetForm}>Reset</button>
            <button disabled={error} type="submit">Submit</button>
        </form>
        )
}

export default NewPlayerForm