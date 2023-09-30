import React from "react";

//import Link from react-router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/players/:id">Single Player</Link>
        </div>
    )
}

export default Navbar