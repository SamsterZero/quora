import ThemeToggle from "./ThemeToggle";

const navLinks = {
    home: {
        icon: 'home',
        text: 'Home',
    },
    search: {
        icon: 'search',
        text: 'Search',
    },
    discover: {
        icon: 'explore',
        text: 'Discover',
    },
    answers: {
        icon: 'rate_review',
        text: 'Answers',
    },
    notifications: {
        icon: 'notifications',
        text: 'Notifications',
    },
    profile: {
        icon: 'account_circle',
        text: 'Profile',
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

                        <a className="justify-self-center flex justify-start items-center gap-2 text-red-600" href="#">
                            <i className="material-symbols-outlined">home</i>
                            <span className="hidden xl:block">Home</span>
                        </a>
                        <a className="flex justify-start items-center gap-2" href="#">
                            <i className="material-symbols-outlined">explore</i>
                            <span className="hidden xl:block">Discover</span>
                        </a>
                        <a className="flex justify-start items-center gap-2" href="#">
                            <i className="material-symbols-outlined">rate_review</i>
                            <span className="hidden xl:block">Answers</span>
                        </a>
                    </div>
                </div>
                <div className="md:w-full flex md:flex-col md:items-center gap-5 py-2">
                    <button type="button" className="border border-black rounded-full px-3 py-1 md:w-full md:p-3 md:rounded-none md:border-0 md:mx-auto bg-white text-black">
                        Try <span className="font-[family-name:var(--font-noticia-text)] text-bold text-red-600">Quora+</span>
                    </button>
                    <ThemeToggle></ThemeToggle>
                    <button type="button" className="material-symbols-outlined text-light hidden md:inline">
                        notifications
                    </button>
                    <button type="button" className="material-symbols-outlined text-danger hidden md:inline">
                        account_circle
                    </button>
                    <button type="button" className="material-symbols-outlined text-danger md:hidden">
                        search
                    </button>
                </div>
                {/* </div> */}
            </nav>
            {/* <MobileNavbar></MobileNavbar> */}
            <nav className="bg-red-100 dark:bg-neutral-900 md:hidden">
                <div className="container flex justify-around items-center gap-5 mx-auto px-3">
                    <a className="flex justify-start items-center gap-2 p-2 text-red-600 border-b-2 border-red-600" href="#">
                        <i className="material-symbols-outlined">home</i>
                        {/* <span>Home</span> */}
                    </a>
                    <a className="flex justify-start items-center gap-2 p-2" href="#">
                        <i className="material-symbols-outlined">explore</i>
                        {/* <span>Discover</span> */}
                    </a>
                    <a className="flex justify-start items-center gap-2 p-2" href="#">
                        <i className="material-symbols-outlined">rate_review</i>
                        {/* <span>Answers</span> */}
                    </a>
                    <a className="flex justify-start items-center gap-2 p-2" href="#">
                        <i className="material-symbols-outlined">notifications</i>
                        {/* <span>Search</span> */}
                    </a>
                    <a className="flex justify-start items-center gap-2 p-2" href="#">
                        <i className="material-symbols-outlined">account_circle</i>
                        {/* <span>Search</span> */}
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;