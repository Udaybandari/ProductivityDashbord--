import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { sidebarItems } from "./constants";
import SideItem from "./SideItem";

const Sidebar = () => {
  return (
    <div className="bg-gray-900  dark:bg-white dark:text-black z-[9999] text-white w-[300px] ">
      <div className="flex flex-col mx-3 px-3 justify-center mt-3">
        {/* Top Logo/Header */}
        <div className="flex flex-row items-center justify-center gap-8 h-24 w-full rounded-md shadow-2xl">
          <MdOutlineHome className="text-5xl" />
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </div>

        {/* Menu Items */}
        <div className="mt-5">
          {sidebarItems.map(({ name, icon:Icon,route }) => (
            <SideItem key={name} icon={<Icon className="text-4xl"/>} name={name} route={route} />
    
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
