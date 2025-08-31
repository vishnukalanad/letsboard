import React from 'react';
import {Outlet} from "react-router";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import {Provider} from "react-redux";
import Store from "~/store";

function AdminLayout() {
    return (
       <Provider store={Store}>
           <div className="flex w-full min-h-screen">
               <Sidebar />
               <div className="flex-1 flex h-full">
                   <div className="w-full">
                       <Navbar />
                       <Outlet />
                   </div>
               </div>
           </div>
       </Provider>
    );
}

export default AdminLayout;