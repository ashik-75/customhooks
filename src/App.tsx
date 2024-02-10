import { useRef } from "react";
import { Button } from "./components/ui/button";
import useHover from "./hooks/use-hover";
import useEventListener from "./hooks/use-eventlistener";
import toast from "react-hot-toast";

const App = () => {
	const ref = useRef(null);
	const isHover = useHover(ref);

	useEventListener("click", (event) => {
		console.log(event);
		toast.success("Mouse Enter");
	});

	return (
		<div className="bg-zinc-950  h-full ">
			<div className="space-y-5 font-inter md:container text-zinc-100 bg-zinc-900 h-full">
				<div>
					<Button ref={ref}>Open - {isHover ? "YES" : "NO"}</Button>
				</div>
			</div>
		</div>
	);
};

export default App;
