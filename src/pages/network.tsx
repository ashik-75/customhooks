import useNetworkState from "@/hooks/useNetworkState";

const NetWork = () => {
	const { isOnline, downlink, effectiveType, rtt, saveData } =
		useNetworkState();
	return (
		<div>
			<p>Online Status: {isOnline ? "ONLINE" : "OFFLINE"}</p>
			<p>DownLink: {downlink}</p>
			<p>NetWorkType: {effectiveType}</p>
			<p>RTT: {rtt}</p>
			<p>{saveData ? "SAVE" : "NO"}</p>
		</div>
	);
};

export default NetWork;
