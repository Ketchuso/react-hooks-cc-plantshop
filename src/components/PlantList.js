import React, { useEffect } from "react";
import PlantCard from "./PlantCard";


function PlantList({list, setList}) {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(data => setList(data))
  }, [setList])


  return (
    <ul className="cards">{list.map((obj) => {
      return (
      <PlantCard
      key={obj.id}
      name={obj.name}
      image={obj.image}
      price={obj.price}
      />
      );
    })}</ul>
  );
}


export default PlantList;
