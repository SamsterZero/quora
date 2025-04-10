'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => setIsMounted(true), []);

    const icon = resolvedTheme === "dark" ? "light_mode" : "dark_mode";
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    return (
        <button onClick={() => setTheme(nextTheme)}
            className="p-2 rounded-md material-symbols-outlined h-fit text-gray-700 dark:text-yellow-500"
            aria-label={`Switch to ${nextTheme} mode`}
        >
            {isMounted ? icon: "dark_mode"}
        </button>
    );
}

export default ThemeToggle;