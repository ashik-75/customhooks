import { useEffect, useState } from "react";

const Details = ({ info }: { info: string }) => {
	const [u, setU] = useState(info);
	console.log({ u, info });

	useEffect(() => {
		setU(info);
	}, [info]);
	return (
		<div>
			No value i guess: {info} - U-{u}
		</div>
	);
};

export default Details;
