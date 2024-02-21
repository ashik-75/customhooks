import { Button } from "@/components/ui/button";
import useDynamicTextAreaSize from "@/hooks/useDynamicTextarea";
import { useRef, useState } from "react";

const DynamicTextArea = () => {
	const [input, setInput] = useState("");
	const ref = useRef(null);

	useDynamicTextAreaSize(ref, input, 400);
	return (
		<div>
			<textarea
				ref={ref}
				className="w-[300px] border outline-none block mb-5 p-2 rounded-xl"
				name="message"
				id=""
				value={input}
				onChange={(e) => setInput(e.target.value)}
			></textarea>
			<Button>Submit</Button>
		</div>
	);
};

export default DynamicTextArea;
