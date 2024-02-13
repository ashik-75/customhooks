import { useCallback, useEffect, useSyncExternalStore } from "react";

const dispatchStorageEvent = (key: string) => {
	window.dispatchEvent(new StorageEvent("storage", { key }));
};

const getItem = (key: string) => {
	return window.sessionStorage.getItem(key);
};

const setItem = <T>(key: string, value: T) => {
	window.sessionStorage.setItem(key, JSON.stringify(value));
	dispatchStorageEvent(key);
};

const deleteItem = (key: string) => {
	if (getItem(key)) {
		window.sessionStorage.removeItem(key);
		dispatchStorageEvent(key);
	}
};

const subscribe = (callback: () => void) => {
	window.addEventListener("storage", callback);
	return () => {
		window.removeEventListener("storage", callback);
	};
};

const useSessionStorage = <T>(key: string, initialValue?: T) => {
	const getSnapShot = () => getItem(key);
	const value = useSyncExternalStore(subscribe, getSnapShot);

	const handleSetValue = useCallback(
		(value: T) => {
			setItem(key, value);
		},
		[key]
	);
	const handleDeleteValue = useCallback(() => {
		deleteItem(key);
	}, [key]);

	useEffect(() => {
		if (key && initialValue && !getItem(key)) {
			setItem(key, initialValue);
		}
	}, [key, initialValue]);

	return { value, handleSetValue, handleDeleteValue };
};

export default useSessionStorage;
