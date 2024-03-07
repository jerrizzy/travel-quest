import { useOutletContext } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


function Favorites() {
    const { favorites, setFavorites, destination, setImageBackground, imageBackground } = useOutletContext();
    const {id} = useParams()
    const navigate = useNavigate();

    // function handleClick() {
    //     navigate("/destinations/" + favorites.id, {state: {destination: "destination"}})
    // }

    setImageBackground("https://i.pinimg.com/564x/4d/d2/26/4dd226b45c83008a66d189e31bddf880.jpg")

 return (
    <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageBackground})`
        }} className="favorites-div">
        <h1>Favorites</h1>
        {/* <p>Click on one of your favorites to see more details</p> */}
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