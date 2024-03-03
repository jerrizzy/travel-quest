import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

    return (
        <nav className="navbar">
          <h1 className="logo">TravelQuest</h1>
    
          <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
        </nav>
      );




}

export default Navbar;