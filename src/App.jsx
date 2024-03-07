import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar'
import DestinationList from './components/DestinationList';
import Home from './components/Home'
import './App.css'
import NewDestination from './components/NewDestination';


function App() {
  
  const [count, setCount] = useState(0)

  // state holding destinations
  const [destinations, setDestinations] = useState([]) 
  const [favorites, setFavorites] = useState([])

  const [image, setImage] = useState("src/assets/green_mountain_europe.jpeg")
  
  // fetching destinations from server
  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((resp) => resp.json())
      .then((data) => setDestinations(data))
  }, [])

  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
      backgroundBlendMode: "multiply",
      objectFit: "cover",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh"
      
      }} >
      <Navbar />
      <div className="container">
      <Outlet context={{ destinations, setDestinations, favorites, setFavorites, setImage}} />

      </div>
      
    </div>
  )
}

export default App
