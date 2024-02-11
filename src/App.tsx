import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
	return (
		<div className="bg-zinc-950  h-full ">
			<div className="space-y-5 font-inter md:container text-zinc-100 bg-zinc-900 h-full">
				<nav>
					<Link to={"/"}>Home</Link>
					<Link to={"/about"}>About</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
