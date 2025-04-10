"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface navLink {
    icon: string;
    text?: string;
    link: string;
    aClass?: string;
}

const Navlink = ({ icon, text, link, aClass }: navLink) => {

    const pathname = usePathname();

    const navLinkClass = (link: string) =>
        `flex justify-start items-center gap-2 p-2 ${pathname === link ? "text-red-600" : ""}`;
    return (
        <Link
            className={`${navLinkClass(link)} ${aClass}`}
            href={link}
        >
            <i className="material-symbols-outlined">{icon}</i>
            {
                text &&
                <span className="hidden xl:block">{text}</span>
            }
        </Link>
    );
}

export default Navlink;