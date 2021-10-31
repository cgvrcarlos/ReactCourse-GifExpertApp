import React from 'react';
//import React, { useState, useEffect } from 'react';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

	// const [images, setImages] = useState([]);
	const {data:images, loading} = useFetchGifs( category );

	// useEffect( () => {
	// 	getGifs( category )
	// 		.then( setImages );
	// }, [ category ]);
	
	return (
		<>
			 <h3 className = "animate__animated animate__fadeInLeft">{ category }</h3>
			
			{ loading && <p className = " animate__animated animate__flash">LOADING</p> }

			<div className = "cardGrid">
				{
					images.map( img => (
						<GifGridItem 
							key = { img.id }
							{ ...img }
						/>
					))
				}
			</div>
		</>
	);
};
