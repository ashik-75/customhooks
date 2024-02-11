import useDocumentTitle from "@/hooks/use-document-title";
import useFavicon from "@/hooks/use-favicon";
import { useState } from "react";

const About = () => {
	const [fav, setFav] = useState("/ai-1.jpg");

	useDocumentTitle("About Page");
	useFavicon(fav);

	return (
		<div>
			<button onClick={() => setFav("/ai-1.jpg")}>One</button>
			<button onClick={() => setFav("/xing.png")}>Two</button>
		</div>
	);
};

export default About;
