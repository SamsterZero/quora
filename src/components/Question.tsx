
const Question = () => {

    return (
        <div
            className="w-full shadow-lg p-3 md:rounded dark:bg-neutral-900 border dark:border-neutral-800">
            <div
                className="flex items-center justify-between pb-2">
                <h2>
                    Question
                </h2>
                <button
                    className="material-symbols-outlined text-red-600"
                >
                    close
                </button>
            </div>

            <div
                className="flex items-center justify-between gap-2">
                <div
                    className="flex items-center gap-2">
                    <button type="button"
                        className="flex items-center gap-2 text-sm"
                    >
                        <i className="material-symbols-outlined">
                            draft_orders
                        </i>
                        <span>
                            Answer
                        </span>
                    </button>
                    <button type="button"
                        className="flex items-center gap-1 px-2 text-sm">
                        <i className="material-symbols-outlined">
                            edit_off
                        </i>
                        <span>Pass</span>
                    </button>
                    <button type="button"
                        className="bg-red-600 rounded-full px-4 py-1 text-sm text-white"
                    >
                        <span>
                            Follow
                            <span className="mx-1 text-gray-400">•</span>
                            <span>0</span>
                        </span>
                    </button>
                </div>
                <button type="button"
                    className="flex items-center gap-1 px-2">
                    <i className="material-symbols-outlined">
                        more_horiz
                    </i>
                </button>
            </div>
        </div>
    );
}

export default Question;