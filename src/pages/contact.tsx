import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/use-debounce";
import useCookie from "@/hooks/useCookie";

import useSessionStorage from "@/hooks/useSessionStorage";
import { useState } from "react";

const Contact = () => {
	const { value, handleSetValue, handleDeleteValue } =
		useSessionStorage("yellow");
	const { setCookie, deleteCookie, cookie } = useCookie("Neil");

	const [input, setInput] = useState("");
	const dvalue = useDebounce(input, 2000);

	return (
		<div>
			<ul>
				<li>{value}</li>
				<li>
					<Button
						onClick={() =>
							handleSetValue({
								name: "Abegnail",
								date: new Date().toLocaleTimeString(),
							})
						}
					>
						Set value
					</Button>
					<Button onClick={handleDeleteValue} variant={"destructive"}>
						Delete value
					</Button>
				</li>
			</ul>
			<br />

			<p>{cookie}</p>

			<Button onClick={() => setCookie(crypto.randomUUID(), 1)}>
				Set Cookie
			</Button>

			<Button onClick={() => setCookie("FUCK YOU", 2)}>Update Cookie</Button>

			<Button variant={"destructive"} onClick={deleteCookie}>
				Delete Cookie
			</Button>

			<br />
			<div className="max-w-md">
				<Input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="e.g enter value"
				/>
				<br />

				<p>Current: {input}</p>
			</div>
		</div>
	);
};

export default Contact;
