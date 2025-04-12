import Dropdown from "./Dropdown";
import GrowingTextArea from "./GrowingTextArea";
import ProfilePhoto from "./ProfilePhoto";

const AddPost = () => {

    const options = [
        { value: 'public', label: 'Public', icon: 'public' }
    ];

    return (
        <>
            <div className="flex gap-4 p-2">
                <ProfilePhoto widthClass="w-10" />
                <Dropdown options={options} />
            </div>
            <GrowingTextArea
                limit={5000}
                className="bg-inherit focus:outline-none focus:border-blue-500 w-full text-2xl p-2 resize-none overflow-hidden"
                placeholder="Tell us about your toughts here..."
            />
            <button
                className="self-end bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Post
            </button>
        </>
    );
}
export default AddPost