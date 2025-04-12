import { ReactNode } from "react";
import Filter from "./Filter";

const buttons: Filter[] = [
    {
        text: "Ask Question",
        link: "/AskQuestion"
    },
    {
        text: "Add Post",
        link: "/AddPost"
    },
    {
        text: "Create Space",
        link: "/CreateSpace"
    },
];


const Editor = (
    { children }: Readonly<{ children: ReactNode }>
) => {
    return (

        <div
            className="w-full flex flex-col gap-4 p-2"
        >
            <Filter filters={buttons} />
            {children}
        </div>
    );
}

export default Editor;