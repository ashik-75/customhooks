import { RefObject, useEffect, useRef } from "react";

const useEventListener = <
	KW extends keyof WindowEventMap,
	KH extends keyof HTMLElementEventMap,
	KM extends keyof MediaQueryListEventMap,
	T extends HTMLElement | MediaQueryList = HTMLElement
>(
	eventName: KW | KH | KM,
	handler: (
		event:
			| WindowEventMap[KW]
			| HTMLElementEventMap[KH]
			| MediaQueryListEventMap[KM]
			| Event
			| MouseEvent
	) => void,
	target?: RefObject<T>,
	options?: boolean | AddEventListenerOptions
) => {
	const savedhandler = useRef(handler);
	useEffect(() => {
		const targetElement = target?.current ?? window;

		if (!(targetElement && targetElement.addEventListener)) return;

		const listener = (event: Event) => {
			savedhandler.current(event);
		};

		targetElement.addEventListener(eventName, listener, options);

		return () => {
			targetElement.removeEventListener(eventName, listener, options);
		};
	}, [eventName, options, target]);
};

export default useEventListener;
