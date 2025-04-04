
const MobileNavbar = () => {
    return (
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
    );
}

export default MobileNavbar;