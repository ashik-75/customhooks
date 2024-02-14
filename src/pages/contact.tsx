import useLocation from "@/hooks/useLocation";

const Contact = () => {
	const { coords, locatedAt, error } = useLocation();
	return (
		<div>
			{error && <div>Something went wrong</div>}
			<div className="max-w-md p-5 rounded-3xl border">
				<h1>latitude: {coords.latitude}</h1>
				<h1>longitude: {coords.longitude}</h1>
				<h1>accuracy: {coords.accuracy}</h1>
				<h1>altitude: {coords.altitude}</h1>
				<h1>altitudeAccuracy: {coords.altitudeAccuracy}</h1>
				<h1>heading: {coords.heading}</h1>
				<h1>speed: {coords.speed}</h1>
				<div>
					<p>Located: {locatedAt}</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
