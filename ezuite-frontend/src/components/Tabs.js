import React, { useState } from "react";
import {
  FaFileAlt,
  FaCheckCircle,
  FaBan,
  FaTrashAlt,
  FaFilter,
} from "react-icons/fa";

const Tabs = ({ activeTab, setActiveTab }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const totalItems = 40; // Example total items count
  const itemsPerPage = 10; // Define how many items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages
  const [currentPage, setCurrentPage] = useState(1); // State for current page

  const tabs = [
    { name: "Drafts", icon: <FaFileAlt /> },
    { name: "Active", icon: <FaCheckCircle /> },
    { name: "Inactive", icon: <FaBan /> },
    { name: "Deleted", icon: <FaTrashAlt /> },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex space-x-4 border-b border-gray-200 flex-grow">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex items-center py-2 px-4 ${
              activeTab === tab.name
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {/* Tab icon */}
            <span className="mr-2">{tab.icon}</span>
            {/* Tab name */}
            {tab.name} {/* Tab count */}
            <span className="ml-1 text-xs bg-gray-200 rounded-full px-2">
              {totalItems}
            </span>
          </button>
        ))}
      </div>
      {/* Search Input with Filter Icon */}
      <div className="relative mx-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded pl-10 pr-3 py-1"
        />
        <FaFilter className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      {/* Pagination */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded bg-gray-200 text-gray-700"
        >
          &lt;
        </button>
        {/* Page numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-2 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        {/* Dots for additional pages if necessary */}
        {totalPages > 3 && currentPage < totalPages - 1 && (
          <span className="text-gray-500">...</span>
        )}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded bg-gray-200 text-gray-700"
        >
          &gt;
        </button>
        {/* Ellipsis icon */}
        <svg
          className="w-10 h-10 text-gray-800 dark:text-white ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M6 12h.01m6 0h.01m5.99 0h.01"
          />
        </svg>
      </div>
    </div>
  );
};

export default Tabs;
