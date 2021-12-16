import React, { useState } from "react";

function NewPlantForm({ onPostPlant }) {

  const [plantName, setPlantName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": plantName,
        "image": imgUrl,
        "price": parseInt(price)
      }),

    })
      .then(r => r.json())
      .then(newPlant => onPostPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button 
          type="submit"
        >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
