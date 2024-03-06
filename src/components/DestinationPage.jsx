import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Favorites from "./Favorites";

function DestinationPage() {
    const { id } = useParams();
    const [dest, setDest] = useState({})
    const { favorites, setFavorites } = useOutletContext();
    
    
    
    useEffect(()=> {
        fetch("http://localhost:3000/destinations/" + id)
        .then((res)=> res.json())
        .then((data)=> setDest(data) );
    }, []);

    function HandleClick() {
        let newFavorites = [...favorites, dest]
        setFavorites(newFavorites)
    }
    



    return (
    
        // after user clicks on initial card this page pops up with more info
    <div className="destination-detail-page">
        <div className="destination-detail">
            <img src={dest.image} alt={dest.name} />
            <div className="destination-detail-info">
                <h1>{dest.name}</h1>
                <p>{dest.continent}</p>
                <p>{dest.country}</p>
                <p>{dest.details}</p>
                <button onClick={HandleClick} className="add-to-favorites">Add to Favorites</button>
            </div>

        </div>
        
    </div>
    );
}

export default DestinationPage;