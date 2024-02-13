import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
	return (
		<div className=" h-full ">
			<div className="space-y-5 font-inter md:container   h-full">
				<nav className="space-x-5 py-5">
					<Link to={"/"}>Home</Link>
					<Link to={"/about"}>About</Link>
					<Link to={"/contact"}>Contact</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
