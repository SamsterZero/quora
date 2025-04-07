import Filter from "@/components/Filter";
import Profile from "@/components/Profile";

const buttons: string[] = [
    "Posts",
    "Questions",
    "Answers",
    "Followers",
    "Following",
    "Knows about",
    "Edits",
    "Activity",
];
const ProfilePage = () => {
    return (
        <div className="w-full p-2 flex flex-col gap-2">
            <Profile/>
            <Filter buttons={buttons} />
        </div>
    );
}

export default ProfilePage;