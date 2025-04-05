import Notification from "@/components/Notification";
import Filter from "@/components/Filter";

const buttons:string[] = [
    "All", "Stories", "Questons", "Spaces", "People",
    "Comments", "Upvotes", "Announcements", "Earnings",
    "Subscription", "Email", "Your Content", "Your Profile"
];

const NotificationsPage = () => {

    return (
        <>
            <div className="w-full p-2 sticky top-0 z-50 bg-white dark:bg-black">
                <Filter buttons = {buttons} />
            </div>
            <div className="w-full">
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
        </>
    );
}

export default NotificationsPage;