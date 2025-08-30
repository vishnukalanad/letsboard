import React from 'react';
import {Outlet} from "react-router";

function AdminLayout() {
    return (
        <div className={"admin-layout"}>
            AdminLayout
            <aside className="w-full max-w-[270px] hidden lg:block">
                sidebar
            </aside>
            <aside>
                <Outlet />
            </aside>
        </div>
    );
}

export default AdminLayout;