
const Spaces = [
    "Cooking",
    "Science",
    "Writing",
    "Mathematics",
    "Fashion",
    "Photography",
    "Food",
    "Music",
];

const SpacesRail = () => {
    return (
        <div className="hidden md:block h-screen py-3 bg-red-100 dark:bg-neutral-900">
            <div className="flex flex-col gap-5 p-3 pe-5">
                {Spaces.map((space) => (
                    <div key={space}>
                        <a href="#" className="flex justify-start items-center gap-2">
                            <i className="material-symbols-outlined bg-white rounded">image</i>
                            <span className="text-sm">{space}</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default SpacesRail;