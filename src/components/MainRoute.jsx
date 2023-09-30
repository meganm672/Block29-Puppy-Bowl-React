import React from "react";

// import components from react router dom
import { Routes, Route } from "react-router-dom"

// import compoents from components folder
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";

const MainRoute = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<AllPlayers/>} />
                <Route path='/players/:id' element={<SinglePlayer />}/>
            </Routes>
        </div>
    )
}

export default MainRoute