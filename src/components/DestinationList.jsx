import DestinationCard from "./DestinationCard";


function DestinationList() {

return (
    <div className="destination-list">
        
        <h1> Search for your next Destination</h1>
        <div className="search">
        <input
          type="text"
          placeholder="Search...."
          
        />
        <DestinationCard />
      </div>
    </div>
)



}
export default DestinationList