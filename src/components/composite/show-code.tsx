import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
const ShowCode = ({ code }: { code: string }) => {
	return (
		<div className=" w-[80%] rounded">
			<SyntaxHighlighter
				showLineNumbers
				wrapLines
				wrapLongLines
				customStyle={{
					padding: 20,
					borderRadius: "10px",
				}}
				language="javascript"
				style={agate}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};

export default ShowCode;
