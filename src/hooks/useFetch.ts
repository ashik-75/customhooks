import { sleep } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

type FetchState<T> = {
	isLoading: boolean;
	isError: boolean;
	data: T | null;
	error: Error | null;
	refetch: () => void;
};

const useFetch = <T>({ url }: { url: string }): FetchState<T> => {
	const [state, setState] = useState<FetchState<T>>({
		isError: false,
		isLoading: false,
		data: null,
		error: null,
		refetch: () => {},
	});

	const fetchData = useCallback(
		async (ignoreCache: boolean = false) => {
			try {
				const cache = sessionStorage.getItem(url);
				if (cache && !ignoreCache) {
					setState((prev) => ({ ...prev, data: JSON.parse(cache) }));
					return;
				} else {
					setState((prev) => ({ ...prev, isLoading: true }));

					const response = await fetch(url);
					if (!response.ok) {
						throw new Error(response.statusText);
					}

					// no response error
					const responseData = await response.json();
					await sleep(1000);
					sessionStorage.setItem(url, JSON.stringify(responseData));
					setState((prev) => ({
						...prev,
						isLoading: false,
						isError: false,
						error: null,
						data: responseData,
						refetch: () => fetchData(true),
					}));
				}
			} catch (error) {
				setState((prev) => ({
					...prev,
					isError: true,
					error: error as Error,
					isLoading: false,
					data: null,
				}));
			}
		},
		[url]
	);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return state;
};

export default useFetch;
