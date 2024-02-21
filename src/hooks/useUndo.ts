import { useCallback, useEffect, useRef, useState } from "react";

type UseUndoHook<T> = {
	value: T;
	canUndo: boolean;
	canRedo: boolean;
	undo: () => void;
	redo: () => void;
	clear: () => void;
	onChange: (newValue: T) => void;
};

const useUndo = <T>(initialValue: T, ms: number = 500): UseUndoHook<T> => {
	const [value, setValue] = useState<T>(initialValue);
	const [canUndo, setCanUndo] = useState<boolean>(false);
	const [canRedo, setCanRedo] = useState<boolean>(false);

	const currentPositionRef = useRef<number>(0);
	const historyRef = useRef<T[]>([initialValue]);
	const debounceTimerRef = useRef<number | null>(null);

	useEffect(() => {
		setCanUndo(currentPositionRef.current > 0);
		setCanRedo(currentPositionRef.current < historyRef.current.length - 1);
	}, [value]);

	const undo = useCallback(() => {
		const newPosition = Math.max(currentPositionRef.current - 1, 0);

		if (currentPositionRef.current !== newPosition) {
			const newPositionValue = historyRef.current[newPosition];
			currentPositionRef.current = newPosition;

			if (newPositionValue !== null) {
				setValue(newPositionValue);
			}
		}
	}, []);
	const redo = useCallback(() => {
		const newPosition = Math.min(
			currentPositionRef.current + 1,
			historyRef.current.length - 1
		);

		if (currentPositionRef.current !== newPosition) {
			const newPositionValue = historyRef.current[newPosition];
			currentPositionRef.current = newPosition;

			if (newPositionValue !== null) {
				setValue(newPositionValue);
			}
		}
	}, []);

	const updateHistory = useCallback((newValue: T) => {
		const newHistory = [
			...historyRef.current.slice(0, currentPositionRef.current + 1),
			newValue,
		];

		currentPositionRef.current = newHistory.length - 1;
		historyRef.current = newHistory;
	}, []);

	const onChange = useCallback(
		(newVaue: T) => {
			setValue(newVaue);

			if (debounceTimerRef.current !== null) {
				clearTimeout(debounceTimerRef.current);
			}

			debounceTimerRef.current = window.setTimeout(() => {
				if (typeof newVaue === "string" && newVaue.trim()) {
					updateHistory(newVaue);
				}
			}, ms);
		},
		[ms, updateHistory]
	);

	const clear = useCallback(() => {
		setValue(initialValue);
		currentPositionRef.current = 0;
		historyRef.current = [initialValue];
	}, [initialValue]);

	return { value, clear, undo, redo, canRedo, canUndo, onChange };
};

export default useUndo;
