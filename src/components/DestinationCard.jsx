import React from "react";

function DestinationCard({ destination }) {

    return (
        <div  className="destination-card">
          <img src={destination.image} alt={"destination"} />
          <div className="destination-card-details">
            <h3>{destination.name}</h3>
            <p>{destination.country}</p>
          </div>
        </div>
      );
}

export default DestinationCard