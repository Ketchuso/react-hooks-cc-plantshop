import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [ list, setList ] = useState([])
  const [ query, setQuery] = useState(""); 

  return (
	<main>
  		<NewPlantForm list={list} setList={setList}/>
  		<Search setQuery={setQuery}/>
  		<PlantList list={list} setList={setList} query={query} />
	</main>
  );
}


export default PlantPage;

