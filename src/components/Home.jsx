import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Home() {
  const {setImage} = useOutletContext()

  useEffect(() =>{
    setImage("src/assets/green_mountain_europe.jpeg")
  }, [])

  return (
    <div className="banner">
      <h1>Welcome to TravelQuest</h1>
      <p>Your ultimate destination for amazing destinations.</p>
      <a  href="/destinations"><button  className="bn632-hover bn19">Explore!</button></a>
    </div>
  );
}

export default Home;