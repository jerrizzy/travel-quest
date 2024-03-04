import React from "react";

function DestinationCard({ destination }) {

    return (
        <div  className="destination-card">
          <img src={destination.image} alt={"destination"} />
          <div className="destination-card-details">
            <h3>{destination.name}</h3>
            <h4>{destination.country}</h4>
            <button className="favorites" > Add To Favorites</button>
          </div>
        </div>
      );
}

export default DestinationCard