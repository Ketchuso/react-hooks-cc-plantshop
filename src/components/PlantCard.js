import React, { useState } from "react";


function PlantCard({name, image, price}) {
	const [ stock, setStock ] = useState(true)
	
	function stockButton(){
		setStock(!stock)
	}

	return (
		<li className="card" data-testid="plant-item">
		<img src={image} alt={name} />
		<h4>{name}</h4>
		<p>Price: {price}</p>
		{stock ? (
			<button onClick={stockButton} className="primary">In Stock</button>
		) : (
			<button onClick={stockButton}>Out of Stock</button>
		)}
		</li>
	);
}


export default PlantCard;
