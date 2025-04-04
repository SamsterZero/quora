import Post from "@/components/Post";
import SearchBar from "@/components/SearchBar";

export default function Default() {
	return (
		<div className="mx-auto sm:w-full md:p-2 lg:max-w-3xl flex flex-col items-center gap-2 py-2">
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
	);
}