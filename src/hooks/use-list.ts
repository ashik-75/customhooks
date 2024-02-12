import { useCallback, useState } from "react";

const useList = <T extends { id: number | string }>() => {
	const [list, setList] = useState<T[]>([]);

	const addToList = useCallback((info: T) => {
		setList((prev) => [...prev, info]);
	}, []);

	const removeFromList = useCallback((id: number | string) => {
		setList((prev) => prev.filter((lItem) => lItem.id !== id));
	}, []);

	const removeAllFromList = useCallback(() => {
		setList([]);
	}, []);
	1;
	const updateItemToList = useCallback((id: number | string, element: T) => {
		setList((prev) => prev.map((i) => (i.id === id ? element : i)));
	}, []);
	return {
		list,
		addToList,
		removeFromList,
		removeAllFromList,
		updateItemToList,
	};
};

export default useList;
