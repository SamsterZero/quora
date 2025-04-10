import { ReactElement } from "react";
import Filter from "./Filter";

const buttons: Filter[] = [
    {
        text: "Ask Question",
        link: "Question"
    },
    {
        text: "Create Post",
        link: "Post"
    },
    {
        text: "Create Space",
        link: "Space"
    },
];


const Editor = (
    { children }: Readonly<{ children: ReactElement }>
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