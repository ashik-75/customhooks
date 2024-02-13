import { useEffect, useRef, useState } from "react";

const useRetry = <T>(fn: () => T, duration: number, max: number) => {
	const [state, setState] = useState<T>();
	const functionRef = useRef(fn);

	useEffect(() => {
		let count = 1;
		const id = window.setInterval(async () => {
			try {
				const output = await functionRef.current();
				if (output) {
					clearInterval(id);
					setState(output);
				} else if (count >= max) {
					clearInterval(id);
				} else {
					count++;
				}
			} catch (error) {
				if (count >= max) {
					clearTimeout(id);
				}
				count++;
			}
		}, duration);

		return () => {
			clearInterval(id);
		};
	}, [max, duration]);
	return state;
};

export default useRetry;
