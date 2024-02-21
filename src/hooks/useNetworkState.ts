import { useEffect, useState } from "react";

interface NetworkInformation extends EventTarget {
	downlink?: number;
	effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
	rtt?: number;
	saveData?: boolean;
	onchange?: EventListener;
}

interface NavigatorWithNetworkInformation extends Navigator {
	connection?: NetworkInformation;
}

interface NetworkState {
	downlink?: number | null;
	effectiveType?: "slow-2g" | "2g" | "3g" | "4g" | null;
	rtt?: number | null;
	saveData?: boolean | null;
	isOnline: boolean;
}

const useNetworkState = (): NetworkState => {
	const [network, setNetWork] = useState<NetworkState>({
		isOnline: false,
		downlink: null,
		rtt: null,
		saveData: null,
		effectiveType: null,
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		const nav = navigator as NavigatorWithNetworkInformation;

		if (!nav.connection) {
			setNetWork((prevState) => ({
				...prevState,
				isOnline: nav.onLine,
			}));

			return;
		}

		const updateNetWorkInfo = () => {
			const { downlink, saveData, rtt, effectiveType } = nav.connection!;

			setNetWork((prev) => ({
				...prev,
				downlink,
				effectiveType,
				rtt,
				saveData,
				isOnline: nav.onLine,
			}));
		};

		updateNetWorkInfo();

		nav.connection!.addEventListener("change", updateNetWorkInfo);
		window.addEventListener("online", () => {
			setNetWork((prev) => ({
				...prev,
				isOnline: true,
			}));
		});

		window.addEventListener("offline", () => {
			setNetWork((prev) => ({
				...prev,
				isOnline: false,
			}));
		});

		return () => {
			if (nav.connection) {
				nav.connection.removeEventListener("change", updateNetWorkInfo);
			}

			window.removeEventListener("online", () => {
				setNetWork((prev) => ({
					...prev,
					isOnline: true,
				}));
			});

			window.removeEventListener("offline", () => {
				setNetWork((prev) => ({
					...prev,
					isOnline: false,
				}));
			});
		};
	}, []);
	return network;
};

export default useNetworkState;
