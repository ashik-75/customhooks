import useCopytoClipBoard from "@/hooks/use-copytoclipboard";
import useIsFirstRender from "@/hooks/use-isfirstrender";
import { Check, Copy } from "lucide-react";
import toast from "react-hot-toast";

const Home = () => {
	const first = useIsFirstRender();

	const { handleCopy, copyText } = useCopytoClipBoard();
	return (
		<div>
			<p>Home - {first ? "Yes" : "NO"}</p>
			<button
				onClick={() =>
					handleCopy("Somewhere in bangladesh")
						.then(() => toast.success("YES"))
						.catch(() => toast.error("NO"))
				}
			>
				{copyText ? <Check size={16} /> : <Copy size={16} />}
			</button>
		</div>
	);
};

export default Home;
