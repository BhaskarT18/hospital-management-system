import React, { useState, useEffect } from "react";
import notification from "../../assets/images/notifications_none.png";
import darkmode from "../../assets/images/moon-solid_1.png";
import about from "../../assets/images/info_outline.png";
import Doctor from "../../assets/images/dr.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(null);

  // Check the path on initial render and set the selected section accordingly

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean); // Get non-empty path segments

    // Keywords to check for in the path
    const keywords = ["IPD", "OPD", "DASHBOARD"];

    // Find the keyword present in the path, if any
    const matchedKeyword = keywords.find(keyword =>
      pathSegments.some(segment => segment.toLowerCase() === keyword.toLowerCase())
    );

    // Set the selected section to the matched keyword or default to null if no match
    setSelectedSection(matchedKeyword || null);
  }, [location.pathname]);
  const handleClick = (section) => {
    setSelectedSection(section);
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <header className="flex justify-between items-center py-2 px-10 mx-2 w-full rounded-t-lg">
      <h1 className="text-xl font-bold mx-8">
        Welcome, <span className="text-red-500">Dr. Robert Harry</span>
      </h1>

      {/* OPD and IPD Section */}
      <div className="flex items-center space-x-4">
        <button
          className={`px-5 py-2 font-semibold text-sm rounded-full transition-all duration-200 ${
            selectedSection === "OPD"
              ? "bg-green-300 text-white"
              : "bg-white hover:bg-green-300 hover:text-white"
          }`}
          onClick={() => handleClick("OPD")}
        >
          OPD
        </button>
        <button
          className={`px-5 py-2 font-semibold text-sm rounded-full transition-all duration-200 ${
            selectedSection === "IPD"
              ? "bg-green-300 text-white"
              : "bg-white hover:bg-green-300 hover:text-white"
          }`}
          onClick={() => handleClick("IPD")}
        >
          IPD
        </button>
        <button
          className={`px-5 py-2 font-semibold text-sm rounded-full transition-all duration-200 ${
            selectedSection === "DASHBOARD"
              ? "bg-green-300 text-white"
              : "bg-white hover:bg-green-300 hover:text-white"
          }`}
          onClick={() => handleClick("DASHBOARD")}
        >
          DASHBOARD
        </button>
      </div>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4 bg-white p-2 rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-2 bg-gray-200 rounded-full hidden md:block"
        />
        <img
          src={notification}
          alt="Notification Bell"
          className="w-6 h-6 cursor-pointer"
        />
        <img
          src={darkmode}
          alt="Dark Mode Toggle"
          className="w-5 h-5 cursor-pointer"
        />
        <img src={about} alt="Information" className="w-6 h-6 cursor-pointer" />
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={Doctor} alt="Doctor Avatar" className="w-full h-full" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
