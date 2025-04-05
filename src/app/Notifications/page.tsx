
const Notifications = () => {

    const buttons = [
        "All", "Stories", "Questons", "Spaces", "People",
        "Comments", "Upvotes", "Announcements", "Earings",
        "Subscription", "Email", "Your Content", "Your Profile"
    ];

    return (
        <>
            <div className="flex gap-2 p-2 w-full sticky top-0 z-50 bg-white dark:bg-black">
                {buttons.map((label) => (
                    <button
                        key={label}
                        className="rounded px-3 py-1 bg-red-100 dark:bg-neutral-800 shadows-lg text-nowrap"
                    >
                        {label}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Notifications;