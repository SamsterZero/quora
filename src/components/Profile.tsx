"use client"

import { signOut, useSession } from "next-auth/react";
const Profile = () => {

    const { data: session } = useSession();

    return (
        <div className="p-4 bg-red-100 dark:bg-neutral-900 rounded-lg shadow-md flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
                <button type="button" >
                    <img
                        className="rounded-full"
                        src={session?.user?.image ?? ""}
                        alt="P"
                    />
                </button>
                <div className="flex flex-col items-start justify-center gap-2">
                    <h4 className="font-extrabold">{session?.user?.name}</h4>
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-1">
                            <span className="font-bold">
                                0
                            </span>
                            <span className="text-gray-500">•</span>
                            <span>
                                Followers
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-bold">
                                0
                            </span>
                            <span className="text-gray-500">•</span>
                            <span>
                                Following
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 mt-2 w-full">
                <button className="w-full rounded-full border border-black dark:border-white flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">Edit</span>
                    Edit Profile
                </button>
                <button className="rounded-full material-symbols-outlined p-2">
                    share
                </button>
                <button
                    className="bg-red-600 rounded-full material-symbols-outlined text-white p-2"
                    onClick={() => signOut({callbackUrl: "/"})}
                >
                    power_settings_new
                </button>
            </div>
        </div>
    );
}

export default Profile;