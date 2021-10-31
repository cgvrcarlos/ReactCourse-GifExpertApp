import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

	const [categories, setCategories] = useState(['House MD']);

	//const handleAdd = () => setCategories( ['Rick And Morty', ...categories] );
	//const handleAdd = () => setCategories( catgs => ['Rick And Morty', ...categories] );

	return(
		<>
			<h1>G i f E x p e r t A p p </h1>
			<CategoryAdd setCategories = { setCategories } />
			<hr />

			<ol>
				{
					categories.map( category =>
						<GifGrid
							key = { category } 
							category = { category } 
						/>
					)
				}
			</ol>
		</>
	);

};

export default GifExpertApp;