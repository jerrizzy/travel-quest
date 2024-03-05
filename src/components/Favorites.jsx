import { useOutletContext } from "react-router-dom";


function Favorites() {
    const { favorites, setFavorites } = useOutletContext();
 return (
    <div className="favorites-div">
        <h1>Your Favorites</h1>
        <div className="favorite-list">
        {favorites.map((favorite, index)=> ( 
            <p key={index} >{favorite.name}</p>
        ))}
        </div>
    </div>

 )
}


export default Favorites