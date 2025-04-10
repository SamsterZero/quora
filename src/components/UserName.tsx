"use client"

import { useSession } from "next-auth/react";

const UserName = () => {

    const { data: session, status } = useSession();

    if (status == "loading") {
        return (
            <div
                className={`w-28 h-5 bg-gray-300 rounded animate-pulse`} >
            </div>
        );
    }

    return (
        <h4 className="font-extrabold">{session?.user?.name}</h4>
    );
}
export default UserName;