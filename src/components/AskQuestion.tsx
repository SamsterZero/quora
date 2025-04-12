import ProfilePhoto from "./ProfilePhoto";
import Dropdown from "./Dropdown";
import GrowingTextArea from "./GrowingTextArea";

const AskQuestion = () => {

    const options = [
        { value: 'public', label: 'Public', icon: 'public' },
        { value: 'limited', label: 'Limited', icon: 'lock' }
    ];

    return (
        <>
            <div className="flex gap-4 p-2">
                <ProfilePhoto widthClass="w-10" />
                {/* <div className="relative inline-block"> */}
                <Dropdown options={options}></Dropdown>
                {/* </div> */}
            </div >
            <GrowingTextArea
                limit={500}
                className="border-b border-gray-400 bg-inherit focus:outline-none focus:border-blue-500 w-full text-2xl p-2 resize-none overflow-hidden"
                placeholder="Ask whatever you feel like asking"
            />
            <button
                className="self-end bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Submit
            </button>
        </>
    );
}

export default AskQuestion