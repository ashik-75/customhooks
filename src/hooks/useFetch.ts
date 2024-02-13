import { sleep } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

const useFetch = <T>({ url }: { url: string }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState<Error | undefined>(undefined);
	const [data, setData] = useState<T | undefined>();

	const fetchData = useCallback(async () => {
		try {
			setIsLoading(true);

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(response.statusText);
			}

			// no response error
			const responseData = await response.json();
			await sleep(1000);
			setIsLoading(false);
			setData(responseData);
			setIsError(false);
			setError(undefined);
		} catch (error) {
			setIsLoading(false);
			setData(undefined);
			setIsError(true);
			setError(error as Error);
		}
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return {
		data,
		isLoading,
		isError,
		error,
		refetch: fetchData,
	};
};

export default useFetch;
