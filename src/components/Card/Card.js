/** @format */

import React from "react";

const Card = ({ author, download_url }) => {
	return (
		<div className='flex flex-col justify-center items-center w-full bg-white rounded '>
			<div className='relative p-2'>
				<img
					src={download_url}
					alt=''
					className=' h-60 w-60 rounded object-cover'
				/>
			</div>
			<div className='text-black font-medium bg-white'>{author}</div>
		</div>
	);
};

export default Card;
