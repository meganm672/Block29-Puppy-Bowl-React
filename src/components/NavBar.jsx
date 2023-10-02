import React from "react";

//import Link from react-router-dom
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Searchbar />
        </div>
    )
}

export default Navbar