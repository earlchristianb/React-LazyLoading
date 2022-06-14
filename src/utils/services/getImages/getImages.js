/** @format */

export const fetchImages = async (page) => {
	const limit = 10;
	const result = await fetch(
		`https://picsum.photos/v2/list?page=${page}&limit=${limit}`
	);
	const images = await result.json();
	return images;
};
