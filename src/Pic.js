import React from 'react';
const Pic = (props) => {
	return(

		<div className="pic">
			{props.searchImages.map(imageData => (
				<img src={imageData.url} alt={imageData.description} key = {imageData.url}/>
			))}
		</div>

	)
};

export default Pic;