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
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({id,playerName,breed,imageUrl,status}),
                });
                const result= await response.json();
                console.log(result.data);
            }catch(e){
                console.error(e);
                setError(e.message);
            }
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
                        value={id}
                        onChange={(e) =>setId(e.target.value)}
                    />
                </label>

                <br />
                <br />

                <label>
                    Name:{" "}
                    <input
                        value={playerName}
                        onChange={(e) =>setPlayerName(e.target.value)}
                    />
                </label>

                <br />
                <br />

                <label>
                    Breed:{" "}
                    <input
                        value={breed}
                        onChange={(e) =>setBreed(e.target.value)}
                    />
                </label>

                <br />
                <br />

                <label>
                    Image:{" "}
                    <input
                        value={imageUrl}
                        onChange={(e) =>setImageUrl(e.target.value)}
                    />
                </label>

                <br />
                <br />

                <label>
                    Status:{" "}
                    <input
                        value={status}
                        onChange={(e) =>setStatus(e.target.value)}
                    />
                </label>

                <br />
                <br />

                <button type="reset" onClick={resetForm}>Reset</button>
                <button disabled={error} type="submit">Submit</button>
            </form>
        </div>
        )
}

export default NewPlayerForm