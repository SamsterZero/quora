"use client";

import { useEffect, useRef, useState } from "react";

const NotificationsFilter = () => {

    const [active, setActive] = useState("All");

    const refs = useRef<Record<string, HTMLButtonElement | null>>({});

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleClick = (label: string) => {
        setActive(label);
        refs.current[label]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    };

    useEffect(() => {
        const el = scrollContainerRef.current;
        const onWheel = (e: WheelEvent) => {
            if (e.deltaY === 0 || !el) return;
            e.preventDefault();
            el.scrollBy({ left: e.deltaY });
        };

        el?.addEventListener("wheel", onWheel);
        return () => el?.removeEventListener("wheel", onWheel);
    }, []);

    const buttons = [
        "All", "Stories", "Questons", "Spaces", "People",
        "Comments", "Upvotes", "Announcements", "Earings",
        "Subscription", "Email", "Your Content", "Your Profile"
    ];

    return (

        <div
            className="flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth sticky top-0 z-50 bg-white dark:bg-black"
            ref={scrollContainerRef}
        >
            {buttons.map((label) => (
                <button
                    key={label}
                    ref={(el) => { refs.current[label] = el; }}
                    onClick={() => handleClick(label)}
                    className={`rounded px-3 py-1 text-nowrap shadows-lg ${active === label
                        ? "bg-red-600 text-white"
                        : "bg-red-100 dark:bg-neutral-800"
                        }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default NotificationsFilter;