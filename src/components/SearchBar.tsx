
const SearchBar = () => {
    return (
        <div className="w-full px-2 pt-2 hidden md:block sticky top-0 z-50 w-full">
            <input
                type="text"
                className="w-full dark:bg-neutral-900 bg-red-100 rounded px-4 py-2 focus:outline-none shadow-lg material-symbols-outlined"
                placeholder="search"
            />
        </div>
    );
}

export default SearchBar;