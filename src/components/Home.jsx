import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="banner">
      <h1>Welcome to TravelQuest</h1>
      <p>Your ultimate destination for amazing destinations.</p>
      <a  href="/destinations"><button  className="bn632-hover bn19">Explore!</button></a>
    </div>
  );
}

export default Home;