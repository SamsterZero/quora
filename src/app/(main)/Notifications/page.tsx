import Notification from "@/components/Notification";
import Filter from "@/components/Filter";

const buttons: Filter[] = [
    { text: "All" },
    { text: "Stories" },
    { text: "Questons" },
    { text: "Spaces" },
    { text: "People" },
    { text: "Comments" },
    { text: "Upvotes" },
    { text: "Announcements" },
    { text: "Earnings" },
    { text: "Subscription" },
    { text: "Email" },
    { text: "Your Content" },
    { text: "Your Profile" },
  ];
  

const NotificationsPage = () => {

    return (
        <>
            <div className="w-full p-2 sticky top-0 z-50 bg-white dark:bg-black">
                <Filter filters={buttons} />
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