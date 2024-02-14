import useLocation from "@/hooks/useLocation";
import { Send } from "lucide-react";

const Location = () => {
	const { coords, locatedAt, error } = useLocation();
	return (
		<div className="h-full flex items-center justify-center">
			{error && <div>Something went wrong</div>}
			<div className="max-w-md p-5 rounded-3xl space-y-1 border-pink-400 border">
				<h1>latitude: {coords.latitude}</h1>
				<h1>longitude: {coords.longitude}</h1>
				<h1>accuracy: {coords.accuracy}</h1>
				<h1>altitude: {coords.altitude}</h1>
				<h1>altitudeAccuracy: {coords.altitudeAccuracy}</h1>
				<h1>heading: {coords.heading}</h1>
				<h1>speed: {coords.speed}</h1>

				<div className="flex gap-2">
					<Send className="text-teal-400" /> <span>{locatedAt}</span>
				</div>
			</div>
		</div>
	);
};

export default Location;
