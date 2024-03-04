import DestinationCard from "./DestinationCard";


function DestinationList({ destinations}) {

return (
    <div className="destination-list">
        
        <h1> Search for your next Destination</h1>
        <div className="search">
        <input
          type="text"
          placeholder="Search...."/>

          {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />))}
        
      </div>
    </div>
)



}
export default DestinationList