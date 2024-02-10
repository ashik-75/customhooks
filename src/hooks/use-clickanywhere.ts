import toast from "react-hot-toast";
import useEventListener from "./use-eventlistener";

const useClickAnyWhere = () => {
	useEventListener("click", () => {
		toast.error("UFFS");
	});
};

export default useClickAnyWhere;
