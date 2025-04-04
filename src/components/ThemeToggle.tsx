'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => setIsMounted(true), []);

    if (!isMounted || !resolvedTheme) {
        return <div className="p-2 border rounded-md bg-transparent w-[124px] h-[40px]" aria-hidden="true" />;
    }

    return (
        <button onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-md material-symbols-outlined h-fit text-gray-700 dark:text-yellow-500"
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {resolvedTheme === "dark" ? "light_mode" : "dark_mode"}
        </button>
    );
}

export default ThemeToggle;