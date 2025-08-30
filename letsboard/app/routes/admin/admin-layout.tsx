import React from 'react';
import {Outlet} from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import {MobileSidebar, NavItems} from "../../../components";

function AdminLayout() {
    return (
        <div className={"admin-layout"}>
            <MobileSidebar />
            <aside className="w-full h-full max-w-[270px] hidden lg:block">
                <SidebarComponent width={270} height={"100%"} enableGestures={false}>
                    <NavItems />
                </SidebarComponent>
            </aside>
            <aside>
                <Outlet />
            </aside>
        </div>
    );
}

export default AdminLayout;