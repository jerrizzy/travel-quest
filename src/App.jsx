import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar'
import DestinationList from './components/DestinationList';
import Home from './components/Home'
import './App.css'
import NewDestination from './components/NewDestination';
function App() {
  const [count, setCount] = useState(0)
  

  

  return (
    <>
      <div className="app">
      <Navbar />
      <Home />
      <DestinationList />
      <NewDestination />
      </div>
      
      
      
    </>
  )
}

export default App
