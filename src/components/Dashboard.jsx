import React from "react";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";
import Accueil from "../pages/Accueil";
import  Mesrv  from "../pages/Mesrv";
const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="w-1/5 h-screen bg-sky-300">
        <SideBar />
      </div>
      <div className="w-4/5 h-screen">
        <Outlet />
      </div>
    </div>

    
    
  );
};

export default Dashboard;
