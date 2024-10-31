import React from "react";
import { FaBell, FaStar, FaCog } from "react-icons/fa";

function Header() {
  return (
    <header
      className="d-flex justify-content-between align-items-center p-3"
      style={headerStyle}
    >
      <h5 style={{ color: "#FFFFFF" }}>Admin {">"} User</h5>
      <div className="user-controls d-flex align-items-center">
        <FaBell className="mx-2" style={iconStyle} title="Notifications" />
        <FaStar className="mx-2" style={iconStyle} title="Favorites" />
        <FaCog className="mx-2" style={iconStyle} title="Settings" />
        <span className="badge ms-2" style={badgeStyle}>
          L
        </span>
      </div>
    </header>
  );
}

const headerStyle = {
  background: "linear-gradient(90deg, #007bff, #00aaff)", // Gradient similar to the screenshot
  color: "#FFFFFF", // White text color for readability
  borderBottom: "2px solid #0056b3", // Optional bottom border for definition
};

const iconStyle = {
  color: "#FFFFFF", // White icon color to match the header
  fontSize: "1.2em", // Slightly larger icon size
};

const badgeStyle = {
  backgroundColor: "#6c757d", // Bootstrap secondary color
  color: "#FFFFFF", // White text color for the badge
  padding: "0.5em 0.7em",
  borderRadius: "50%",
};

export default Header;
