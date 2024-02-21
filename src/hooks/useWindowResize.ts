import { useCallback, useLayoutEffect, useState } from "react";

const useWindowResize = () => {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});

	const handleResize = useCallback(() => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}, []);

	useLayoutEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return size;
};

export default useWindowResize;
