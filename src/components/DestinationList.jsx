import DestinationCard from "./DestinationCard";
import { useOutletContext } from "react-router-dom";


function DestinationList({}) {
    const { destinations } = useOutletContext();

return (
    <div className="destination-list">
        <div className= "list-header">
        <h1>Find your next Destination</h1>
        <p>Search for a specific destination, or filter by the region you want to visit next</p>
        </div>

        <div className="search">
        <input
          type="text"
          placeholder="Search...."/>
        </div>
          
        
      
      
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
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />))}
          </div>

          <div className="new-destination-form">
          <h2>New Destination</h2>
          <form className="form " >
          <label for="name">Name:</label>
            <input  type="text" name="name" placeholder="Destination name" />
            <input  type="text" name="image" placeholder="Image URL" />
            <input  type="text" name="details" placeholder="Add Details" />
            <button type="submit">Add Destination</button>
          </form>
        </div>
      ;
    </div>
)



}
export default DestinationList