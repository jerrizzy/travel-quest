import { useState } from "react";


function NewDestination({ destinations, setDestinations}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [country, setCountry] = useState("")
  const [details, setDetails] = useState("")
  const [continent, setContinent] = useState("")

  function handleSubmit (e) {
    e.preventDefault()
    let newDestination = {name, image, country, details, continent, likes: 1}

    fetch("http://localhost:3000/destinations", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newDestination),
    })
    .then((resp) => resp.json())
    .then((data) => setDestinations([...destinations, data]))
  }

    return (
        <div className="new-destination-form">
          <h2>New Destination</h2>
          <form onSubmit={handleSubmit} >
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Destination name" value={name} />
            <input onChange={(e)=> setImage(e.target.value)} type="text" name="image" placeholder="Image URL" value={image} />
            <input onChange={(e)=> setCountry(e.target.value)} type="text" name="country" placeholder="Country name" value={country} />
            <input onChange={(e)=> setDetails(e.target.value)} type="text" name="details" placeholder="Country detail" value={details} />
            <input onChange={(e)=> setContinent(e.target.value)} type="text" name="continent" placeholder="Continent" value={continent} />
            <button type="submit">Add Destination</button>
          </form>
        </div>
      );
}

export default NewDestination