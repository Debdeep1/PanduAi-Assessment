import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ChatBox from "../components/ChatBox";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:min-w-[25%] lg:min-h-screen">
        <Sidebar />
      </div>

      <div className="w-full">
        <Topbar />
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;
