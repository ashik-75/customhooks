import { useCallback, useState } from "react";

const useObjectState = <T>(
	defaultState: T
): [T, (value: Partial<T>) => void] => {
	const [state, setState] = useState<T>(defaultState);

	const updateValue = useCallback((value: Partial<T>) => {
		setState((prev) => ({ ...prev, ...value }));
	}, []);
	return [state, updateValue];
};

export default useObjectState;
