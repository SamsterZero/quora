import Filter from "@/components/Filter";
import Profile from "@/components/Profile";

const buttons: Filter[] = [
    { text: "Posts" },
    { text: "Questions" },
    { text: "Answers" },
    { text: "Followers" },
    { text: "Following" },
    { text: "Knows about" },
    { text: "Edits" },
    { text: "Activity" },
  ];
  
const ProfilePage = () => {
    return (
        <div className="w-full p-2 flex flex-col gap-2">
            <Profile/>
            <Filter filters={buttons} />
        </div>
    );
}

export default ProfilePage;