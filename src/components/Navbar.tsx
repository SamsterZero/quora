import ThemeToggle from "./ThemeToggle";

const navLinks = {
    home: {
        icon: 'home',
        text: 'Home',
        link: '/home',
    },
    discover: {
        icon: 'explore',
        text: 'Discover',
        link: '/discover',
    },
    answers: {
        icon: 'rate_review',
        text: 'Answer',
        link: '/answer',
    },
    notifications: {
        icon: 'notifications',
        text: 'Notifications',
        link: '#',
    },
    profile: {
        icon: 'account_circle',
        text: 'Profile',
        link: '#',
    }
}
const Navbar = () => {
    return (
        <>
            <nav className="bg-red-100 dark:bg-neutral-900 flex justify-between items-center md:flex-col gap-2 px-3 md:px-0 md:py-3">
                {/* <div className=""> */}
                <div className="md:w-full flex items-center md:flex-col gap-4 py-2">
                    <h4 className="text-3xl font-[family-name:var(--font-noticia-text)] text-red-600 font-bold md:hidden md:px-2 xl:inline">Quora</h4>
                    <h4 className="text-3xl font-[family-name:var(--font-noticia-text)] text-red-600 font-bold hidden md:block md:px-2 xl:hidden">Q</h4>

                    <div className="hidden md:flex flex-col gap-5 justify-center items-center md:w-full xl:items-start xl:p-4">
                        {Object.entries(navLinks)
                            .slice(0, 3)
                            .map(([key, { icon, text , link}]) => (
                                <a key={key} className="flex justify-start items-center gap-2"
                                    href={link}>
                                    <i className="material-symbols-outlined">{icon}</i>
                                    <span className="hidden xl:block">{text}</span>
                                </a>
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
                        .map(([key, { icon }]) => (
                            <button
                                key={key}
                                type="button"
                                className="material-symbols-outlined text-light hidden md:inline"
                            >
                                <i className="material-symbols-outlined">{icon}</i>
                            </button>
                        ))
                    }
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
                        .map(([key, { icon, link }]) => (
                            <a
                                key={key}
                                className="flex justify-start items-center gap-2 p-2"
                                href={link}
                            >
                                <i className="material-symbols-outlined">{icon}</i>
                            </a>
                        ))

                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;