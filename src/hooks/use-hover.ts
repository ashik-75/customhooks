import { RefObject, useState } from "react";
import useEventListener from "./use-eventlistener";

const useHover = (target: RefObject<HTMLElement>) => {
	const [isHover, setIsHover] = useState(false);

	useEventListener("mouseenter", () => setIsHover(true), target);
	useEventListener("mouseleave", () => setIsHover(false), target);

	return isHover;
};

export default useHover;
