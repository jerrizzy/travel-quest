import DestinationCard from "./DestinationCard";
import { useState, useEffect} from 'react'
import { useOutletContext } from "react-router-dom";


function DestinationList() {
    const { destinations, setDestinations } = useOutletContext();
    const [search, setSearch] = useState("")
    const [showForm, setShowForm]= useState(false)
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [image, setImage] = useState("");
    const [details, setDetails] = useState("");
    const [addContinent, setAddContinent] = useState("");
    const [continent, setContinent] = useState("All")
    


    function HandleContinent(e) {
        setContinent(e.target.value)  }


    function HandleShowForm(){
        setShowForm((showForm)=> !showForm)
    }

    function HandleSubmit(e) {
        e.preventDefault()
        let newDest= {name, country, image, details, continent: addContinent , likes: 0}
        
        fetch("http://localhost:3000/destinations", {
      method: "POST",
      headers:{
        "content-type": "Application/json"
      },
      body: JSON.stringify(newDest)

    })
    .then(response => response.json())
    .then(data => setDestinations([... destinations, data]))
    }


  // this variable stores the search results from user
  // using filter method, and .name as the key we want from the server
  // we take the name key and converts the input we get from the user to lowercase and pass it into our search state
  const searchedResults = destinations.filter((result) => result.name.toLowerCase().includes(search.toLowerCase()))

  // here, we pass searchedResults in filteredDestination 
  let filteredDestinations = searchedResults.filter((d) => continent === "All" ? true : d.continent === continent);
  
  // this function updates search state by targetting the input value, i.e whatever the user enters
  // we use it in the input element with onChange event listener - line 2521
  function handleSearch (e) {
    setSearch(e.target.value)
    
  }

  return (
    <div  className="destination-list" >
        <div className= "list-header">
        <h1></h1>
        <p></p>
        <button className="add-button" onClick= {HandleShowForm} >Add a destination</button>
        </div>
        
        {showForm ? 
        <div className="form">
            <form onSubmit={HandleSubmit} className="new-destination-form">
            <input onChange={(e) => {setName(e.target.value);}} value= {name} type="text" name="name" placeholder="Enter a destination..."className="input-text"></input> 
            <input onChange={(e) => {setCountry(e.target.value);}} value= {country} type="text" name="name" placeholder="Enter a country..."className="input-text"></input>  
            <input onChange={(e) => {setImage(e.target.value);}} value= {image} type="text" name="image" placeholder="Enter an image URL for your destination..." className="input-text" ></input> 
            <input onChange={(e) => {setDetails(e.target.value);}} value= {details} type="text" name="details" placeholder="Enter details about your destination" className="input-text"></input>
            <input onChange={(e) => {setAddContinent(e.target.value);}} value= {addContinent} type="text" name="details" placeholder="Enter Continent" className="input-text"></input>
            <input type="submit" name= "submit" value= "Create Your Destination" className="submit"></input>
            
            
            </form>

        </div> : null }
      <div className="seach-category-container">
        <div className="search">
        <input onChange={handleSearch}
          type="text"
          placeholder="Search...."
          value={search}/>
          </div>
    
      <div className="continent">
      <select id="continent-select" value={continent} onChange={HandleContinent}>
        
  <option value="All">Continent</option>
  <option value="Africa">Africa</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="North America">North America</option>
  <option value="South America">South America</option>
  <option value="Australia">Australia</option>
  <option value="Antarctica">Antarctica</option>
</select>
</div>
</div>
        
        <div className="card-holder">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />))}
          </div>

    </div>
)



}
export default DestinationList