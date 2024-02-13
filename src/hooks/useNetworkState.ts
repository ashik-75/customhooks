import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
	window.addEventListener("online", callback);
	window.addEventListener("offline", callback);

	return () => {
		window.removeEventListener("online", callback);
		window.removeEventListener("offline", callback);
	};
};

const getSnapShot = () => {
	return navigator.onLine;
};

const useNetworkState = () => {
	const state = useSyncExternalStore(subscribe, getSnapShot);
	return state;
};

export default useNetworkState;
