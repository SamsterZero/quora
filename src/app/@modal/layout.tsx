import BackButton from "@/components/BackButton";
import Tab from "@/components/Tab";
import { ReactNode } from "react"

const ModalLayout = (
    { children }: Readonly<{
        children: ReactNode
    }>
) => {

    const buttons: Tab[] = [
        {
            text: "Ask Question",
            link: "/ask-question-modal"
        },
        {
            text: "Add Post",
            link: "/add-post-modal"
        },
        {
            text: "Create Space",
            link: "/create-space-modal"
        },
    ];

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="flex flex-col w-5/12 min-w-96 border bg-white dark:bg-black p-6  rounded-lg shadow-lg">
                <BackButton />
                <div
                    className="flex"
                >
                    <Tab
                        tabs={buttons}
                    />
                </div>
                {children}
            </div>
        </div>
    );
}

export default ModalLayout