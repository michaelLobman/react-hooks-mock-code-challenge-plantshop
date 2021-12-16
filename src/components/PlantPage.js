import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filter, setFilter] = useState("")



  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(plants => setPlants(plants))
  }, [])

  function handlePostPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  // function filterPlants(filter) {
  //   const updatedPlants = plants.filter(plant => plant.name.includes(filter))
  //   setPlants(updatedPlants)
  // }

  const displayedPlants = plants.filter(plant => plant.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    <main>
      <NewPlantForm onPostPlant={handlePostPlant} />
      <Search filter={filter} setFilter={setFilter}/>
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
