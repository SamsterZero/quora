
const Notification = () => {
    return (
        <div className="p-2 flex items-center justify-between gap-2 border-b dark:border-neutral-900">
            <div className="flex items-center gap-2">
                <button type="button" className="material-symbols-outlined text-danger text-3xl">
                    account_circle
                </button>
                <div className="flex flex-col justify-center px-2">
                    <h4 className="text-sm font-semibold">
                        John Doe
                        <span className="mx-1 text-gray-500">•</span>
                        <span className="text-xs text-gray-500">5 hours ago</span>
                    </h4>
                    <p className="text-xs text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button type="button"
                    className="bg-red-600 rounded-full px-4 py-1 text-sm text-white"
                >
                    <span>
                        Follow
                    </span>
                </button>
                <button type="button" className="material-symbols-outlined text-gray-500">
                    <i className="material-symbols-outlined-filled text-red-600">close</i>
                </button>
            </div>
        </div>
    );
}

export default Notification;