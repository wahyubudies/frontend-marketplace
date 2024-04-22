import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";
import { useEffect } from "react";

import { store } from "../../store";
import { logoutUser } from "../../features/auth/authSlice";
import { GeneralUtility } from "../../utils";

const AdminLayout = () => {
    useEffect(() => {
        const userInfo = GeneralUtility.getUserInfo();
        if (!userInfo) {
            return store.dispatch(logoutUser());
        }
    }, []);

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