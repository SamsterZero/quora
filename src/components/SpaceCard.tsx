const SpaceCard = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full max-w-sm mx-auto h-auto dark:bg-neutral-900 rounded-xl shadow-md transition-transform hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-center w-full h-14 bg-neutral-500 rounded-t-xl"></div>
            <div className="flex items-center justify-center w-12 h-12 relative -top-5 border-2 dark:border-neutral-900 bg-neutral-300 rounded-xl dark:bg-neutral-700">
                <i className="material-symbols-outlined" aria-hidden="true" title="Space Icon">spa</i>
            </div>
            <div className="px-4 pb-4 text-center">
                <h2 className="text-xl font-bold">Space</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">This space is cool.</p>
            </div>
        </div>
    );
}
export default SpaceCard;