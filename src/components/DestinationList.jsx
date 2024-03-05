import DestinationCard from "./DestinationCard";
import { useState } from 'react'
import { useOutletContext } from "react-router-dom";


function DestinationList({}) {
    const { destinations } = useOutletContext();


  const [search, setSearch] = useState("")

  // this variable stores the search results from user
  // using filter method, and .name as the key we want from the server
  // we take the name key and converts the input we get from the user to lowercase and pass it into our search state
  const searchedResults = destinations.filter((result) => result.name.toLowerCase().includes(search.toLowerCase()))
  
  // this function updates search state by targetting the input value, i.e whatever the user enters
  // we use it in the input element with onChange event listener - line 2521
  function handleSearch (e) {
    setSearch(e.target.value)
  }

  return (
    <div className="destination-list">
        <div className= "list-header">
        <h1>Find your next Destination</h1>
        <p>Search for a specific destination, or filter by the region you want to visit next</p>
        </div>

        <div className="search">
        <input onChange={handleSearch}
          type="text"
          placeholder="Search...."
          value={search}/>
          </div>

          {/* {searchedResults.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />))} */}

        
    
      
      <select id="continent-select">
  <option value="">Select a Continent</option>
  <option value="africa">Africa</option>
  <option value="asia">Asia</option>
  <option value="europe">Europe</option>
  <option value="north-america">North America</option>
  <option value="south-america">South America</option>
  <option value="australia">Australia</option>
  <option value="antarctica">Antarctica</option>
</select>
        
        
        <div className="card-holder">
        {searchedResults.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />))}
          </div>

          
      ;
    </div>
)



}
export default DestinationList