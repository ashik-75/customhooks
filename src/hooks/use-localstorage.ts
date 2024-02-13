import { useCallback, useEffect, useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
	window.addEventListener("storage", callback);

	return () => {
		window.removeEventListener("storage", callback);
	};
};

const dispatchStorageEvent = (key: string) => {
	window.dispatchEvent(new StorageEvent("storage", { key }));
};

const getItem = (key: string) => {
	return window.localStorage.getItem(key);
};

const setItem = <T>(key: string, value: T) => {
	const stringifyValue = JSON.stringify(value);
	window.localStorage.setItem(key, stringifyValue);
	dispatchStorageEvent(key);
};

const removeItem = (key: string) => {
	window.localStorage.removeItem(key);
	dispatchStorageEvent(key);
};

const useLocalStorage = <T>(key: string, initialValue?: T) => {
	const getSnapShot = () => getItem(key);
	const value = useSyncExternalStore(subscribe, getSnapShot);

	useEffect(() => {
		if (getItem(key) === undefined && typeof initialValue !== "undefined") {
			setItem(key, initialValue);
		}
	}, [initialValue, key]);

	const setValue = useCallback(
		(value: unknown) => {
			if (getItem(key) === null || getItem(key) === undefined) {
				removeItem(key);
			} else {
				setItem(key, value);
			}
		},
		[key]
	);
	return { value, setValue };
};

export default useLocalStorage;
