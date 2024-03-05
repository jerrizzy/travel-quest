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
  
  // fetching destinations from server
  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((resp) => resp.json())
      .then((data) => setDestinations(data))
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container">
      <Outlet context={{ destinations, setDestinations, favorites, setFavorites}} />

      </div>
      
    </div>
  )
}

export default App
