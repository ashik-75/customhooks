import { useCallback, useState } from "react";

const useCopytoClipBoard = () => {
	const [copyText, setCopyText] = useState<string | null>(null);

	const handleCopy = useCallback(async (text: string) => {
		try {
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(text);
				setCopyText(text);

				setTimeout(() => {
					setCopyText(null);
				}, 2000);
			} else {
				throw new Error("Clipboard not supported");
			}
		} catch (error) {
			throw new Error("Something went wrong");
		}
	}, []);

	return { handleCopy, copyText };
};

export default useCopytoClipBoard;
