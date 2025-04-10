import ThemeToggle from "./ThemeToggle";
import ProfilePhoto from "./ProfilePhoto";
import { navLinks } from "@/lib/constants";
import Navlink from "./NavLink";
import Link from "next/link";

const Navbar = () => {

    return (
        <>
            <nav className="bg-red-100 dark:bg-neutral-900 flex justify-between items-center md:flex-col gap-2 px-3 md:px-0 md:py-3 md:min-h-screen">
                {/* <div className=""> */}
                <div className="md:w-full flex items-center md:flex-col gap-4 py-2">
                    <h4 className="text-3xl font-[family-name:var(--font-noticia-text)] text-red-600 font-bold md:hidden md:px-2 xl:inline">Quora</h4>
                    <h4 className="text-3xl font-[family-name:var(--font-noticia-text)] text-red-600 font-bold hidden md:inline md:px-2 xl:hidden">Q</h4>

                    <div className="hidden md:flex flex-col gap-5 justify-center items-center md:w-full xl:items-start xl:p-4">
                        {Object.entries(navLinks)
                            .slice(0, 3)
                            .map(([key, { icon, text, link }]) => (
                                <Navlink key={key} text={text} icon={icon} link={link} />
                            ))
                        }
                    </div>
                </div>
                <div className="md:w-full flex md:flex-col md:items-center gap-5 py-2">
                    <button type="button" className="border border-black rounded-full px-3 py-1 md:w-full md:p-3 md:rounded-none md:border-0 md:mx-auto bg-white text-black">
                        Try <span className="font-[family-name:var(--font-noticia-text)] text-bold text-red-600">Quora+</span>
                    </button>
                    <ThemeToggle></ThemeToggle>
                    {Object.entries(navLinks)
                        .slice(3, 5)
                        .map(([key, { icon, link }]) => (
                            <Navlink key={key} icon={icon} link={link} aClass="hidden md:block" />
                        ))
                    }
                    <a
                        href="/Profile"
                        className="material-symbols-outlined text-light hidden md:inline"
                    >
                        <ProfilePhoto widthClass="w-8" />
                    </a>
                    <button type="button" className="material-symbols-outlined text-danger md:hidden">
                        search
                    </button>
                </div>
                {/* </div> */}
            </nav>
            {/* <MobileNavbar></MobileNavbar> */}
            <nav className="bg-red-100 dark:bg-neutral-900 md:hidden">
                <div className="container flex justify-around items-center gap-5 mx-auto px-3">
                    {Object.entries(navLinks)
                        .slice(0, 4)
                        .map(([key, { icon, link }]) => (
                            <Navlink key={key} icon={icon} link={link} />
                        ))

                    }
                    <Link
                        className="flex justify-start items-center gap-2 p-2"
                        href="/Profile"
                    >
                        <ProfilePhoto widthClass="w-6" />
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;