import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { IoLogOutOutline, IoNotifications } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-6 px-4 lg:px-12 border-b">
      <span className="text-gray-600 text-center lg:text-left mb-2 lg:mb-0">
        Take your Ai video generation game to the next level with Pandu Ai 2.0 -{" "}
        <span className="font-medium">Learn more</span>
      </span>
      <div className="flex items-center gap-3 text-gray-500">
        <SiNextdotjs className="text-green-800" size={18}/>
        <IoNotifications size={18}/>
        <IoLogOutOutline size={18}/>
      </div>
    </div>
  );
};

export default Topbar;
