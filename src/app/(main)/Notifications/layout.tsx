import { ReactNode } from "react";

const NotificationLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <div className="w-full">
        { children }
        </div>
    )
}
export default NotificationLayout;