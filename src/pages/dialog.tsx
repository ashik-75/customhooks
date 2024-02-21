import useUndo from "@/hooks/useUndo";
import { cn } from "@/lib/utils";
import { Redo, Undo, XCircle } from "lucide-react";

const DialogPage = () => {
	const { canRedo, canUndo, undo, redo, clear, onChange, value } =
		useUndo<string>("", 500);
	return (
		<div className="space-y-10 flex flex-col gap-5 items-center">
			<div className="w-[600px] flex border rounded-2xl px-4">
				<button onClick={undo} disabled={!canUndo} className="p-2">
					<Undo className={cn(canUndo ? "text-zinc-600" : "text-zinc-400")} />
				</button>

				<button onClick={redo} disabled={!canRedo} className="p-2">
					<Redo className={cn(canRedo ? "text-zinc-600" : "text-zinc-400")} />
				</button>

				<input
					type="text"
					onChange={(e) => onChange(e.target.value)}
					value={value}
					className="flex-1 outline-none pl-5 text-zinc-500 text-sm"
				/>

				<button onClick={clear} disabled={value.length === 0} className="p-2">
					<XCircle
						className={cn(value.length > 0 ? "text-zinc-600" : "text-zinc-400")}
					/>
				</button>
			</div>
		</div>
	);
};

export default DialogPage;
