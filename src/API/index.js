import React from "react";



//fetch the players from the api
//   export async function fetchPlayers(){
//             try{
//                 const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players");
//                 const data = await response.json();
//                 console.log(data.data.players);
//             }catch(e){
//                 console.error(e)
//                 setError(e);
//             };
//         };

// export async function fetchSinglePlayer(){
//     try{
//         const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/${playerId}`)
//         const data = await response.json();
//         console.log(data.data.player);
//         setSinglePlayer(data.data.player);
//     }catch(e){
//         console.error(e)
//         setError(e)
//     }
// }

export const handleRemove = async (id) =>{
    if(window.confirm("Do you want to remove player?")){
        try{
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players/" + id,
            {
                method: 'DELETE',
            })
            const result = await response.json();
            console.log(result)
        }catch(e){
            console.error(e)
        }
    }
}