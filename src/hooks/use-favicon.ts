import { useEffect, useRef } from "react";
import useUnmount from "./use-unmount";

const useFavicon = (src: string) => {
	const linkRef = useRef<HTMLLinkElement | null>(null);
	const defaultHref = useRef<string>("");

	useEffect(() => {
		const link = window.document.querySelector(
			`link[rel~="icon"]`
		) as HTMLLinkElement | null;

		if (link) {
			defaultHref.current = link.href;
			linkRef.current = link;
		}
	}, []);

	useEffect(() => {
		let link = linkRef.current;

		if (link) {
			link.href = src;
		} else {
			link = document.createElement("link");
			link.type = `image/x-icon`;
			link.rel = "icon";
			link.href = src;
			window.document.head.appendChild(link);
			linkRef.current = link;
		}
	}, [src]);

	useUnmount(() => {
		const defaultHrefValue = defaultHref.current;
		const link = linkRef.current;

		if (link && defaultHrefValue) {
			link.href = defaultHrefValue;
		}
	});
};

export default useFavicon;
