import React, { useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa";
import { FiSearch, FiMenu, FiX, FiSettings } from "react-icons/fi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GrCopy } from "react-icons/gr";
import { GoStack } from "react-icons/go";
import { TbTemplate } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { GoLink } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";
import { Switch } from "@headlessui/react";
import { MdPictureInPictureAlt } from "react-icons/md";
import { CgListTree } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import HeaderSection from "../components/DashBoard/HeaderSection";

const PagesDashboard = () => {
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800  ">
      <div className="shadow-lg border-[#F0F2F5] rounded-2xl overflow-hidden">
        {/* Top Navbar */}
        <HeaderSection />

        {/* Main Content */}
        <main className=" flex flex-col bg-[#F1F2F5]">
          {/* breadcrumbs  */}
          <div className="px-6 pt-4 flex flex-wrap items-center gap-[7px] text-sm">
            <RiHome6Line className="text-[#B5B5C3]" size={19} />
            <GoDotFill className="text-[#B5B5C3]" />
            <span className="text-[#B5B5C3] font-medium">My Pages</span>
            <GoDotFill className="text-[#B5B5C3]" />
            <span className="text-[#19213D] font-medium">PAGEIDA001</span>
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* Left Content Area */}

            <div className="w-full xl:max-w-full mx-auto p-4">
              {/* Outer Container */}
              <section className="flex flex-col xl:flex-row xl:space-x-4 bg-white rounded-2xl shadow px-4 py-5 space-y-6">
                <div className="xl:w-[75%]">
                  {/* Top row: Page ID & Copy link */}
                  <div className="flex ">
                    <div>
                      <GoArrowLeft className="mr-1 text-[#333333]" size={28} />
                    </div>
                    <div className="w-full space-y-2">
                      <div className="flex items-center justify-between">
                        <h1 className="text-[20px] text-[#19213D] font-medium">
                          PAGEIDA001
                        </h1>
                        <button
                          type="button"
                          className=" cursor-pointer font-semibold text-sm text-[#625DCD] rounded-[8px] border border-[#625DCD] py-1 px-2 flex items-center space-x-1"
                        >
                          <span>Copy link</span>
                          <GoLink size={18} />
                        </button>
                      </div>

                      {/* Main Title */}
                      <div className="space-y-1">
                        <h2 className="text-lg  font-semibold text-[#333333] ">
                          Your AI-assistant is Live! What’s Next?
                        </h2>
                        <p className="text-base text-[#7A7A7A] leading-5">
                          Embed on your website (Copy the code below).
                          <br /> Use a standard AI-powered page.
                          <br /> Customize AI behavior for your business needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" mx-1 my-4 border border-[#BEC1C5]"></div>

                  <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-2 sm:space-y-0">
                    <h3 className="text-base md:text-lg font-semibold text-[#333333]">
                      Want to edit your SEM page?
                    </h3>
                    {/* Right side: toggle + button */}
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      {/* Toggle label group */}
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-[#625DCD] font-medium">
                          Smart AI Mode
                        </span>
                        {/* Toggle Switch */}
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className="relative border border-[#BEC1C5] inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none"
                        >
                          <span
                            className={`${
                              enabled ? "translate-x-5" : "translate-x-1"
                            } inline-block h-3 w-3 transform rounded-full bg-[#625DCD] transition-transform`}
                          />
                        </Switch>
                        <span className="text-sm text-[#7A7A7A]">
                          Customize manually
                        </span>
                      </div>
                      {/* Advance button */}
                      <button
                        type="button"
                        className="bg-[#625DCD] text-white rounded-lg px-4 py-2 text-sm font-medium"
                      >
                        <span className="flex items-center gap-1.5">
                          Advance
                          <FiSettings size={20} />
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* 4 Cards in a row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Branding */}
                    <div className="border border-[#625DCD] rounded-[8px] p-2 relative">
                      {/* Top-right info icon (optional) */}
                      <h4 className="flex text-[#333333] mb-2">
                        <MdPictureInPictureAlt
                          size={22}
                          className="pr-1 pt-1 text-[#625DCD]"
                        />
                        <span className="font-medium text-[#333333]">
                          Branding
                        </span>
                      </h4>
                      <ul className="text-sm font-medium text-[#333333] space-y-1 list-inside">
                        <li>Logo</li>
                        <li>Theme</li>
                        <li>Greeting Message</li>
                        <li>Phone Number</li>
                        <li>Menu links</li>
                      </ul>

                      {/* Bottom-right image */}
                      <img
                        src="/images/Vector.png"
                        alt="Vector"
                        className="absolute bottom-2 right-2"
                      />
                    </div>

                    {/* Agent Settings */}
                    <div className="border border-[#625DCD] rounded-[8px] p-2 relative">
                      {/* Top-right info icon (optional) */}
                      <h4 className="flex   text-[#333333] mb-2">
                        <CgListTree
                          size={22}
                          className="pr-1 pt-1 text-[#625DCD]"
                        />
                        <span className="font-medium text-[#333333]">
                          Agent Settings
                        </span>
                      </h4>
                      <ul className="text-sm font-medium text-[#333333] space-y-1  list-inside">
                        <li>Agent Picture</li>
                        <li>Agent Name</li>
                      </ul>
                      {/* Bottom-right image */}
                      <img
                        src="/images/Vector.png"
                        alt="Vector"
                        className="absolute bottom-2 right-2"
                      />
                    </div>

                    {/* Visibility Enhancements */}
                    <div className="border border-[#625DCD] rounded-[8px] p-2 relative">
                      {/* Top-right info icon (optional) */}
                      <h4 className="flex   text-[#333333] mb-2">
                        <CgListTree
                          size={22}
                          className="pr-1 pt-1 text-[#625DCD]"
                        />
                        <span className="font-medium text-[#333333]">
                          Visibility Enhancements
                        </span>
                      </h4>
                      <ul className="text-sm font-medium text-[#333333] space-y-1  list-inside">
                        <li>Page Title</li>
                        <li>Meta Description</li>
                        <li>First Prompt</li>
                        <li>Keywords Phase</li>
                      </ul>
                      {/* Bottom-right image */}
                      <img
                        src="/images/Vector.png"
                        alt="Vector"
                        className="absolute bottom-2 right-2"
                      />
                    </div>

                    {/* Google Settings */}
                    <div className="border border-[#625DCD] rounded-[8px] p-2 relative">
                      <HiOutlineInformationCircle
                        size={18}
                        className="absolute top-3 right-3 text-[#666F8D]"
                      />
                      <h4 className="flex   text-[#333333] mb-2">
                        <FiSettings
                          size={22}
                          className="pr-1 pt-1 text-[#625DCD]"
                        />
                        <span className="font-medium text-[#333333]">
                          Google Settings
                        </span>
                      </h4>
                      <ul className="text-sm font-medium text-[#333333] space-y-1  list-inside">
                        <li>Google Ad Account</li>
                        <li>GA Event</li>
                      </ul>
                      {/* Bottom-right image */}
                      <img
                        src="/images/Vector.png"
                        alt="Vector"
                        className="absolute bottom-2 right-2"
                      />
                    </div>
                  </div>

                  <div className=" mx-1 my-6 border border-[#BEC1C5]"></div>

                  {/* More Channels */}
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-[#333333] mb-3">
                      More channels
                    </h4>
                    {/* Channels Grid */}
                    {/* Changed container from "flex flex-row gap-3" to a responsive grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {/* WhatsApp */}
                      <div className="bg-[#F7F8FA] rounded-lg p-2 flex items-center text-center space-y-2">
                        <img
                          src="/images/whatsapp.png"
                          alt="whatsapp"
                          className="w-8 h-8"
                        />
                        <div className="pl-2 flex flex-col justify-between space-y-1">
                          <span className="text-[#333333] font-medium text-sm text-start">
                            AI on WhatsApp
                          </span>
                          <span className="text-[#7A7A7A] text-[10px] text-start">
                            Connect your Business Number
                          </span>
                        </div>
                      </div>

                      {/* Phone Agent */}
                      <div className="bg-[#F7F8FA] rounded-lg p-2 flex items-center text-center space-y-2">
                        <img
                          src="/images/phone.png"
                          alt="whatsapp"
                          className="w-8 h-8"
                        />
                        <div className="pl-2 flex flex-col justify-between space-y-1">
                          <span className="text-[#333333] font-medium text-sm text-start">
                            Phone Agent
                          </span>
                          <span className="text-[#7A7A7A] text-[10px] text-start">
                            Let your agent on your website
                          </span>
                        </div>
                      </div>

                      {/* Facebook Messenger */}
                      <div className="bg-[#F7F8FA] rounded-lg p-2 flex items-center text-center space-y-2">
                        <img
                          src="/images/messenger.png"
                          alt="whatsapp"
                          className="w-8 h-8"
                        />
                        <div className="pl-2 flex flex-col justify-between space-y-1">
                          <span className="text-[#333333] font-medium text-sm text-start">
                            Facebook Messenger
                          </span>
                          <span className="text-[#7A7A7A] text-[10px] text-start">
                            Connect your Official Facebook ID
                          </span>
                        </div>
                      </div>

                      {/* Instagram Messenger */}
                      <div className="bg-[#F7F8FA] rounded-lg p-2 flex items-center text-center space-y-2">
                        <img
                          src="/images/insta.png"
                          alt="whatsapp"
                          className="w-8 h-8"
                        />
                        <div className="pl-2 flex flex-col justify-between space-y-1">
                          <span className="text-[#333333] font-medium text-sm text-start">
                            Instagram Messenger
                          </span>
                          <span className="text-[#7A7A7A] text-[10px] text-start">
                            Connect your Official Instagram ID
                          </span>
                        </div>
                      </div>

                      {/* SMS */}
                      <div className="bg-[#F7F8FA] rounded-lg p-2 flex items-center text-center space-y-2">
                        <img
                          src="/images/sms.png"
                          alt="whatsapp"
                          className="w-8 h-8"
                        />
                        <div className="pl-2 flex flex-col justify-between space-y-1">
                          <span className="text-[#333333] font-medium text-sm text-start">
                            SMS
                          </span>
                          <span className="text-[#7A7A7A] text-[10px] text-start">
                            Let your Agent send messages
                          </span>
                        </div>
                      </div>

                      {/* EMBED */}
                      <div className="bg-[#F7F8FA] rounded-lg p-2 flex items-center text-center space-y-2">
                        <img
                          src="/images/embed.png"
                          alt="whatsapp"
                          className="w-8 h-8"
                        />
                        <div className="pl-2 flex flex-col justify-between space-y-1">
                          <span className="text-[#333333] font-medium text-sm text-start">
                            Embed
                          </span>
                          <span className="text-[#7A7A7A] text-[10px] text-start">
                            Embed your agent on your website
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:min-h-screen w-[1px] bg-[#BEC1C5]"></div>
                {/* Right Preview Panel */}
                <div className="w-full xl:w-[25%]">
                  <div className="   h-full flex flex-col items-center ">
                    <div className="w-full max-w-[300px] flex justify-between">
                      <h2 className="text-[20px] font-semibold text-[#333333] mb-3 text-center">
                        Landing page preview
                      </h2>
                      <CiShare1 className="text-[#625DCD] mt-2" size={20} />
                    </div>

                    {/* chat */}
                    <div className="relative w-[320px] h-[700px] flex flex-col overflow-hidden">
                      <div className="absolute inset-0 border-[1.2px] border-[#BEC1C5] rounded-[20px] pointer-events-none">
                        <div className="absolute inset-[8px] border-[4px] border-[#0E3D8C] rounded-[12px] pointer-events-none">
                          <div className="relative z-10 flex flex-col w-full h-full bg-white rounded-[20px] overflow-hidden">
                            {/* top bar */}
                            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200">
                              {/* logo */}
                              <div className="flex items-center space-x-2">
                                <img
                                  src="/images/qwick-logo.png"
                                  alt="Qwick.ai"
                                  className="h-6 object-contain"
                                  loading="lazy"
                                />
                              </div>
                              {/* icons */}
                              <div className="flex items-center space-x-3">
                                <button type="button">
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-[#333333] h-5 w-5"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm16 6H4v2h16v-2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>

                            {/* chat area */}
                            <div className="flex-1 px-3 mt-[200px] space-y-3">
                              <div className="flex items-end space-x-2">
                                {/* avatar */}
                                <img
                                  src="/images/chat-image.png"
                                  alt="Agent Avatar"
                                  className="w-8 h-8 rounded-full object-contain border border-[#BEC1C5]"
                                />
                                <div className="relative border border-[#4A77B5] rounded-tr-lg rounded-br-lg rounded-tl-lg px-3 py-2 max-w-[80%]">
                                  <p className="leading-5 text-[#333333] text-xs">
                                    Hi! I’m Luna, your assistant. Here to guide
                                    you with expert advice on Hair Fall
                                    Treatment in India.
                                  </p>
                                  <span className="text-[11px] text-[#333333] block mt-1.5 italic">
                                    8:20 PM
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between mt-4">
                                <span className="text-[10px] text-[#333333] font-semibold whitespace-nowrap">
                                  People Also Ask
                                </span>
                                <div className="flex items-center flex-1 space-x-3 text-[10px] font-semibold">
                                  <div className="h-[1px] bg-gray-300 flex-1 mx-2"></div>
                                  <button
                                    type="button"
                                    className="text-[#7A7A7A]"
                                  >
                                    End Chat
                                  </button>
                                  <button
                                    type="button"
                                    className="text-[#4A77B5]"
                                  >
                                    Restart
                                  </button>
                                </div>
                              </div>

                              {/* FAQ */}
                              <div className="flex flex-wrap gap-2 pt-2 text-[10px] text-[#7A7A7A]">
                                <div
                                  className="inline-block rounded-full p-[1px]"
                                  style={{
                                    background:
                                      "linear-gradient(to bottom, #3B68A7, #E3EEFD)",
                                  }}
                                >
                                  <span className="inline-block rounded-full bg-white px-3 py-1">
                                    What are some of the common causes?
                                  </span>
                                </div>

                                <div
                                  className="inline-block rounded-full p-[1px]"
                                  style={{
                                    background:
                                      "linear-gradient(to bottom, #3B68A7, #E3EEFD)",
                                  }}
                                >
                                  <span className="inline-block rounded-full bg-white px-3 py-1">
                                    Learn more about Hair loss
                                  </span>
                                </div>

                                <div
                                  className="inline-block rounded-full p-[1px]"
                                  style={{
                                    background:
                                      "linear-gradient(to bottom, #3B68A7, #E3EEFD)",
                                  }}
                                >
                                  <span className="inline-block rounded-full bg-white px-3 py-1">
                                    How is male hair loss diagnosed?
                                  </span>
                                </div>

                                <div
                                  className="inline-block rounded-full p-[1px]"
                                  style={{
                                    background:
                                      "linear-gradient(to bottom, #3B68A7, #E3EEFD)",
                                  }}
                                >
                                  <span className="inline-block rounded-full bg-white px-3 py-1">
                                    What treatments are available for Hair Loss?
                                  </span>
                                </div>

                                <div
                                  className="inline-block rounded-full p-[1px]"
                                  style={{
                                    background:
                                      "linear-gradient(to bottom, #3B68A7, #E3EEFD)",
                                  }}
                                >
                                  <span className="inline-block rounded-full bg-white px-3 py-1">
                                    How effective are the treatments?
                                  </span>
                                </div>
                              </div>

                              {/* notice */}
                              <div className="flex items-start bg-gray-100 border border-gray-300 rounded-md p-2 mt-2 text-[8px] text-[#7A7A7A]">
                                <p className="flex-1 pr-2">
                                  Our website uses cookies. By clicking on
                                  accept, you give your consent to the use
                                  cookies as per our{" "}
                                  <a
                                    href="#"
                                    className="text-[#333333] underline font-medium"
                                  >
                                    privacy policy
                                  </a>
                                  .
                                </p>
                                <div className="flex pt-1.5 space-x-2">
                                  <button
                                    type="button"
                                    className="w-5 h-5 border border-gray-400 rounded-md text-center text-xs text-[#333333] bg-white"
                                  >
                                    X
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-[#333333] text-white px-3 py-1 rounded text-xs"
                                  >
                                    Accept
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* input area */}
                            <div className="flex w-full items-center mb-2">
                              <div className="flex-1 mx-2 my-2 border rounded-full border-gray-200 bg-gray-50 px-3 py-2 flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#0E3D8C] rounded-full " />
                                <input
                                  type="text"
                                  placeholder="Ask Anything or Select from above"
                                  className="flex-1 text-[10px] px-2 py-1 focus:outline-none text-[#333333] bg-transparent"
                                />
                              </div>

                              <button
                                type="button"
                                className="flex items-center justify-center w-9 h-9 border-2 border-[#333333] text-[#333333] rounded-full mr-2"
                              >
                                <FaLocationArrow />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PagesDashboard;
