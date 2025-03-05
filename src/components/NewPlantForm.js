import React, { useState } from "react";

function NewPlantForm({list, setList}) {
  const [ newPlant, setNewPlant ] = useState({
    name: "",
    image: "",
    price: ""
  })

  function plantChange(event){
    const { name, value} = event.target;
    setNewPlant({
      ...newPlant,
      [name]: value
    })
  }


  function handleSubmit(event){
    event.preventDefault()

    const newPlantData = {
      name: newPlant.name,
      image: newPlant.image,
      price: parseFloat(newPlant.price)
    }

    fetch("http://localhost:6001/plants",{
      method: "POST",
      body: JSON.stringify(newPlantData),
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
      .then(resp => resp.json())
      .then(data => {
        setList([...list, data]);
        setNewPlant({
          name: "",
          image: "",
          price: ""
        })
      })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={plantChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={plantChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={plantChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
