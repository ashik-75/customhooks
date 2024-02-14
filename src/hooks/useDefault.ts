import { useState } from "react";

const useDefault = <T>(initialValue: T, defaultValue: T) => {
	const [state, setState] = useState(initialValue);

	if (!state) {
		setState(defaultValue);
	}
	return [state, setState];
};

export default useDefault;
