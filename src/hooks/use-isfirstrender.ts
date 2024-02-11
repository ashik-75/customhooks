import { useRef } from "react";

const useIsFirstRender = () => {
	console.log("CALLED");
	const ref = useRef(true);

	if (ref.current) {
		ref.current = false;

		return true;
	}

	return ref.current;
};

export default useIsFirstRender;
