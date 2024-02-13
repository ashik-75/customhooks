import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { Root } from "@/lib/types";
import { Loader } from "lucide-react";
import { useState } from "react";

const Home = () => {
	const [page, setPage] = useState(1);
	const { isLoading, isError, data, error, refetch } = useFetch<Root>({
		url: `https://rickandmortyapi.com/api/character/?page=${page}`,
	});

	if (isLoading) {
		return (
			<div>
				<Loader size={30} className="animate-spin" />
			</div>
		);
	}

	if (isError && error) {
		return <div>{error.message}</div>;
	}
	return (
		<div className="space-y-5">
			<div className="flex gap-5">
				<Button onClick={refetch}>Refetch</Button>
				<Button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
					Prev
				</Button>
				<Button
					disabled={page === data?.info.pages}
					onClick={() => setPage((p) => p + 1)}
				>
					Next
				</Button>
			</div>
			<br />

			<div className="grid grid-cols-4 gap-5">
				{data?.results.map((item) => (
					<div>
						<img src={item.image} alt={item.name} />
					</div>
				))}
			</div>
			<br />
		</div>
	);
};

export default Home;
