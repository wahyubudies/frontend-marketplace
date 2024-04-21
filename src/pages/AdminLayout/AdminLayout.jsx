import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";

const AdminLayout = () => {
    return (
        <div className="flex items-stretch">
            <Sidebar />
            <div className="py-8 px-12 flex-grow bg-gray-200 h-dvh overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;