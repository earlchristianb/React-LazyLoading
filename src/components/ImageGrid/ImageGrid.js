/** @format */

import React from "react";

const ImageGrid = ({ imageArray }) => {
	return (
		<div className='grid grid-cols-2 justify-items-stretch  gap-4 bg-red-300 w-full h-5/6 md:w-4/6 overflow-auto scroll-smooth scroll-p-3'>
			{imageArray.map((image, index) => (
				<div
					className='border border-black flex justify-center items-center h-32'
					key={index}>
					<p>{image.id}</p>
				</div>
			))}
		</div>
	);
};

export default ImageGrid;
