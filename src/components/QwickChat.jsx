import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Logo from "./Header/Logo";

const QwickChat = ({ currentPair }) => {
  const [activeTab, setActiveTab] = useState("Conversation");

  const isLogoBlurred = currentPair < 1; 
  const isBreadCrumbBlurred = currentPair < 1; 
  const isAvatarBlurred = currentPair < 1; 
  const isInputBlurred = currentPair < 2; 
  const isTextBlurred = currentPair < 3; 
  const isChatMenuBlurred = currentPair < 4;
  const arePromptBlurred = currentPair < 4;
  const isHeaderBlurred = currentPair < 4;

  return (
    <div className="w-full h-[790px] bg-[#F7F8FA] rounded-2xl flex flex-col p-2 gap-1 border border-gray-200">
      {/* Header */}
      {isHeaderBlurred ? ("") : (
        <div className="relative flex flex-row justify-between items-center mb-2 ">
          <div className="relative flex-1 text-center ">
            <h3 
              className={`font-inter text-sm leading-none tracking-normal ${activeTab === "Conversation" ? "text-[#625DCD]" : "text-[#7A7A7A] cursor-pointer"}`}
              onClick={() => setActiveTab("Conversation")}
            >
              Conversational Page
            </h3>
            <div className={`absolute bottom-[-8px] left-0 w-full h-px border-b-2 ${activeTab === "Conversation" ? "border-[#625DCD]" : "border-[#F0F2F5]"}`}></div>
          </div>
          <div className="relative flex-1 text-center">
            <h3 
              className={`font-inter font-normal text-sm leading-none tracking-normal ${activeTab === "Static" ? "text-[#625DCD]" : "text-[#7A7A7A] cursor-pointer"}`}
              onClick={() => setActiveTab("Static")}
            >
              Static Page
            </h3>
            <div className={`absolute bottom-[-8px] left-0 w-full h-px border-b-2 ${activeTab === "Static" ? "border-[#625DCD]" : "border-[#F0F2F5]"}`}></div>
          </div>
        </div>
      )}

      {/* Chat Heading */}
      <div className="flex justify-between items-center rounded-t-lg p-2 border-b border-gray-200 bg-white shadow-[0px_3.26px_6.53px_0px_#0000001A] ">
        <div className="flex items-center space-x-2">
          {isLogoBlurred ? (
            <div className="h-6 w-20 border-gray-500 rounded-2xl bg-black/16 "></div>
          ) : (
            <Logo
              className="text-[#225FC3] h-6 w-auto"
              color="black"
            />
          )}
        </div>

        {isBreadCrumbBlurred ? (
          <div className="h-6 w-10 border-gray-500 rounded-lg bg-black/5"></div>
        ) : (
          <button className="text-[#333333] cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M8 12h12.2M4 18h16"
              ></path>
            </svg>
          </button> 
        )}
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-2 overflow-y-auto bg-white">
        <div className="space-y-1">
          {/* Dynamically adjust margin-top based on active tab */}
          <div className={`flex-1 px-3 ${activeTab === "Static" ? "mt-[20px]" : "mt-[330px]"} space-y-3`}>
            <div className="flex items-end space-x-2">
              {isAvatarBlurred ? (
                <div className="h-8 w-8 rounded-2xl bg-black/8 "></div>
              ) : (
                <img
                  src="/chat-agent.png"
                  alt="Agent Avatar"
                  className="w-8 h-8 rounded-full object-contain border border-[#BEC1C5] "
                />
              )}
              {isTextBlurred ? (
                <div className="w-64 h-20 rounded-2xl bg-black/5 "></div>
              ) : (
                <div className="relative border border-[#4A77B5] rounded-tr-lg rounded-br-lg rounded-tl-lg px-3 py-2 max-w-[80%]">
                  <p className="leading-5 text-[#333333] text-xs">
                    Hi! I'm Luna, your assistant. Here to guide you with expert advice on Hair Fall Treatment in India.
                  </p>
                  <span className="text-[11px] text-[#333333] block mt-1.5 italic">
                    8:20 PM
                  </span>
                </div>
              )}
            </div>

            {isChatMenuBlurred ? (
              <div className="h-4 rounded-2xl bg-black/5 "></div>
            ) : (
              <div className="flex items-center justify-between mt-4">
                <span className="text-[10px] text-[#333333] font-semibold whitespace-nowrap">
                  People Also Ask
                </span>
                <div className="flex items-center flex-1 space-x-3 text-[10px] font-semibold">
                  <div className="h-[1px] bg-gray-300 flex-1 mx-2"></div>
                  <button type="button" className="text-[#7A7A7A]">
                    End Chat
                  </button>
                  <button type="button" className="text-[#4A77B5]">
                    Restart
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Prompts */}
          {arePromptBlurred ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 space-y-2 mt-4">
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-18 h-8 rounded-xl bg-black/5"
                  ></div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2 mt-2">
              {["Prompt 1", "Prompt 2", "Prompt 3", "Prompt 4", "Prompt 5"].map(
                (prompt, index) => (
                  <button
                    key={index}
                    className="bg-white text-[#7A7A7A] font-roboto font-medium text-xs underline p-2 border-[0.82px] [border-image:linear-gradient(180deg,#3B68A7_0%,#E3EEFD_100%)_1] shadow-[0px_4px_8px_0px_#0000001A] rounded-t-xl"
                  >
                    {prompt}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Ask-Anything */}
      {isInputBlurred ? (
        <div className="w-full h-14 rounded-2xl bg-black/5 "></div>
      ) : (
        <div className="flex w-full h-[61px] items-center mb-2 bg-white shadow-[0px_-8.16px_8.16px_0px_#0000000D]">
          <div className="flex-1 mx-2 my-2  rounded-full  bg-[#F7F8FA] px-3 py-2 flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#0E3D8C] rounded-full" />
            <input
              type="text"
              placeholder="Ask Anything or Select from above"
              className="flex-1 text-[12px] font-roboto px-2 py-1 focus:outline-none text-[#333333] bg-transparent"
            />
          </div>

          <button
            type="button"
            className="flex items-center justify-center w-9 h-9 border-2 border-[#333333] text-[#333333] rounded-full mr-2"
          >
            <FaLocationArrow />
          </button>
        </div>
      )}

      {/* Buttons */}
      <div className="p-2 flex justify-between gap-4">
        <button
          className={`text-sm font-medium w-[112.41921997070312px] h-[31px] rounded-lg border p-[6px] gap-[10px] border-[#BEC1C5] cursor-pointer ${
            activeTab === "Static"
              ? "text-white bg-[#333333]"
              : "bg-white text-[#666F8D]"
          } `}
          onClick={() => setActiveTab("Static")}
        >
          Static
        </button>
        <button
          className={`text-sm font-medium w-[112.41921997070312px] h-[31px] rounded-lg border p-[6px] gap-[10px] border-[#BEC1C5] cursor-pointer ${
            activeTab === "Greeting"
              ? "text-white bg-[#333333]"
              : "bg-white text-[#666F8D]"
          }`}
          onClick={() => setActiveTab("Greeting")}
        >
          Greeting
        </button>
        <button
          className={`text-sm font-medium w-[112.41921997070312px] h-[31px] rounded-lg border p-[6px] gap-[10px] border-[#BEC1C5] cursor-pointer ${
            activeTab === "Conversation"
              ? "text-white bg-[#333333]"
              : "bg-white text-[#666F8D]"
          } `}
          onClick={() => setActiveTab("Conversation")}
        >
          Conversation
        </button>
      </div>
    </div>
  );
};

export default QwickChat;



