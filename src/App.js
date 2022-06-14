/** @format */
import { useEffect, useState } from "react";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import { getImages } from "./utils/services";

function App() {
	const [page, setPage] = useState(1);
	const [images, setImages] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const imagesData = await getImages(page);
			console.log(imagesData);
			setImages((prevData) => [...prevData, ...imagesData]);
		};
		//executes the function above
		getData();
	}, [page]);

	const nextPage = () => {
		if (page > 10) return;
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<div className='text-white w-full bg-sky-500 h-screen flex justify-center items-center'>
			<ImageGrid imageArray={images} nextPage={nextPage} />
		</div>
	);
}

export default App;
