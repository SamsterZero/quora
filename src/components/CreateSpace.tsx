import GrowingTextArea from "./GrowingTextArea";

const CreateSpace = () => {
    return (
        <div className="p-2">
            <h4
                className="text-2xl"
            >
                Create a Space
            </h4>
            <label
                className="text-xl"
            >
                Name
            </label>
            <GrowingTextArea
                limit={65}
                className="w-full text-2xl p-2 border border-gray-400 bg-inherit focus:outline-none focus:border-blue-500 resize-none overflow-hidden"
                placeholder="Name your space here..."
            />
            <label
                className="text-xl"
            >
                Description
            </label>
            <GrowingTextArea
                limit={250}
                className="w-full text-2xl p-2 border border-gray-400 bg-inherit focus:outline-none focus:border-blue-500 resize-none overflow-hidden"
                placeholder="Describe your space here..."
            />
            <div className="flex gap-3 justify-end">
                <button
                    className="self-end bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    Create
                </button>
            </div>
        </div>
    );
}
export default CreateSpace;