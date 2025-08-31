import React, {useEffect, useRef} from 'react';
import {BsXCircleFill} from "react-icons/bs";
import {sidebarItems} from "~/constants";
import {NavLink} from "react-router";
import {cn} from "~/lib/utils";
import { TbLogout2 } from "react-icons/tb";
import {useDispatch, useSelector} from "react-redux";
import {stateActions} from "~/store/slice";

function Sidebar() {
    let drawerRef = useRef(null);
    const dispatch = useDispatch();
    function toggleSideBar(ref: any) {
        ref.current.classList.toggle("custom-sidebar-hide");
        dispatch(stateActions.toggleSidebar())
    }

    const state = useSelector((state: any) => state.ui)

    return (
        <aside>
            <div ref={drawerRef} className={`relative top-0 left-0 w-3/4 md:w-[280px] h-full bg-white z-50 pt-4 px-5 flex flex-col justify-between border border-slate-100 ${!state.ui.isSidebarOpen && 'custom-sidebar-hide'}`}>
                <div className={"flex items-center justify-end"}>
                    <button onClick={() => toggleSideBar(drawerRef)} className="text-gray-700 text-xl cursor-pointer">
                        <BsXCircleFill/></button>
                </div>
                <hr className="my-4 border-slate-200" />
                <div className="flex flex-col flex-grow gap-2">
                    {sidebarItems.map((item, index) => (
                        <NavLink to={item.href} key={item.id}>
                            {({isActive}: { isActive: boolean }) => {
                                return <div className={cn('group nav-item', {
                                    'bg-slate-100 !text-slate-800 hover:!bg-slate-200': isActive,
                                })}>
                                    <item.icon />
                                    {item.label}
                                </div>
                            }}
                        </NavLink>
                    ))}
                </div>
                <div className="flex p-3 border border-slate-100 rounded-xl mb-3">
                    <div className="flex gap-2 align-center items-center">
                        <img src="/assets/images/michael.webp" alt="" className="w-10 h-10 rounded-full" />
                        <div className="flex flex-col">
                            <p className="m-0 text-base text-slate-700">John Doe</p>
                            <p className="m-0 text-sm text-slate-400">something@john.doe</p>
                        </div>
                        <button className="text-xl cursor-pointer text-gray-500">
                            <TbLogout2/>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;