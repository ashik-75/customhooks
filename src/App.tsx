import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/composite/navbar";
import Location from "./pages/location";

const App = () => {
	return (
		<div className=" h-full ">
			<div className="font-inter md:container   h-full">
				<Navbar />
				<div className="p-5 pt-0 h-[calc(100vh-20vh)]">
					<AppRoutes />
				</div>
			</div>
		</div>
	);
};

export default App;

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/location" element={<Location />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
};
