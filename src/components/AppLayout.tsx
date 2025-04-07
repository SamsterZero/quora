"use client"

import { signIn, useSession } from "next-auth/react";
import FAB from "./FAB";
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

const AppLayout = (
    { children }: Readonly<{ children: React.ReactNode; }>
) => {

    const { data: session, status } = useSession();
    if (status === "loading") return <div className="flex justify-center items-center h-screen">Loading...</div>;

    const isAuthenticated = !!session?.user;

    if (!isAuthenticated) {
        return (
            <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center bg-black text-white p-4">
                <h1 className="text-2xl font-bold mb-2 text-center">
                    Welcome to
                    <span className="font-[family-name:var(--font-noticia-text)] text-red-600"> Quora </span>
                    clone
                </h1>
                <p className="mb-4 text-center">Please sign in to continue</p>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/Home" })}
                    className="bg-neutral-800 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-neutral-700 transition duration-200"
                >
                    Continue with
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                </button>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className="mx-auto max-h-screen w-full flex justify-center overflow-y-auto font-[family-name:var(--font-geist-sans)]">
                <div className="mx-auto w-full flex flex-col items-center">
                    <SearchBar />
                    {children}
                </div>
            </main>
            <FAB />
        </>
    );
}
export default AppLayout;