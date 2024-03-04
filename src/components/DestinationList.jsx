import DestinationCard from "./DestinationCard";
import { useState } from 'react'


function DestinationList({ destinations }) {

  const [search, setSearch] = useState("")

  // this variable stores the search results from user
  // using filter method, and .name as the key we want from the server
  // we take the name key and converts the input we get from the user to lowercase and pass it into our search state
  const searchedResults = destinations.filter((result) => result.name.toLowerCase().includes(search.toLowerCase()))
  
  // this function updates search state by targetting the input value, i.e whatever the user enters
  // we use it in the input element with onChange event listener - line 25
  function handleSearch (e) {
    setSearch(e.target.value)
  }

  return (
    <div className="destination-list">
        
        <h1> Search for your next Destination</h1>
        <div className="search">
        <input onChange={handleSearch}
          type="text"
          placeholder="Search...."
          value={search}/>

          {searchedResults.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />))}
        
      </div>
    </div>
)



}
export default DestinationList