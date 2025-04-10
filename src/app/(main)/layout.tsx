import FAB from "@/components/FAB";
import Navbar from "@/components/Navbar"
import SearchBar from "@/components/SearchBar";
import React from "react";

const MainLayout = async(
    { children, }: Readonly<{ children: React.ReactElement }>
) => {

    return (
        <div className = "md:flex">
            <Navbar />
            <main className="mx-auto max-h-screen w-full flex justify-center overflow-y-auto font-[family-name:var(--font-geist-sans)]">
                <div className="mx-auto w-full flex flex-col items-center">
                    <SearchBar />
                    {children}
                </div>
            </main>

            <FAB />
        </div >
    )
}
export default MainLayout;