import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Favorites from "./Favorites";

function DestinationPage() {
    const { id } = useParams();
    const [dest, setDest] = useState({})
    const { favorites, setFavorites, setImage } = useOutletContext();
    
    const continents = {
        "Asia": "https://i.pinimg.com/564x/7f/2d/96/7f2d96104ffadeaaef28267d686d0459.jpg",
        "Australia": "https://i.pinimg.com/564x/87/92/ff/8792ffa946fe265495b31ea700fa6909.jpg",
        "Africa": "https://images.unsplash.com/photo-1559586616-361e18714958?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "South America": "https://i.pinimg.com/564x/50/83/6c/50836c26c6ecccfd8bc928fb946ea08d.jpg",
        "Antarctica": "https://i.pinimg.com/564x/78/26/4e/78264e892ed43c6fcf20c8cdffc87644.jpg",
        "North America": "https://i.pinimg.com/564x/2a/23/f6/2a23f6c7e1f63765d35f1348f6ee856d.jpg",
        "Carribean": "https://i.pinimg.com/564x/d9/6a/9a/d96a9a9ed96a57d332efb0655f7ef549.jpg",
        "Europe": "https://i.pinimg.com/564x/08/c7/1f/08c71f12ac3edbfb2161c485b82c4062.jpg"
    }
        
    
    
    useEffect(()=> {
        fetch("http://localhost:3000/destinations/" + id)
        .then((res)=> res.json())
        .then((data)=> {setDest(data)
        setImage(continents[data.continent])
        } );
    }, []);

    function HandleClick() {
        let newFavorites = [...favorites, dest]
        setFavorites(newFavorites)
    }

    return (
    
        // after user clicks on initial card this page pops up with more info
    <div className="destination-detail-page">
        <div className="destination-detail">
            {/* <div className="img-block" style={backStyle}></div> */}
            <div><img src={dest.image} alt={dest.name} /> </div>
            <div className="destination-detail-info">
                <h1> {dest.name}</h1>
                <p>{dest.continent}</p>
                <p>{dest.country}</p>
                <p>{dest.detail}</p>
                <button onClick={HandleClick} className="add-to-favorites">Add to Favorites</button>
            </div>

        </div>
        
    </div>
    );
}

export default DestinationPage;