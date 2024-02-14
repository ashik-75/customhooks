import useLocation from "@/hooks/useLocation";
import { format } from "date-fns";
import { Send } from "lucide-react";

const Location = () => {
	const { coords, locatedAt, error } = useLocation({
		enableHighAccuracy: true,
		maximumAge: 1000,
		timeout: 2000,
	});

	if (error) {
		return <div className="text-orange-400">Something went wrong</div>;
	}
	return (
		<div className="h-full flex items-center justify-center">
			<div className="w-[350px] p-5 rounded-3xl space-y-1 border-pink-400 border">
				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm">latitude</span>{" "}
					<span>{coords.latitude}</span>
				</div>
				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm">Longitude</span>{" "}
					<span>{coords.longitude}</span>
				</div>

				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm">Speed</span>{" "}
					<span>{coords.speed}</span>
				</div>

				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm">Headed</span>{" "}
					<span>{coords.heading}</span>
				</div>

				<div className="flex gap-2">
					<Send className="text-teal-400" /> <span>{locatedAt}</span>
				</div>
				<div className="flex justify-between">
					<span className="uppercase font-medium text-sm">Updated At</span>{" "}
					<span>{format(new Date(), "hh:mm:ss aa")}</span>
				</div>
			</div>
		</div>
	);
};

export default Location;
