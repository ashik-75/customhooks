import useLocation from "@/hooks/useLocation";
import { format } from "date-fns";

const Location = () => {
	const { coords, error } = useLocation({
		enableHighAccuracy: false,
		maximumAge: 1000,
		timeout: 1000,
	});

	console.log("Running...");

	const speedInMetersPerSecond = coords.speed
		? (coords.speed * 1000) / 3600
		: "None";
	const headingInDegree = coords.heading
		? `${(coords.heading * (180 / Math.PI)).toFixed(2)}°`
		: "None";
	if (error) {
		return <div className="text-orange-400">Something went wrong</div>;
	}
	return (
		<div className="h-full flex items-center justify-center">
			<div className="w-[350px] p-5 rounded-3xl space-y-1 border-pink-400 border">
				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm text-zinc-500">
						latitude
					</span>{" "}
					<span>{coords.latitude}</span>
				</div>
				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm text-zinc-500">
						Longitude
					</span>{" "}
					<span>{coords.longitude}</span>
				</div>

				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm text-zinc-500">
						Speed
					</span>{" "}
					<span>{speedInMetersPerSecond}</span>
				</div>

				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm text-zinc-500">
						Headed
					</span>{" "}
					<span>{headingInDegree}</span>
				</div>

				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm text-zinc-500">
						Updated At
					</span>{" "}
					<span>{format(new Date(), "hh:mm:ss aa")}</span>
				</div>
			</div>
		</div>
	);
};

export default Location;
