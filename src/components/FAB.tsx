"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FAB = () => {

    const router = useRouter();

    const [isPC, setIsPC] = useState(false);

    // const pathname = usePathname();

    useEffect(() => {
        const checkScreen = () => {
            setIsPC(window.innerWidth >= 1024); // Tailwind's lg breakpoint
        };
        checkScreen();

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const handleClick = () => {
        isPC
            ? router.push("/ask-question-modal", { scroll: false })
            : router.push("/AskQuestion")
    }

    return (
        <div className="fixed bottom-6 right-8 z-50">
            <button
                type="button"
                className="rounded-full px-3 py-2 bg-red-100 border-2 border-neutral-300"
                onClick={handleClick}
            >
                <i className="material-symbols-outlined text-red-600 text-3xl">add</i>
            </button>
        </div>
    )
};

export default FAB;