"use client"
import { useRouter } from "next/navigation";

const FAB = () => {

    const router = useRouter();

    return (
        <div className="fixed bottom-6 right-8 z-50">
            <button
                type="button"
                className="rounded-full px-3 py-2 bg-red-100 border-2 border-neutral-300"
                onClick={() => router.push("/Create/Question")}
            >
                <i className="material-symbols-outlined text-red-600 text-3xl">add</i>
            </button>
        </div>
    )
};

export default FAB;