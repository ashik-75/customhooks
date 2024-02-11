import { useEffect, useRef } from "react";

const useUnMount = (fn: () => void) => {
	const ref = useRef(fn);

	ref.current = fn;

	useEffect(() => {
		return () => {
			ref.current();
		};
	}, []);
};

export default useUnMount;
