import React, {useEffect, useRef} from 'react';
import {BsXCircleFill} from "react-icons/bs";
import {sidebarItems} from "~/constants";
import {Link, NavLink} from "react-router";
import {cn} from "~/lib/utils";
import {TbLayoutSidebarLeftExpandFilled, TbLogout2} from "react-icons/tb";
import {useDispatch, useSelector} from "react-redux";
import {stateActions} from "~/store/slice";
import {PiPaperPlaneTiltFill} from "react-icons/pi";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

function Sidebar() {
    let drawerRef = useRef(null);
    const dispatch = useDispatch();
    function toggleSideBar(ref: any) {
        ref.current.classList.toggle("custom-sidebar-hide");
        dispatch(stateActions.toggleSidebar())
    }

    const state = useSelector((state: any) => state.ui)

    useGSAP(() => {
        gsap.set("#sidebar", {
            visibility: "visible",
        })

        gsap.fromTo(
            "#sidebar",
            {
                opacity: 0,
                // left: "-100%",
            },
            {
                opacity: 1,
                duration: 0.5,
                // left: 0,
                ease: "power2.inOut",
            }
        )
    },{
        dependencies: [state.ui.isSidebarOpen],
    })

    useGSAP(() => {
        gsap.set("#header", {
            visibility: "visible",
        })
        gsap.set("#nav-list-item", {
            visibility: "visible",
        })
        gsap.set("#usercard", {
            visibility: "visible",
        })

        gsap.fromTo(
            "#logo-header",
            {
                opacity: 0,
                scale: 0.8,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power2.inOut",
            }
        )

        gsap.fromTo(
            ".nav-list-item",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
            }
        )

        gsap.fromTo(
            "#usercard",
            {
                opacity: 0,
                scale: 0.8,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power2.inOut",
            }
        )
    },{
        dependencies: [state.ui.isSidebarOpen],
    })

    return (
        <aside id={"sidebar"}>
            <div ref={drawerRef} className={`fixed md:relative top-0 left-0 w-full md:w-[280px] h-full bg-white z-50 pt-4 px-5 flex flex-col justify-between border border-slate-100 ${!state.ui.isSidebarOpen && 'custom-sidebar-hide'}`}>
                <div className={"flex items-center justify-between"}>
                    <div>
                        <Link to={"/"}>
                            <div className={"flex items-center justify-between gap-2"}>
                                <div className="flex items-center gap-2" id={"logo-header"}>
                                    <p className="text-xl text-blue-500"><PiPaperPlaneTiltFill /></p>
                                    <h2 className="text-gray-700 text-lg font-bold">Fly.</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <button onClick={() => toggleSideBar(drawerRef)} className="text-gray-700 text-xl cursor-pointer">
                        <BsXCircleFill/></button>
                </div>
                <hr className="my-4 border-slate-200" />
                <div className="flex flex-col flex-grow gap-2">
                    {sidebarItems.map((item, index) => (
                        <NavLink to={item.href} key={item.id} className="nav-list-item">
                            {({isActive}: { isActive: boolean }) => {
                                return <div className={cn('group nav-item', {
                                    'bg-slate-100 !text-slate-800 hover:!bg-slate-200': isActive,
                                })}>
                                    <item.icon />
                                    <p className="text-base">{item.label}</p>
                                </div>
                            }}
                        </NavLink>
                    ))}
                </div>
                <div className="flex p-3 border border-slate-100 rounded-xl mb-3" id={"usercard"}>
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