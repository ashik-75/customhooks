import { useEffect, useState } from "react";

const useVisibilityChange = () => {
	const [visibility, setVisibility] = useState(document.visibilityState);

	useEffect(() => {
		const handleVisibilityChange = () => {
			setVisibility(document.visibilityState);
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);

	return visibility === "visible";
};

export default useVisibilityChange;
