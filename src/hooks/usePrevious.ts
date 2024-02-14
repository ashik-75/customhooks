import { useState } from "react";

const usePrevious = <T>(value: T) => {
	const [current, setCurrent] = useState<T>();
	const [previous, setPrevious] = useState<T>();

	if (value !== current) {
		setPrevious(current);
		setCurrent(value);
	}

	return previous;
};

export default usePrevious;
