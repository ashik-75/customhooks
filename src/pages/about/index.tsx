import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/use-debounce";
import useList from "@/hooks/use-list";
import { useState } from "react";
import Item from "./item";
import { ItemType } from "./type";
import useLocalStorage from "@/hooks/use-localstorage";
import Details from "./details";

const About = () => {
	const [input, setInput] = useState("INITIAL: ");
	const { value: storageValue } = useLocalStorage("snacks");

	const value = useDebounce(input, 1000);

	const {
		list,
		addToList,
		// removeAllFromList,
		removeFromList,
		updateItemToList,
	} = useList<ItemType>();

	const handleDelete = (id: string) => {
		removeFromList(id);
	};

	const handleUpdate = (id: string, payload: string) => {
		updateItemToList(id, { id, title: payload });
	};

	return (
		<div className="max-w-md space-y-5">
			<Details info={value} />
			<Input
				placeholder="e.g: your message"
				onChange={(e) => setInput(e.target.value)}
				value={input}
			/>
			<p>Storage Snacks: {storageValue}</p>
			<p>Debounced Value: {value}</p>

			<Button
				disabled={value.length === 0}
				onClick={() => {
					addToList({ id: crypto.randomUUID(), title: value });
					setInput("");
				}}
			>
				Add To List
			</Button>

			<ul className="list-inside list-decimal">
				{list.map((item) => (
					<Item
						item={item}
						handleDelete={handleDelete}
						handleUpdate={handleUpdate}
					/>
				))}
			</ul>
		</div>
	);
};

export default About;
