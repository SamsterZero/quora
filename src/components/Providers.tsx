// components/Providers.tsx

"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // client-only flag
    }, []);

    if (!mounted) {
        return null; // or <div className="invisible"> if you want smooth fade-in
    }
    return (
        <SessionProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </SessionProvider>
    );
}