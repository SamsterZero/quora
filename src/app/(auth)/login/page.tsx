"use client"
import { signIn } from "next-auth/react";

const LoginPage = () => {
    return (
        <>
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
        </>
    );
}
export default LoginPage;