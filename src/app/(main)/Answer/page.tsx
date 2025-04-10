import Filter from "@/components/Filter";
import Question from "@/components/Question";

export const metadata = {
    title: "Quora - Answer",
  };

  const buttons: Filter[] = [
    { text: "For you" },
    { text: "Request" },
    { text: "Draft" },
  ];
  

const AnswerPage = () => {
    return (
        <>
            <div className="flex gap-2 w-full p-2 sticky top-0 z-50 bg-white dark:bg-black">
                <Filter filters = {buttons} />
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