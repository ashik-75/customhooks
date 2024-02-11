import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number): T => {
	const [state, setState] = useState<T>(value);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setState(value);
		}, delay);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [value, delay]);
	return state;
};

export default useDebounce;
