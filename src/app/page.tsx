import Post from "@/components/Post";
import SearchBar from "@/components/SearchBar";

export default function Default() {
	return (
		<main className="mx-auto max-h-screen w-full flex justify-center overflow-y-auto font-[family-name:var(--font-geist-sans)]">
			<div className="mx-auto w-full flex flex-col items-center">
				<SearchBar />
				<div className="mx-auto sm:w-full md:max-w-3xl md:p-2 flex flex-col items-center gap-2 py-2">
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</main>
	);
}