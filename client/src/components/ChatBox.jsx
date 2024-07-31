import React, { useState } from "react";
import { BsPaperclip } from "react-icons/bs";
import { RiChatNewLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ChatBox = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const buttons = [
    { name: "Video Type" },
    { name: "Voice" },
    { name: "Template" },
    { name: "Branding" },
    { name: "Background" },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="min-h-screen my-12 mx-4 md:mx-24 border rounded-xl p-4 text-center flex flex-col justify-between">
      <div className="my-4">
        <h3 className="text-3xl text-slate-800">Generate Series</h3>
        <span className="text-gray-500">
          Create engaging video content effortlessly with Pandu Ai.
        </span>
      </div>

      {/* chatinput box */}
      <div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3 mb-4">
          {buttons.map((button) => (
            <div key={button.name} className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown(button.name)}
                className="text-slate-600 border rounded-full px-4 py-2 flex items-center"
              >
                {button.name} <MdOutlineKeyboardArrowDown />
              </button>
              {openDropdown === button.name && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Option 3
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center border rounded-full p-2">
          <div className="bg-slate-800 text-white p-3 rounded-full">
            <BsPaperclip size={24} />
          </div>

          <input
            type="text"
            placeholder="Type your video prompt"
            className="flex-grow p-2 bg-transparent outline-none"
          />
          <button className="bg-gray-800 text-white rounded-full px-4 py-2 mx-2 flex items-center">
            Generate Video
            <RiChatNewLine size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
