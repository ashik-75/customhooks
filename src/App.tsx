import { Button } from "./components/ui/button";
import useBoolean from "./hooks/use-boolean";

const App = () => {
	const { setFalse, setTrue, setValue, toggle, value } = useBoolean();
	return (
		<div className="bg-zinc-950  h-full ">
			<div className="space-y-5 font-inter md:container text-zinc-100 bg-zinc-900 h-full">
				<div>
					<p>{value ? "YES" : "NO"}</p>
					<Button onClick={toggle}>Press</Button>
					<Button onClick={() => setValue(true)}>Set Value</Button>
					<Button onClick={setTrue}>Set True</Button>
					<Button onClick={setFalse}>Set False</Button>
				</div>
			</div>
		</div>
	);
};

export default App;
