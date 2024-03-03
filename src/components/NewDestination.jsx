

function NewDestination() {
    return (
        <div className="new-destination-form">
          <h2>New Destination</h2>
          <form >
            <input  type="text" name="name" placeholder="Destination name" />
            <input  type="text" name="image" placeholder="Image URL" />
            <input  type="text" name="details" placeholder="Add Details" />
            <button type="submit">Add Destination</button>
          </form>
        </div>
      );
}

export default NewDestination