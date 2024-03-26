import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 mt-0 bg-orange-300 shadow-md">
      <div className="flex justify-between items-center">
        <div className=" fixed text-black font-semibold">
          <Link
            to="/landingpage"
            className="mr-8 hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <div className="relative inline-block">
            <span
              className="mr-10 cursor-pointer hover:text-blue-500 transition-colors"
              onClick={toggleDropdown}
            >
              Message
            </span>
            {showDropdown && (
              <div className="absolute right-7 mt-1 bg-gray-400 bg-opacity-80">
                <Link
                  to="/message"
                  className="block text-black px-3 py-2 hover:text-blue-600 hover:bg-gray-200"
                >
                  Send text
                </Link>
                <Link
                  to="/image"
                  className="block text-black px-3 py-2 hover:text-blue-600 hover:bg-gray-200"
                >
                  Send image
                </Link>
                <Link
                  to="/pdf"
                  className="block text-black px-3 py-2 hover:text-blue-600 hover:bg-gray-200"
                >
                  Send pdf file
                </Link>
              </div>
            )}
          </div>

          <div className="relative inline-block">
            <span
              className="mr-2 cursor-pointer hover:text-blue-500 transition-colors"
              onClick={toggleDropdown}
            >
              Visitor
            </span>
            {showDropdown && (
              <div className="absolute left-0 mt-1 bg-gray-400 bg-opacity-80">
                <Link
                  to="/visitorrequest"
                  className="block text-black px-2 py-2 hover:text-blue-600 hover:bg-gray-200"
                >
                  Visitor request
                </Link>
                <Link
                  to="/visitorapproved"
                  className="block text-black px-2 py-2 hover:text-blue-600 hover:bg-gray-200"
                >
                  Visitor approved
                </Link>
                <Link
                  to="/visitorrejected"
                  className="block text-black px-2 py-2 hover:text-blue-600 hover:bg-gray-200"
                >
                  Visitor rejected
                </Link>

                <Link
                  to="/visitor_in"
                  className="block text-black px-2 py-2 hover:text-blue-600 hover:bg-gray-200"
                >
                  Visitor In
                </Link>
                <Link
                  to="/visitor_out"
                  className="block text-black px-2 py-2 hover:text-blue-600 hover:bg-gray-200"
                >
                  Visitor Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
