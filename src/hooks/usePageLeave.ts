import { useRef } from "react";
import useEventListener from "./use-eventlistener";

const usePageLeave = <T extends () => void>(cb: T) => {
	const ref = useRef<T>(cb);

	useEventListener("mouseout", () => {
		ref.current();
	});
};

export default usePageLeave;
