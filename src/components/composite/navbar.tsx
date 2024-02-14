import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar: React.FC = () => {
	const [open, setOpen] = useState(false);

	const handleSheetClose = () => {
		setOpen(false);
	};

	return (
		<div className="p-5 flex gap-5">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Menu size={30} />
				</SheetTrigger>
				<SheetContent side={"left"}>
					<NavLinks handleSheetClose={handleSheetClose} />
				</SheetContent>
			</Sheet>
			<Link to={"/"}>
				<img className="w-10 h-10" src="/duck.png" />
			</Link>
		</div>
	);
};

export default Navbar;

const links = [
	{
		path: "/location",
		label: "Location(useLocation)",
	},
	{
		path: "/undo-redo",
		label: "Undo Redo(useUndoRedo)",
	},
];

const NavLinks = ({ handleSheetClose }: { handleSheetClose: () => void }) => {
	const location = useLocation();
	return (
		<div className="space-y-2">
			{links.map((link) => (
				<div
					className={
						location.pathname === link.path
							? `underline underline-offset-2 text-orange-600`
							: "text-zinc-500"
					}
					onClick={handleSheetClose}
				>
					<Link to={link.path} key={link.path}>
						{link.label}
					</Link>
				</div>
			))}
		</div>
	);
};
