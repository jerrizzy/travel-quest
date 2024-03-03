


function DestinationCard() {

    return (
        <div  className="destination-card">
          <img src={""} alt={"destination"} />
          <div className="destination-card-details">
            <h3>{"Name"}</h3>
            <p>{"Details"}</p>
            <button className="add-to-favorites">Add to Favorites</button>
          </div>
        </div>
      );
}

export default DestinationCard