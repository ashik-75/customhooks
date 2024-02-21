import { useCallback, useLayoutEffect, useState } from "react";

const useWindowSize = (): [
	(x: number, y: number) => void,
	{ x: null | number; y: null | number }
] => {
	const [state, setState] = useState<Record<"x" | "y", null | number>>({
		x: null,
		y: null,
	});

	useLayoutEffect(() => {
		const handleCalculate = () => {
			console.log("Called");
			setState({
				x: window.scrollX,
				y: window.scrollY,
			});
		};
		window.addEventListener("scroll", handleCalculate);

		return () => {
			window.removeEventListener("scroll", handleCalculate);
		};
	}, []);

	const scrollTo = useCallback((x: number, y: number) => {
		window.scroll(x, y);
	}, []);

	return [scrollTo, state];
};

export default useWindowSize;
