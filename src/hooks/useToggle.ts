import { useCallback, useState } from "react";

const useToggle = () => {
	const [value, setValue] = useState(false);

	const toggle = useCallback(() => {
		setValue((prev) => !prev);
	}, []);
	return { value, setValue, toggle };
};

export default useToggle;
