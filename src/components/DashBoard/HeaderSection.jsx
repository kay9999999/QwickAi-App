import React, { useState, useEffect } from "react";
import { FiSettings, FiX, FiSearch, FiMenu } from "react-icons/fi";
import { TbTemplate } from "react-icons/tb";
import { US, CN, ES, SA } from "country-flag-icons/react/3x2";
import Logo from "../../components/Logo";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GrCopy } from "react-icons/gr";
import { GoStack } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const HeaderSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeButton, setActiveButton] = useState("");

  // Mapping of button names to their respective route paths
  const buttonRoutes = {
    Dashboard: "/dashboard",
    "My Pages": "/my-pages",
    Versions: "/versions",
    Agents: "/agents",
    Template: "/template",
    Settings: "/settings",
  };

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);

    if (buttonRoutes[buttonName]) {
      navigate(buttonRoutes[buttonName]);
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleLangDropdown = () => setIsLangDropdownOpen(!isLangDropdownOpen);
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLangDropdownOpen(false);
  };

  useEffect(() => {
    // Handle setting the active button based on the current route
    const active = Object.entries(buttonRoutes).find(
      ([, route]) => route === location.pathname
    )?.[0];
    setActiveButton(active || "");

    // Handle window resizing to manage the menu state
    function handleResize() {
      if (window.innerWidth >= 640 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname, isMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="relative w-full bg-white border-b border-gray-200 px-4  md:px-6">
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/">
              <Logo color="#191D23" className="w-28 md:w-36" />
            </a>
          </div>

          {/* Right: Desktop Icons (visible on sm and up) */}
          <div className="hidden sm:flex items-center space-x-4">
            <button type="button" className=" rounded-full hover:bg-gray-100">
              <FiSearch size={20} className="text-[#5E6278]" />
            </button>
            <div className="relative pt-1">
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleLangDropdown}
              >
                <div className="w-5 h-5  rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
                  {selectedLanguage === "English" && (
                    <US width="100%" height="100%" className="scale-[1.5]" />
                  )}
                  {selectedLanguage === "Chinese" && (
                    <CN width="100%" height="100%" className="scale-[1.5]" />
                  )}
                  {selectedLanguage === "Español" && (
                    <ES width="100%" height="100%" className="scale-[1.5]" />
                  )}
                  {selectedLanguage === "Arabic" && (
                    <SA width="100%" height="100%" className="scale-[1.5]" />
                  )}
                </div>
              </button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 sm:w-40 bg-white rounded-md shadow-lg z-50 border border-[#625DCD]">
                  <div className="py-1">
                    {["English", "Chinese", "Español", "Arabic"].map((lang) => (
                      <button
                        key={lang}
                        className="flex items-center px-3 py-1.5 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={() => selectLanguage(lang)}
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center overflow-hidden mr-2">
                          {lang === "English" && (
                            <US
                              width="100%"
                              height="100%"
                              className="scale-[1.5]"
                            />
                          )}
                          {lang === "Chinese" && (
                            <CN
                              width="100%"
                              height="100%"
                              className="scale-[1.5]"
                            />
                          )}
                          {lang === "Español" && (
                            <ES
                              width="100%"
                              height="100%"
                              className="scale-[1.5]"
                            />
                          )}
                          {lang === "Arabic" && (
                            <SA
                              width="100%"
                              height="100%"
                              className="scale-[1.5]"
                            />
                          )}
                        </div>
                        <span>{lang}</span>
                        {selectedLanguage === lang && (
                          <span className="ml-auto text-green-500">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              className=" rounded-full hover:bg-gray-100"
              title="Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="#5E6278"
                  fillOpacity="0.3"
                  d="M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748c3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18z"
                />
                <path fill="#5E6278" d="M8.126 19a4.002 4.002 0 0 0 7.748 0z" />
              </svg>
            </button>
            <button type="button" className=" rounded-full hover:bg-gray-100">
              <FiSettings
                size={20}
                strokeWidth={2}
                className="text-[#5E6278]"
              />
            </button>
            <img
              src="/images/account-img.png"
              alt="Account"
              className="w-10 h-10 rounded-full border border-gray-300 object-cover"
            />
            <div className="flex flex-col text-[#333333] text-sm space-y-1">
              <span className="font-normal">Admin</span>
              <span className="font-semibold">Carolyn Perkins</span>
            </div>
          </div>

          {/* Right: Mobile Hamburger (visible below sm) */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <FiX size={24} className="text-[#5E6278]" />
              ) : (
                <FiMenu size={24} className="text-[#5E6278]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[64px] left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50">
            <div className="px-4 py-3">
              <ul className="space-y-3">
                {/* Search */}
                <li className="flex items-center">
                  <FiSearch size={20} className="text-[#5E6278] mr-2" />
                  <span className="text-sm text-[#666F8D]">Search</span>
                </li>
                {/* Language */}
                <li className="flex items-center">
                  <div className="relative">
                    <button
                      className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none"
                      onClick={toggleLangDropdown}
                    >
                      <div className="w-5 h-5 rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
                        {selectedLanguage === "English" && (
                          <US
                            width="100%"
                            height="100%"
                            className="scale-[1.5]"
                          />
                        )}
                        {selectedLanguage === "Chinese" && (
                          <CN
                            width="100%"
                            height="100%"
                            className="scale-[1.5]"
                          />
                        )}
                        {selectedLanguage === "Español" && (
                          <ES
                            width="100%"
                            height="100%"
                            className="scale-[1.5]"
                          />
                        )}
                        {selectedLanguage === "Arabic" && (
                          <SA
                            width="100%"
                            height="100%"
                            className="scale-[1.5]"
                          />
                        )}
                      </div>
                      <span className="ml-2 text-sm text-[#666F8D]">
                        Language
                      </span>
                    </button>
                    {isLangDropdownOpen && (
                      <div className="absolute top-[-14px] left-28 mt-2 w-36 sm:w-40 bg-white rounded-md shadow-lg border border-[#625DCD] overflow-hidden">
                        <div className="py-1">
                          {["English", "Chinese", "Español", "Arabic"].map(
                            (lang) => (
                              <button
                                key={lang}
                                className="flex items-center px-3 py-1.5 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                onClick={() => selectLanguage(lang)}
                              >
                                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center overflow-hidden mr-2">
                                  {lang === "English" && (
                                    <US
                                      width="100%"
                                      height="100%"
                                      className="scale-[1.5]"
                                    />
                                  )}
                                  {lang === "Chinese" && (
                                    <CN
                                      width="100%"
                                      height="100%"
                                      className="scale-[1.5]"
                                    />
                                  )}
                                  {lang === "Español" && (
                                    <ES
                                      width="100%"
                                      height="100%"
                                      className="scale-[1.5]"
                                    />
                                  )}
                                  {lang === "Arabic" && (
                                    <SA
                                      width="100%"
                                      height="100%"
                                      className="scale-[1.5]"
                                    />
                                  )}
                                </div>
                                <span>{lang}</span>
                                {selectedLanguage === lang && (
                                  <span className="ml-auto text-green-500 text-xs">
                                    ✓
                                  </span>
                                )}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                {/* Profile */}
                <li className="flex items-center">
                  <button
                    type="button"
                    className="flex items-center rounded hover:bg-gray-100  focus:outline-none"
                    title="Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill="#5E6278"
                        fillOpacity="0.3"
                        d="M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748c3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18z"
                      />
                      <path
                        fill="#5E6278"
                        d="M8.126 19a4.002 4.002 0 0 0 7.748 0z"
                      />
                    </svg>
                    <span className="text-sm ml-2 text-[#666F8D]">
                      Notifications
                    </span>
                  </button>
                </li>

                {/* Settings */}
                <li className="flex items-center">
                  <button
                    type="button"
                    className="flex items-center rounded hover:bg-gray-100 focus:outline-none"
                  >
                    <FiSettings
                      size={18}
                      strokeWidth={2}
                      className="text-[#5E6278] "
                    />
                    <span className="text-sm text-[#666F8D] ml-2">
                      Settings
                    </span>
                  </button>
                </li>

                {/* Account Info */}
                <li className="flex items-center">
                  <img
                    src="/images/account-img.png"
                    alt="Account"
                    className="w-10 h-10 rounded-full border border-gray-300 object-cover mr-2"
                  />
                  <div className="flex flex-col text-sm text-[#333333]">
                    <span className="font-normal">Admin</span>
                    <span className="font-semibold">Carolyn Perkins</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* Navigation */}
      <div className="bg-white px-4 py-2 flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-3 text-sm text-[#666F8D] font-semibold shadow-md">
        <button
          onClick={() => handleClick("Dashboard")}
          className={`flex items-center space-x-1 py-2 px-2 rounded cursor-pointer ${
            activeButton === "Dashboard"
              ? "text-[#4F46E5] font-semibold"
              : "text-[#666F8D] font-medium"
          }`}
        >
          <AiOutlineAppstoreAdd size={20} />
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => handleClick("My Pages")}
          className={`flex items-center space-x-1 py-2 px-2 rounded cursor-pointer ${
            activeButton === "My Pages"
              ? "text-[#4F46E5] font-semibold"
              : "text-[#666F8D] font-medium"
          }`}
        >
          <GrCopy size={18} />
          <span>My Pages</span>
        </button>
        <button
          onClick={() => handleClick("Versions")}
          className={`flex items-center space-x-1 py-2 px-2 rounded cursor-pointer ${
            activeButton === "Versions"
              ? "text-[#4F46E5] font-semibold"
              : "text-[#666F8D] font-medium"
          }`}
        >
          <GoStack size={20} />
          <span>Versions</span>
        </button>
        <button
          onClick={() => handleClick("Agents")}
          className={`flex items-center space-x-1 py-2 px-2 rounded cursor-pointer ${
            activeButton === "Agents"
              ? "text-[#4F46E5] font-semibold"
              : "text-[#666F8D] font-medium"
          }`}
        >
          <MdSupportAgent size={20} />
          <span>Agents</span>
        </button>
        <button
          onClick={() => handleClick("Template")}
          className={`flex items-center space-x-1 py-2 px-2 rounded cursor-pointer ${
            activeButton === "Template"
              ? "text-[#4F46E5] font-semibold"
              : "text-[#666F8D] font-medium"
          }`}
        >
          <TbTemplate size={20} />
          <span>Template</span>
        </button>
        <button
          onClick={() => handleClick("Settings")}
          className={`flex items-center space-x-1 py-2 px-2 rounded cursor-pointer ${
            activeButton === "Settings"
              ? "text-[#4F46E5] font-semibold"
              : "text-[#666F8D] font-medium"
          }`}
        >
          <FiSettings size={18} />
          <span>Settings</span>
        </button>
      </div>
    </>
  );
};

export default HeaderSection;
