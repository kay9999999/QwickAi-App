import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineCopy } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";

import Logo from "./Logo";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-16 bg-white border-b border-gray-200 px-4 md:px-6">
      {/* Left: Logo / Brand Name */}
      <div className="flex items-center">
        <Logo color="#191D23" className="w-36 h-36" />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button type="button" className="p-2 rounded-full hover:bg-gray-100">
          <FiSearch size={20} className="text-[#5E6278]" />
        </button>

        {/* Country Flag */}
        <img
          src="/images/country.png"
          alt="Country Flag"
          className="w-6 h-6 rounded-full object-cover"
        />

        {/* Profile Icon */}
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-100"
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

        {/* Settings Icon */}
        <button type="button" className="p-2 rounded-full hover:bg-gray-100">
          <CiSettings size={22} strokeWidth={0.8} className="text-[#5E6278]" />
        </button>

        {/* Account Image */}
        <img
          src="/images/account-img.png"
          alt="Account"
          className="w-10 h-10 rounded-full border border-gray-300 object-cover"
        />
      </div>
    </header>
  );
};

const PagesDashboard = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 p-2.5 ">
      <div className="shadow-lg border-[#F0F2F5] rounded-2xl overflow-hidden">
        {/* Top Navbar */}
        <Header />

        {/* Main Content */}
        <main className=" flex flex-col ">
          <div className="p-4 space-x-6 text-sm text-[#7E8299] font-semibold shadow-lg ">
            <button
              onClick={() => handleClick("Dashboard")}
              className={`py-2 px-[13px] rounded cursor-pointer ${
                activeButton === "Dashboard"
                  ? "text-[#19213D] bg-[#E4E6EF]"
                  : "text-[#7E8299] bg-transparent"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => handleClick("My Pages")}
              className={`py-2 px-[13px] rounded cursor-pointer ${
                activeButton === "My Pages"
                  ? "text-[#19213D] bg-[#E4E6EF]"
                  : "text-[#7E8299] bg-transparent"
              }`}
            >
              My Pages
            </button>
            <button
              onClick={() => handleClick("Versions")}
              className={`py-2 px-[13px] rounded cursor-pointer ${
                activeButton === "Versions"
                  ? "text-[#19213D] bg-[#E4E6EF]"
                  : "text-[#7E8299] bg-transparent"
              }`}
            >
              Versions
            </button>
          </div>
          <div className="p-6"></div>
          <div className="flex flex-col lg:flex-row">
            {/* Left Content Area */}

            <div className="w-full lg:max-w-[70vw] mx-4">
              <section className="bg-[#F8F9FC] rounded-2xl shadow px-3 py-4  space-y-6 overflow-hidden ">
                {/* Page ID & Info */}
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold mb-1">
                    PAGE ID: A001
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Your AI-assistant is Live! What’s Next?
                  </h2>
                </div>

                {/* Embed Code Box */}
                <div className="bg-white border border-gray-200 rounded-md p-4 space-y-4">
                  <p className="text-sm text-gray-700">
                    Copy this code and paste it into your website’s
                    <code className="bg-gray-100 px-1 rounded mx-1">
                      {"<head>"}
                    </code>
                    section
                  </p>
                  <div className="relative bg-gray-100 p-3 rounded text-sm text-gray-700 font-mono break-all">
                    {/* Placeholder code snippet */}
                    &lt;script src="https://your-ai-assistant.js"
                    async&gt;&lt;/script&gt;
                    <button
                      type="button"
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      title="Copy Code"
                    >
                      <AiOutlineCopy size={20} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Example: &lt;head&gt; &lt;script&gt; ... &lt;/script&gt;
                    &lt;/head&gt;
                  </p>
                  <div className="flex items-center space-x-2 text-blue-600 text-sm cursor-pointer hover:underline">
                    <FaRegQuestionCircle size={16} />
                    <span>Need help to embed on your platform?</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Want to edit your SEM page?
                  </h3>
                  {/* Tabs */}
                  <div className="flex items-center space-x-4 border-b border-gray-200 mb-4">
                    <button className="py-2 text-sm font-semibold text-blue-600 border-b-2 border-blue-600">
                      Smart AI Mode
                    </button>
                    <button className="py-2 text-sm text-gray-500 hover:text-blue-600">
                      Customization
                    </button>
                    <button className="py-2 text-sm text-gray-500 hover:text-blue-600">
                      Advanced
                    </button>
                  </div>

                  {/* Card Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* 1. Branding */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                      <div className="text-sm font-semibold flex items-center justify-between">
                        Branding
                        <HiOutlineInformationCircle className="text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500">
                        Customize brand colors, fonts, etc.
                      </p>
                    </div>

                    {/* 2. Phone Agent */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                      <div className="text-sm font-semibold flex items-center justify-between">
                        Phone Agent
                        <HiOutlineInformationCircle className="text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500">
                        Enable phone-based AI agent
                      </p>
                    </div>

                    {/* 3. WhatsApp Agent */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                      <div className="text-sm font-semibold flex items-center justify-between">
                        WhatsApp Agent
                        <HiOutlineInformationCircle className="text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500">
                        Connect your WhatsApp for quick support
                      </p>
                    </div>

                    {/* 4. Facebook Messenger */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                      <div className="text-sm font-semibold flex items-center justify-between">
                        Facebook Messenger
                        <HiOutlineInformationCircle className="text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500">
                        Use Messenger as an AI channel
                      </p>
                    </div>

                    {/* 5. Instagram Messenger */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                      <div className="text-sm font-semibold flex items-center justify-between">
                        Instagram Messenger
                        <HiOutlineInformationCircle className="text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500">
                        Connect your IG for direct messaging
                      </p>
                    </div>

                    {/* 6. More Channels */}
                    <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                      <div className="text-sm font-semibold flex items-center justify-between">
                        More Channels
                        <HiOutlineInformationCircle className="text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500">
                        Explore more integrations
                      </p>
                    </div>
                  </div>

                  {/* Second Row of Cards (Visibility, GA, etc.) */}
                  <div className="mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* 7. Visibility Enhancements */}
                      <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                        <div className="text-sm font-semibold flex items-center justify-between">
                          Visibility Enhancements
                          <HiOutlineInformationCircle className="text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">
                          Boost search ranking
                        </p>
                      </div>

                      {/* 8. First Page Title */}
                      <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                        <div className="text-sm font-semibold flex items-center justify-between">
                          First Page Title
                          <HiOutlineInformationCircle className="text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">
                          Customize page title
                        </p>
                      </div>

                      {/* 9. Prompt */}
                      <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                        <div className="text-sm font-semibold flex items-center justify-between">
                          Prompt
                          <HiOutlineInformationCircle className="text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">
                          Fine-tune the assistant’s greeting
                        </p>
                      </div>

                      {/* 10. Keywords Phase */}
                      <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                        <div className="text-sm font-semibold flex items-center justify-between">
                          Keywords Phase
                          <HiOutlineInformationCircle className="text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">
                          Define top keywords
                        </p>
                      </div>

                      {/* 11. GA Account */}
                      <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                        <div className="text-sm font-semibold flex items-center justify-between">
                          GA Account
                          <HiOutlineInformationCircle className="text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">
                          Integrate Google Analytics
                        </p>
                      </div>

                      {/* 12. Get an Expert */}
                      <div className="bg-white border border-gray-200 rounded-md p-4 space-y-2">
                        <div className="text-sm font-semibold flex items-center justify-between">
                          Get an Expert
                          <HiOutlineInformationCircle className="text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-500">
                          Let us help you set things up
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Preview Panel */}
            <aside className="w-full md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200 px-6 py-6 space-y-4 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  Landing page preview
                </h3>
                <FiChevronDown className="text-gray-500" />
              </div>
              {/* Phone Mockup / Chat Preview */}
              <div className="relative w-full border border-gray-200 rounded-md overflow-hidden bg-white">
                {/* Top bar of phone */}
                <div className="h-8 bg-gray-800 flex items-center justify-center text-xs text-white">
                  9:27
                </div>
                {/* Chat area (placeholder) */}
                <div className="p-3 h-72 flex flex-col justify-center items-center text-gray-400 text-sm">
                  <div className="border border-gray-300 rounded-lg p-2 mb-2">
                    <span className="text-gray-700">Qwick.ai Assistant</span>
                  </div>
                  <p className="text-center">
                    Your chat or landing page preview goes here
                  </p>
                </div>
              </div>

              {/* Page Link */}
              <div>
                <p className="text-sm text-gray-500">Page Link</p>
                <p className="text-sm text-blue-600 underline cursor-pointer">
                  all Qwick.ai
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PagesDashboard;
