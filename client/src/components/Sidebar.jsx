import React, { useState } from "react";
import {
  RiChatNewLine,
  RiMoneyDollarCircleFill,
} from "react-icons/ri";
import {
  MdOutlineBrandingWatermark,
  MdOutlineSlowMotionVideo,
  MdVideoSettings,
} from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { TbBulb } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  const listItems = [
    {
      icon: <RiChatNewLine size={20} />,
      name: "Generate New Video",
      link: "/",
      subCat: false,
    },
    {
      icon: <MdOutlineSlowMotionVideo size={20} />,
      name: "Explore",
      link: "/",
      subCat: false,
    },
    {
      icon: <IoLibrary size={20} />,
      name: "Library",
      link: "/",
      subCat: true,
      subCategory: [
        {
          name: "History of Payments",
          link: "/",
        },
        {
          name: "Future of Ai Industry",
          link: "/",
        },
      ],
    },
    {
      icon: <MdOutlineBrandingWatermark size={20} />,
      name: "Branding",
      link: "/",
      subCat: false,
    },
    {
      icon: <RiMoneyDollarCircleFill size={20} />,
      name: "Affiliate",
      link: "/",
      subCat: true,
      subCategory: [
        {
          name: "Referal Plan",
          link: "/",
        },
      ],
    },
    {
      icon: <MdVideoSettings size={20} />,
      name: "Usage",
      link: "/",
      subCat: false,
    },
    {
      icon: <TbBulb size={20} />,
      name: "Feature Request",
      link: "/",
      subCat: false,
    },
    {
      icon: <FaDiscord size={20} />,
      name: "Join Discord",
      link: "/",
      subCat: false,
    },
  ];

  const toggleExpand = (itemName) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (listItems.find((item) => item.name === itemName)?.subCat) {
      toggleExpand(itemName);
    }
  };

  return (
    <div className="min-h-full text-white bg-slate-700 rounded-l-2xl flex flex-col justify-between">
      <div>
        <div className="w-32 lg:w-60 mx-auto my-4 lg:my-0">
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <div>
          <ul className="mr-6">
            {listItems.map((item, index) => (
              <li key={index} className="my-2 text-lg">
                <div
                  className={`flex px-4 py-2 gap-2 items-center cursor-pointer hover:bg-green-400 hover:rounded-r-full hover:text-slate-800 ${
                    activeItem === item.name
                      ? "bg-green-400 rounded-r-full text-slate-800"
                      : ""
                  }`}
                  onClick={() => handleItemClick(item.name)}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </div>

                {item.subCat && expandedItems.includes(item.name) && (
                  <ul>
                    {item.subCategory.map((subItem, subIndex) => (
                      <li
                        className="text-base p-1 pl-8 mt-1 hover:bg-green-400 hover:rounded-r-full hover:text-slate-800"
                        key={subIndex}
                      >
                        - {subItem.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center m-4">
        <div className="mt-4 w-full h-2 rounded-full mb-3 bg-slate-900">
          <div
            className="h-2 bg-green-400 rounded-full"
            style={{ width: "40%" }}
          ></div>
        </div>
        <button className="px-4 py-2 bg-green-400 text-slate-700 rounded w-full mb-3">
          Upgrade Plan
        </button>
        <span>App version - 1.1</span>
      </div>
    </div>
  );
};

export default Sidebar;
