import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";

function DestinationPage() {
    const { id } = useParams();
    console.log(id);
    const location = useLocation();
    console.log(location);

    const [destination, setDestination] = useState({})

    useEffect(()=> {
        fetch("http://localhost:3000/destinations" + id)
        .then((res)=> res.json())
        .then((data)=> setDestination(data) )
    })


    return (
    
        // after user clicks on initial card this page pops up with more info
    <div className="destination-detail-page">
        <div className="destination-detail">
            <img src={destination.image} alt={destination.name} />
            <div className="destination-detail-info">
                <h1>{destination.name}</h1>
                <p>{destination.continent}</p>
                <p>{destination.country}</p>
                <p>{destination.detail}</p>
                <button className="add-to-favorites">Add to Favorites</button>
            </div>

        </div>
    </div>
    );
}

export default DestinationPage;