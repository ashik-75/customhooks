import { useCallback, useSyncExternalStore } from "react";

const dispatchStorageEvent = (key: string) => {
	window.dispatchEvent(new StorageEvent("storage", { key }));
};

const subscribe = (callback: () => void) => {
	window.addEventListener("storage", callback);

	return () => {
		window.removeEventListener("storage", callback);
	};
};

const getItem = (cookieName: string) => {
	const cookie = document.cookie
		.split("; ")
		.find((row) => row.startsWith(`${cookieName}=`));

	if (cookie) {
		return cookie.split("=")[1];
	}

	return undefined;
};

const setItem = (name: string, value: string, day?: number) => {
	let expires = "";
	if (day) {
		const currentTime = new Date();
		currentTime.setTime(currentTime.getTime() + day * 60 * 60 * 1000);
		expires = `; expires=${currentTime.toUTCString()}`;
	}
	document.cookie = `${name}=${value}${expires}; path=/`;
	dispatchStorageEvent(name);
};

const deleteItem = (name: string) => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
	dispatchStorageEvent(name);
};

const useCookie = (cookieName: string) => {
	const getCookie = () => getItem(cookieName);
	const cookie = useSyncExternalStore(subscribe, getCookie);

	const deleteCookie = useCallback((name: string) => {
		deleteItem(name);
	}, []);

	const setCookie = useCallback((name: string, value: string, day?: number) => {
		setItem(name, value, day);
	}, []);

	return {
		cookie,
		deleteCookie: () => deleteCookie(cookieName),
		setCookie: (value: string, day?: number) =>
			setCookie(cookieName, value, day),
	};
};

export default useCookie;
