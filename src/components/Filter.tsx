"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Filter {
    text: string
    link?: string
}

type FilterProps = {
    filters: Filter[];
}

const Filter = (
    { filters }: FilterProps
) => {
    const [active, setActive] = useState<Filter>(filters[0]);

    const refs = useRef<Record<string, HTMLButtonElement | null>>({});

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const router = useRouter();

    const handleClick = (filter: Filter) => {
        setActive(filter);
        refs.current[filter.text]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
        filter.link && router.push(filter.link);
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

    return (

        <div
            className="flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth touch-x-pan"
            ref={scrollContainerRef}
        >
            {filters.map((filter) => (
                <button
                    key={filter.text}
                    ref={(el) => {
                        refs.current[filter.text] = el;
                    }}
                    onClick={() => handleClick(filter)}
                    className={`rounded px-3 py-1 text-nowrap shadows-lg
                        ${active.text === filter.text
                            ? "bg-red-600 text-white"
                            : "bg-red-100 dark:bg-neutral-800"
                        }`}
                >
                    {filter.text}
                </button>
            ))}
        </div>
    );
}

export default Filter;