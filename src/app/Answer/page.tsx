import Question from "@/components/Question";

export const metadata = {
    title: "Quora - Answer",
  };
const AnswerPage = () => {
    return (
        <>
            <div className="flex gap-2 w-full p-2 sticky top-0 z-50 bg-white dark:bg-black">
                <button className="rounded px-3 py-1 bg-red-100 dark:bg-neutral-800 shadows-lg">For you</button>
                <button className="rounded px-3 py-1 bg-red-100 dark:bg-neutral-800 shadows-lg">Request</button>
                <button className="rounded px-3 py-1 bg-red-100 dark:bg-neutral-800 shadows-lg">Draft</button>
            </div>
            <div
                className="mx-auto w-full md:px-2 grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
            </div>
        </>
    );
}

export default AnswerPage;