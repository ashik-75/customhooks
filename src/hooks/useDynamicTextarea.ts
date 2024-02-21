import { RefObject, useEffect } from "react";

const useDynamicTextAreaSize = (
	textAreaRef: RefObject<HTMLTextAreaElement>,
	text: string,
	maxHeight?: number
) => {
	useEffect(() => {
		const currentTextArea = textAreaRef.current;

		if (currentTextArea) {
			currentTextArea.style.height = `100px`;
			const contentHeight = currentTextArea.scrollHeight;

			currentTextArea.style.overflowX = "hidden";

			if (maxHeight) {
				currentTextArea.style.maxHeight = `${maxHeight}px`;
				currentTextArea.style.overflowY =
					contentHeight > maxHeight ? "scroll" : "hidden";
				currentTextArea.style.height = `${Math.min(
					contentHeight,
					maxHeight
				)}px`;
			} else {
				currentTextArea.style.height = `${contentHeight}px`;
			}
		}
	}, [textAreaRef, text, maxHeight]);
};

export default useDynamicTextAreaSize;
