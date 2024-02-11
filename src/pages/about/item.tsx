import { Button } from "@/components/ui/button";
import { ItemType } from "./type";
import { Check, Edit, Trash } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Item = ({
	item,
	handleDelete,
	handleUpdate,
}: {
	item: ItemType;
	handleDelete: (id: string) => void;
	handleUpdate: (id: string, info: string) => void;
}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [state, setState] = useState(item.title);
	return (
		<div key={item.id} className="border rounded-3xl max-w-xs p-5 m-4">
			<h1 className=" mb-2">{item.title}</h1>
			<Button
				onClick={() => handleDelete(item.id)}
				size={"sm"}
				variant={"ghost"}
			>
				<Trash size={12} />
			</Button>
			<Button
				onClick={() => setIsEdit((p) => !p)}
				size={"sm"}
				variant={"ghost"}
			>
				<Edit size={12} />
			</Button>

			<>
				{isEdit && (
					<>
						<Input
							value={state}
							onChange={(e) => setState(e.target.value)}
							placeholder="edit your note"
						/>
						<Button
							onClick={() => {
								handleUpdate(item.id, state);
								setIsEdit(false);
							}}
							size={"sm"}
							variant={"ghost"}
						>
							<Check size={12} />
						</Button>
					</>
				)}
			</>
		</div>
	);
};

export default Item;
