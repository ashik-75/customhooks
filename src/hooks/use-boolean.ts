import { useCallback, useState } from "react";

const useBoolean = () => {
	const [value, setValue] = useState<boolean>(false);
	const setTrue = useCallback(() => {
		setValue(true);
	}, []);

	const setFalse = useCallback(() => {
		setValue(false);
	}, []);

	const toggle = useCallback(() => {
		setValue((prev) => !prev);
	}, []);
	return { value, setValue, toggle, setTrue, setFalse };
};

export default useBoolean;
