import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import {stateActions} from "~/store/slice";

function Navbar() {
    const user = {
        name: 'John Doe',
        email: 'contact@john.doe',
        avatar: '',
    }

    const dispatch = useDispatch();

    const state = useSelector((state: any) => state.ui)

    function toggleSidebar() {
        dispatch(stateActions.toggleSidebar())
    }
    return (
        <section className="flex items-center justify-between p-4 bg-white">
            <Link to={"/"}>
                <div className={"flex items-center justify-between gap-2"}>
                    <div className="flex items-center gap-2">
                        <p className="text-xl text-blue-500"><PiPaperPlaneTiltFill /></p>
                        <h2 className="text-gray-700 text-lg font-bold">Fly.</h2>
                    </div>
                </div>
            </Link>
            <button className="text-2xl text-gray-600 cursor-pointer" onClick={toggleSidebar}>
                <TbLayoutSidebarLeftExpandFilled/>
            </button>
        </section>
    );
}

export default Navbar;