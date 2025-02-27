import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [ list, setList ] = useState([])


  return (
	<main>
  	<NewPlantForm />
  	<Search />
  	<PlantList list={list} setList={setList}/>
	</main>
  );
}


export default PlantPage;

