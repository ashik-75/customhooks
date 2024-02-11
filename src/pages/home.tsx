import useIsFirstRender from "@/hooks/use-isfirstrender";
import { useState } from "react";

const Home = () => {
	const first = useIsFirstRender();
	const [state, setState] = useState(1);
	return (
		<div>
			<p>Home - {first ? "Yes" : "NO"}</p>
			<button onClick={() => setState((p) => p + 1)}>count {state}</button>
		</div>
	);
};

export default Home;
