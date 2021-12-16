import React, { useState } from "react";

function PlantCard({ plantData }) {

  const { id, image, name, price } = plantData
  const [inStock, setInStock] = useState(true)

  function handleClick(){
    setInStock(!inStock)
  }


  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
