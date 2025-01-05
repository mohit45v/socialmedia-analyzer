import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaCog, FaInfoCircle, FaTachometerAlt, FaChartLine } from "react-icons/fa";
import Logo from "../assets/socialpulse.png"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Dashboard", icon: <FaChartBar  />, path: "/dashboard" },
    { name: "Analytics", icon: <FaTachometerAlt/>, path: "/analytics" },
    { name: "Insights", icon: <FaChartLine />, path: "" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
    { name: "About", icon: <FaInfoCircle />, path: "/about" },
  ];

  return (
    <div className={`flex h-screen`}>
      
      <div
        className={`bg-yellow-400 text-black transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {/* <h1
            className={`text-xl font-bold ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            
          </h1> */}
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white"
          >
            <img src={Logo}/>
          </button>
        </div>
        <nav className="mt-4 px-2">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="flex items-center gap-4 py-4 px-4 hover:bg-yellow-500 transition-colors"
            >
              <div className="text-xl">{item.icon}</div>
              <span
                className={`text-sm font-medium ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      
      
    </div>
  );
};

export default Sidebar;
