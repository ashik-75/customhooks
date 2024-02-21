import ShowCode from "@/components/composite/show-code";
import useIdle from "@/hooks/useIdle";
import { cn } from "@/lib/utils";
import { RefreshCcw, Send } from "lucide-react";

const OnlineStatus = () => {
	const isIdle = useIdle(5000);
	return (
		<div className="space-y-10">
			<div
				className={cn(
					"w-[350px] rounded-3xl text-white p-5 h-[200px] border",
					isIdle ? "bg-yellow-600" : "bg-green-600"
				)}
			>
				{isIdle ? (
					<div>
						<div className="flex gap-4">
							<RefreshCcw />
							<span>Aww, In Active </span>
						</div>

						<p className="text-sm line-clamp-6 my-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
							deleniti cum ad fugit minus aliquid iste, ab impedit dolorum
							aspernatur amet eaque velit accusamus sequi deserunt natus
							blanditiis et dolore assumenda rem animi voluptatum, laboriosam
							sit tenetur! Totam illum expedita provident libero? Modi amet esse
							dolore necessitatibus sequi explicabo pariatur!
						</p>
					</div>
				) : (
					<div>
						<div className="flex gap-4">
							<Send />
							<span>Active </span>
						</div>

						<p className="text-sm line-clamp-6 my-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
							deleniti cum ad fugit minus aliquid iste, ab impedit dolorum
							aspernatur amet eaque velit accusamus sequi deserunt natus
							blanditiis et dolore assumenda rem animi voluptatum, laboriosam
							sit tenetur! Totam illum expedita provident libero? Modi amet esse
							dolore necessitatibus sequi explicabo pariatur!
						</p>
					</div>
				)}
			</div>

			<ShowCode
				code={`import { useEffect, useRef, useState } from "react";

const throttle = (cb: () => void, ms: number) => {
	let lastTime = 0;

	return () => {
		const now = Date.now();

		if (now - lastTime >= ms) {
			cb();
			lastTime = Date.now();
		}
	};
};

const useIdle = (ms: number = 5000) => {
	const [isIdle, setIsIdle] = useState<boolean>(false);

	const timerRef = useRef<number | null>(null);

	useEffect(() => {
		const handleIdle = throttle(() => {
			setIsIdle(false);

			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			timerRef.current = window.setTimeout(() => {
				setIsIdle(true);
			}, ms);
		}, ms);

		window.addEventListener("mousemove", handleIdle);
		window.addEventListener("mousedown", handleIdle);
		window.addEventListener("scroll", handleIdle);
		window.addEventListener("wheel", handleIdle);
		window.addEventListener("resize", handleIdle);
		window.addEventListener("touchstart", handleIdle);
		document.addEventListener("visibilitychange", handleIdle);

		return () => {
			window.removeEventListener("mousemove", handleIdle);
			window.removeEventListener("mousedown", handleIdle);
			window.removeEventListener("scroll", handleIdle);
			window.removeEventListener("wheel", handleIdle);
			window.removeEventListener("resize", handleIdle);
			window.removeEventListener("touchstart", handleIdle);
			document.removeEventListener("visibilitychange", handleIdle);
		};
	}, [ms]);

	return isIdle;
};

export default useIdle;

				`}
			/>
		</div>
	);
};

export default OnlineStatus;
