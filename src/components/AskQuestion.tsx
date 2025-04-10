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
                <div className="relative inline-block">
                    <Dropdown options={options}></Dropdown>
                </div>
            </div >
            <GrowingTextArea />
            <div className="flex gap-3 justify-end">
                <button
                    className="bg-neutral-700 text-white px-4 py-2 rounded-md hover:bg-neutral-600 transition">
                    Cancel
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    Submit
                </button>
            </div>
        </>
    );
}

export default AskQuestion