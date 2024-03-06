import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function DestinationCard({ destination }) {
    const navigate = useNavigate();
    
    function handleClick() {
        navigate("/destinations/" + destination.id, {state: {destination: "destination"}})
    }

    return (
        <div onClick={handleClick}  className="destination-card">
          <img src={destination.image} alt={"destination"} />
          <div className="destination-card-details">
            <h3>{destination.name}</h3>
            <h4>{destination.country}</h4>
            <button className="favorites" > More Information</button>
          </div>
        </div>
      );
}

export default DestinationCard