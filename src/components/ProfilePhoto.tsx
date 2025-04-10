"use client";
import { useSession } from "next-auth/react";

interface ProfilePhotoProps {
    widthClass?: string;
}

const ProfilePhoto = ({ widthClass }: ProfilePhotoProps) => {

    const { data: session, status } = useSession();

    const userImage = session?.user?.image;

    console.log(userImage);

    if (status === "loading") {
        return (
            <div className={`bg-gray-300 rounded-full ${widthClass} aspect-square animate-pulse flex items-center justify-center`} >
                <span className="material-symbols-outlined text-gray-500">person</span>
            </div>
        );
    }


    return (
        <>
            {
                userImage ?
                    (<img
                        className={`rounded-full aspect-square ${widthClass} object-cover`}
                        src={userImage}
                        alt="P"
                    />) :
                    (<div
                        className={`rounded-full bg-gray-300 ${widthClass} aspect-square flex items-center justify-center material-symbols-outlined text-gray-500`}
                    >
                        person
                    </div>)
            }
        </>
    );
}

export default ProfilePhoto;