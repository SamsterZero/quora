"use client"
import { signOut } from "next-auth/react";

const LogoutButton = () => {

    return (
        <button
            className="bg-red-600 rounded-full material-symbols-outlined text-white p-2"
            onClick={() => signOut({ callbackUrl: "/login" })}
        >
            power_settings_new
        </button>
    );
}

export default LogoutButton;