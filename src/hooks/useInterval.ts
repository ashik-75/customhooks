import { useCallback, useEffect, useRef } from "react";

const useInterval = (fnc: () => void, duration: number) => {
	const funcRef = useRef(fnc);
	const intervalId = useRef<number>();

	const stopInterval = useCallback(() => {
		clearInterval(intervalId.current);
	}, []);

	const startInterval = useCallback(() => {
		intervalId.current = window.setInterval(() => {
			console.log("Intervaling, ", new Date().toTimeString());
			if (funcRef.current) {
				funcRef.current();
			}
		}, duration);
	}, [duration]);

	useEffect(() => {
		startInterval();
		return () => {
			clearInterval(intervalId.current);
		};
	}, [duration, startInterval]);

	return { stopInterval, startInterval };
};

export default useInterval;
