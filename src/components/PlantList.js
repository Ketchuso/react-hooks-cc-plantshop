import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ list, setList, query }) {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => setList(data));
  }, [setList]);

  const filteredList = query
    ? list.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
    : list;

  return (
    <ul className="cards">
      {filteredList.map((obj) => (
        <PlantCard key={obj.id} name={obj.name} image={obj.image} price={obj.price} />
      ))}
    </ul>
  );
}

export default PlantList;