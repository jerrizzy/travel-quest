import { useOutletContext } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


function Favorites() {
    const { favorites, setFavorites, destination } = useOutletContext();
    const {id} = useParams()
    const navigate = useNavigate();

    // function handleClick() {
    //     navigate("/destinations/" + favorites.id, {state: {destination: "destination"}})
    // }

 return (
    <div className="favorites-div">
        <h1>Your Favorites</h1>
        <p>Click on one of your favorites to see more details</p>
        <div className="favorite-list">
        {favorites.map((favorite, index)=> ( 
            <div onClick={()=>{navigate("/destinations/" + favorite.id, {state: {favorite: "favorite"}})}} key={index}>
            <img src={favorite.image} alt={"destination"} />
              <h3>{favorite.name}</h3>
              <h4>{favorite.country}</h4>
              </div>
        ))}
        
    </div>
    </div>

 )
}


export default Favorites