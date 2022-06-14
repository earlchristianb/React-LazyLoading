/** @format */

import "./App.css";
import { useEffect, useState } from "react";
import { getImages } from "./utils/services";

function App() {
	const [page, setPage] = useState(1);

	useEffect(() => {
		const getData = async () => {
			const images = await getImages(page);
			console.log(images);
		};
		//executes the function above
		getData();
	}, [page]);
	return <div className='text-blue-500'>hello</div>;
}

export default App;
