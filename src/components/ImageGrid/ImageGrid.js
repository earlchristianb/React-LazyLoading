/** @format */
import React from "react";
import Card from "../Card/Card";

const ImageGrid = ({ imageArray, nextPage }) => {
	const determineIfLast = (index) => {
		return index === imageArray?.length - 1;
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 justify-items-stretch  gap-4  w-5/6 h-5/6 md:w-4/6 overflow-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-500 hover:scrollbar-thumb-slate-600 scroll-smooth'>
			{imageArray?.map((image, index) => {
				return (
					<Card
						author={image?.author}
						download_url={image?.download_url}
						isLast={determineIfLast(index)}
						key={index}
						nextPage={nextPage}
					/>
				);
			})}
		</div>
	);
};

export default ImageGrid;
