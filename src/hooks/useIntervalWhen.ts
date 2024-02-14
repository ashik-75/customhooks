import { useCallback, useEffect, useRef } from "react";

const useIntervalWhen = (
	cb: () => void,
	{ when, ms }: { when: boolean; ms: number }
) => {
	const cbRef = useRef(cb);
	const id = useRef<NodeJS.Timeout | null>(null);

	const handleClearInterval = useCallback(() => {
		if (id.current) {
			clearInterval(id.current);
		}
	}, []);
	useEffect(() => {
		if (when) {
			id.current = setInterval(() => {
				cbRef.current();
			}, ms);

			return handleClearInterval;
		}
	}, [handleClearInterval, when, ms]);
	return handleClearInterval;
};

export default useIntervalWhen;
