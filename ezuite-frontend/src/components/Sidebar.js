import React from "react";
import {
  FaHome,
  FaClipboardList,
  FaCartPlus,
  FaWarehouse,
  FaChartBar,
  FaMoneyBillWave,
  FaWrench,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    { label: "Admin", icon: <FaHome /> },
    { label: "Core", icon: <FaClipboardList /> },
    { label: "Procurement", icon: <FaCartPlus /> },
    { label: "Inventory", icon: <FaWarehouse /> },
    { label: "Manufacture", icon: <FaWrench /> },
    { label: "Sales", icon: <FaMoneyBillWave /> },
    { label: "Finance", icon: <FaMoneyBillWave /> },
    { label: "Assets", icon: <FaChartBar /> },
    { label: "Services", icon: <FaClipboardList /> },
    { label: "CRM", icon: <FaWrench /> },
    { label: "Analytics", icon: <FaChartBar /> },
  ];

  return (
    <div className="sidebar bg-primary text-white">
      <h2 className="p-3">eZuite</h2>
      <ul className="list-unstyled">
        {menuItems.map((item, index) => (
          <li key={index} className="p-2 text-center">
            {" "}
            {/* Adjust padding for spacing */}
            <div className="flex flex-col items-center">
              {" "}
              {/* Use flexbox for vertical alignment */}
              <span className="text-2xl mb-1">{item.icon}</span>{" "}
              {/* Make icon bigger and add margin */}
              <span>{item.label}</span> {/* Label on a new line */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
