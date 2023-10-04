import React from "react";

//import Link from react-router-dom
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/" className="home">Home</Link>
            <h3>Puppy Bowl</h3>
        </div>
    )
}

export default Navbar