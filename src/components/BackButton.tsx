"use client"
import { useRouter } from "next/navigation";

const BackButton = () => {

    const router = useRouter();

    return (
        <button
            className="p-2 material-symbols-outlined self-end"
            onClick={() => router.back()}
        >
            Close
        </button>
    );
}
export default BackButton;