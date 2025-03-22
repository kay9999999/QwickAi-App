import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const QwickChat = () => {
  const [activeTab, setActiveTab] = useState("Greeting");

  return (
    <div className="w-full h-[790px] bg-[#F7F8FA] rounded-2xl flex flex-col p-2 gap-3 border border-gray-200 ">
      {/* Header */}
      <div className="flex justify-between items-center p-2 border-b border-gray-200 bg-white shadow-[0px_3.26px_6.53px_0px_#0000001A]">
        <div className="flex items-center space-x-2">
          <img
            src="/qwick-logo.png"
            alt="Qwick.ai"
            className="h-6 object-contain"
            loading="lazy"
          />
        </div>
        <button className="text-gray-600 hover:text-gray-800">
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-2 overflow-y-auto bg-white">
        <div className="space-y-1">
          {/* Greeting Message */}
          <div className="flex-1 px-3 mt-[330px] space-y-3">
            <div className="flex items-end space-x-2">
              <img
                src="/chat-agent.png"
                alt="Agent Avatar"
                className="w-8 h-8 rounded-full object-contain border border-[#BEC1C5]"
              />
              <div className="relative border border-[#4A77B5] rounded-tr-lg rounded-br-lg rounded-tl-lg px-3 py-2 max-w-[80%]">
                <p className="leading-5 text-[#333333] text-xs">
                  Hi! I’m Luna, your assistant. Here to guide you with expert advice on Hair Fall Treatment in India.
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
                <button type="button" className="text-[#7A7A7A]">
                  End Chat
                </button>
                <button type="button" className="text-[#4A77B5]">
                  Restart
                </button>
              </div>
            </div>
          </div>

          {/* Prompt Buttons */}
          <div className="grid grid-cols-3 gap-2">
            {["Prompt 1", "Prompt 2", "Prompt 3", "Prompt 4", "Prompt 5"].map((prompt, index) => (
              <button
                key={index}
                className="bg-gray-100 text-gray-700 text-sm p-2 rounded-lg hover:bg-gray-200 border underline"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ask Anything */}
      <div className="flex w-full h-[61px] items-center mb-2 bg-white shadow-[0px_-8.16px_8.16px_0px_#0000000D]">
        <div className="flex-1 mx-2 my-2 border rounded-full border-gray-200 bg-gray-50 px-3 py-2 flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#0E3D8C] rounded-full" />
          <input
            type="text"
            placeholder="Ask Anything or Select from above"
            className="flex-1 text-[12px] px-2 py-1 focus:outline-none text-[#333333] bg-transparent"
          />
        </div>

        <button
          type="button"
          className="flex items-center justify-center w-9 h-9 border-2 border-[#333333] text-[#333333] rounded-full mr-2"
        >
          <FaLocationArrow />
        </button>
      </div>

      {/* Buttons */}
      <div className="p-2 flex justify-between gap-4">
        <button
          className={`text-sm font-medium w-[112.41921997070312px] h-[31px] rounded-lg border p-[6px] gap-[10px] border-[#BEC1C5] ${
            activeTab === "Static" ? "text-white bg-[#333333]" : "bg-white text-[#666F8D]"
          }`}
          onClick={() => setActiveTab("Static")}
        >
          Static
        </button>
        <button
          className={`text-sm font-medium w-[112.41921997070312px] h-[31px] rounded-lg border p-[6px] gap-[10px] border-[#BEC1C5] ${
            activeTab === "Greeting" ? "text-white bg-[#333333]" : "bg-white text-[#666F8D]"
          }`}
          onClick={() => setActiveTab("Greeting")}
        >
          Greeting
        </button>
        <button
          className={`text-sm font-medium w-[112.41921997070312px] h-[31px] rounded-lg border p-[6px] gap-[10px] border-[#BEC1C5] ${
            activeTab === "Conversation" ? "text-white bg-[#333333]" : "bg-white text-[#666F8D]"
          }`}
          onClick={() => setActiveTab("Conversation")}
        >
          Conversation
        </button>
      </div>
    </div>
  );
};

export default QwickChat;
