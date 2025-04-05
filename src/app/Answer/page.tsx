import Question from "@/components/Question";

const AnswerPage = () => {
    return (
        <>
            <div className="flex gap-2 w-full p-2 sticky top-0 z-50 bg-white dark:bg-black">
                <button className="border rounded px-3 py-1 border-neutral-700">For you</button>
                <button className="border rounded px-3 py-1 border-neutral-700">Request</button>
                <button className="border rounded px-3 py-1 border-neutral-700">Draft</button>
            </div>
            <div
                className="mx-auto w-full md:px-2 grid grid-cols-1 items-center gap-2">
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