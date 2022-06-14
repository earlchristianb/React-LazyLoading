/** @format */
import React, { useEffect, useRef } from "react";

const Card = ({ author, download_url, isLast, nextPage }) => {
	const cardRef = useRef();

	useEffect(() => {
		if (!cardRef?.current) {
			return;
		}
		const obs = new IntersectionObserver(
			([entry]) => {
				if (isLast && entry.isIntersecting) {
					console.log(entry.isIntersecting);
					nextPage();
					obs.unobserve(entry.target);
				}
			},
			{ rootMargin: "10px" }
		);
		obs.observe(cardRef.current);
	}, [cardRef, isLast, nextPage]);

	return (
		<div
			className='flex flex-col justify-center items-center w-full min-h-60 bg-white rounded mr-3 '
			ref={cardRef}>
			<div className='relative p-2  '>
				<img alt='' className=' h-60 w-60 rounded ' src={download_url} />
			</div>
			<div className='text-black font-medium bg-white'>{author}</div>
		</div>
	);
};

export default Card;
