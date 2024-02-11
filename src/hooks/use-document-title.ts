import { useEffect, useRef } from "react";
import useUnMount from "./use-unmount";

const useDocumentTitle = (title: string) => {
	const defaultTitle = useRef<string | null>();
	useEffect(() => {
		defaultTitle.current = window.document.title;
	}, []);
	useEffect(() => {
		window.document.title = title;
	}, [title]);

	useUnMount(() => {
		if (defaultTitle.current) {
			window.document.title = defaultTitle.current;
		}
	});
};

export default useDocumentTitle;
