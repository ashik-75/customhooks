import { Route, Routes } from "react-router-dom";
import Navbar from "./components/composite/navbar";
import Location from "./pages/location";
import DynamicTextArea from "./pages/dynamic-textarea";
import Home from "./pages/home";
import OnlineStatus from "./pages/online-status";
import DialogPage from "./pages/dialog";
import NetWork from "./pages/network";

const App = () => {
	return (
		<div className=" h-full ">
			<div className="font-inter grid md:grid-cols-[250px_minmax(0,1fr)]  h-full">
				<div className="hidden md:block">
					<Navbar />
				</div>
				<div className="p-5 bg-slate-50  relative">
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
			<Route path="/" element={<Home />} />
			<Route path="/location" element={<Location />} />
			<Route path="/online-status" element={<OnlineStatus />} />
			<Route path="/textarea" element={<DynamicTextArea />} />
			<Route path="/dialog" element={<DialogPage />} />
			<Route path="/network" element={<NetWork />} />
		</Routes>
	);
};
