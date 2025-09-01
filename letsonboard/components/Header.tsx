import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {stateActions} from "~/store/slice";
import {HiMenu} from "react-icons/hi";
import {PiPaperPlaneTiltFill} from "react-icons/pi";
import {Link} from "react-router";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

function Header({title, description}: { title: string, description: string}) {
    const dispatch = useDispatch();

    const state = useSelector((state: any) => state.ui)

    function toggleSidebar() {
        dispatch(stateActions.toggleSidebar())
    }

    useGSAP(() => {
        gsap.set("#header", {
            visibility: "visible",
        })

        gsap.fromTo(
            "#header",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
            }
        )

    },{
        dependencies: [state.ui.isSidebarOpen],
    })

    return (
        <>
            <div className="items-center justify-between px-6 py-4 gap-4 flex bg-white md:bg-transparent" id={"header"}>
                <div className={`flex ${state.ui.isSidebarOpen ? 'md:hidden' : 'md:flex'}`}>
                    <Link to={"/"}>
                        <div className={"flex items-center justify-between gap-2"}>
                            <div className="flex items-center gap-2">
                                <p className="text-xl text-blue-500"><PiPaperPlaneTiltFill/></p>
                                <h2 className="text-gray-700 text-lg font-bold">Fly.</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={`hidden md:flex md:flex-col ${!state.ui.isSidebarOpen && 'text-center'}`} id={"header-content"}>
                    <h2 className="text-base md:text-lg text-slate-700 font-medium">{title}</h2>
                    <p className="text-xs md:text-sm text-slate-500">{description}</p>
                </div>
                <div className={`flex align-center ${state.ui.isSidebarOpen && 'hidden'}`}>
                    <button className="text-2xl text-gray-600 cursor-pointer" onClick={toggleSidebar}>
                        <HiMenu/>
                    </button>
                </div>
            </div>
            <div className={`flex md:hidden flex-col gap-1 px-6 py-2 bg-slate-900`}>
                <h2 className="text-base md:text-lg text-slate-200">{title}</h2>
                <p className="text-xs md:text-sm text-slate-400">{description}</p>
            </div>
        </>
    );
}

export default Header;