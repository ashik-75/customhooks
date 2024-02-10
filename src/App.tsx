import { Button } from "./components/ui/button";
import useToggle from "./hooks/use-toggle";

const App = () => {
	const { state, toggle, setState } = useToggle();
	return (
		<div className="bg-zinc-950  h-full ">
			<div className="space-y-5 font-inter md:container text-zinc-100 bg-zinc-900 h-full">
				<div>
					<p>{state ? "YES" : "NO"}</p>
					<Button onClick={toggle}>Press</Button>
					<Button onClick={() => setState(true)}>Set Value</Button>
				</div>
			</div>
		</div>
	);
};

export default App;
