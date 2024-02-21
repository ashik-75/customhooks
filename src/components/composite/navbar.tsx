import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar: React.FC = () => {
	return (
		<div className="p-5 flex gap-5 fixed top-0 left-0 w-full">
			<NavLinks />
		</div>
	);
};

export default Navbar;

export const MobileMenu = () => {
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
					<MobileNavLinks handleSheetClose={handleSheetClose} />
				</SheetContent>
			</Sheet>
			<Link to={"/"}>
				<img className="w-10 h-10" src="/duck.png" />
			</Link>
		</div>
	);
};

const links = [
	{
		path: "/location",
		label: "Location(useLocation)",
	},
	{
		path: "/undo-redo",
		label: "Undo Redo(useUndoRedo)",
	},
	{
		path: "/textarea",
		label: "Dynamic Textarea(useDynamicTextarea)",
	},
	{
		path: "/online-status",
		label: "Online Status",
	},
	{
		path: "/dialog",
		label: "Dialog Page",
	},
	{
		path: "/network",
		label: "useNetwork",
	},
];

const NavLinks = () => {
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
				>
					<Link to={link.path} key={link.path}>
						{link.label}
					</Link>
				</div>
			))}
		</div>
	);
};

const MobileNavLinks = ({
	handleSheetClose,
}: {
	handleSheetClose: () => void;
}) => {
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
