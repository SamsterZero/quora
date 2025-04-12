"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Tab {
    text: string
    link: string
    icon?: string
}

interface TabProps {
    tabs: Tab[]
}
const Tab = (
    { tabs }: TabProps
) => {
    const router = useRouter();
    const [active, setActive] = useState<Tab>(tabs[0]);
    const handleClick = (tab: Tab) => {
        setActive(tab);
        if (tab.link) {
            router.replace(tab.link)
        }
    }
    return (
        <>

            {tabs.map(
                (tab, key) => (
                    < button
                        key={key}
                        className={`px-3 py-1 border-b text-nowrap font-bold
                            ${active.text == tab.text
                                ? "text-red-600 border-red-600"
                                : "border-white dark:border-black"
                            }
                            `}
                        onClick={() => handleClick(tab)}
                    >
                        {tab.text}
                    </button >
                )
            )
            }

        </>
    );
}

export default Tab;