import { useEffect, useRef, useState } from "react";

const throttle = (cb: () => void, ms: number) => {
	let lastTime = 0;

	return () => {
		const now = Date.now();

		if (now - lastTime >= ms) {
			cb();
			lastTime = Date.now();
		}
	};
};

const useIdle = (ms: number = 5000) => {
	const [isIdle, setIsIdle] = useState<boolean>(false);

	const timerRef = useRef<number | null>(null);

	useEffect(() => {
		const handleIdle = throttle(() => {
			setIsIdle(false);

			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			timerRef.current = window.setTimeout(() => {
				setIsIdle(true);
			}, ms);
		}, ms);

		window.addEventListener("mousemove", handleIdle);
		window.addEventListener("mousedown", handleIdle);
		window.addEventListener("scroll", handleIdle);
		window.addEventListener("wheel", handleIdle);
		window.addEventListener("resize", handleIdle);
		window.addEventListener("touchstart", handleIdle);
		document.addEventListener("visibilitychange", handleIdle);

		return () => {
			window.removeEventListener("mousemove", handleIdle);
			window.removeEventListener("mousedown", handleIdle);
			window.removeEventListener("scroll", handleIdle);
			window.removeEventListener("wheel", handleIdle);
			window.removeEventListener("resize", handleIdle);
			window.removeEventListener("touchstart", handleIdle);
			document.removeEventListener("visibilitychange", handleIdle);
		};
	}, [ms]);

	return isIdle;
};

export default useIdle;
