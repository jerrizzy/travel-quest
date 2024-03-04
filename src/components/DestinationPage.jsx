import React from "react";

function DestinationPage() {
    return (
    
        // after user clicks on initial card this page pops up with more info
    <div className="destination-detail-page">
        <div className="destination-detail">
            <img src={placeholder} alt={placeholder} />
            <div className="destination-detail-info">
                <h1>destination name</h1>
                <p>continent</p>
                <p>country</p>
                <p>detail</p>
                <button className="add-to-favorites">Add to Favorites</button>
            </div>

        </div>
    </div>
    );
}

export default DestinationPage;