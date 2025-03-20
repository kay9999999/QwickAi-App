import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FiRefreshCw } from "react-icons/fi";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosDesktop } from "react-icons/io";

function ScoreCircle({ label, value, styleClass }) {
  return (
    <div className="flex flex-col items-center text-center space-y-1 m-2">
      <div
        className={`w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full flex items-center justify-center text-md font-semibold ${styleClass}`}
      >
        {value}
      </div>
      <div className="text-base sm:text-lg font-semibold text-[#333333] pt-2">
        {label}
      </div>
    </div>
  );
}

function ScoreCard({ title, link, scores, activeDevice, onDeviceChange }) {
  return (
    <div className="bg-white p-4 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
        <h2 className="text-[#333333] font-bold text-[18px] uppercase tracking-wider">
          {title}
        </h2>
        <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap sm:flex-nowrap">
          {/* link area */}
          <div className="border-b-2 border-gray-400 focus:outline-none pl-2">
            <input
              type="text"
              value={link}
              placeholder="Enter link"
              className="text-[#1C4DA0] text-sm underline w-[280px] sm:w-[330px] md:w-[400px] lg:w-[430px] xl:w-[580px] placeholder:text-[#1C4DA0] focus:outline-none bg-transparent"
              readOnly
            />
          </div>

          <FiRefreshCw
            className="text-blue-500 cursor-pointer ml-2 mt-2 sm:mt-0"
            size={18}
          />
        </div>
      </div>

      <div className="flex items-center space-x-8 mb-4">
        {/* mobile toggle */}
        <div
          className={
            activeDevice === "mobile"
              ? "flex items-center space-x-1 pb-1 border-b-2 border-blue-500 text-[#333333] cursor-pointer px-2"
              : "flex items-center space-x-1 pb-1 text-[#BEC1C5] cursor-pointer"
          }
          onClick={() => onDeviceChange("mobile")}
        >
          <span className="text-sm font-medium">Mobile</span>
          <MdPhoneIphone size={16} />
        </div>

        {/* desktop toggle */}
        <div
          className={
            activeDevice === "desktop"
              ? "flex items-center space-x-1 pb-1 border-b-2 border-blue-500 text-[#333333] cursor-pointer px-2"
              : "flex items-center space-x-1 pb-1 text-[#BEC1C5] cursor-pointer"
          }
          onClick={() => onDeviceChange("desktop")}
        >
          <span className="text-sm font-medium">Desktop</span>
          <IoIosDesktop size={16} />
        </div>
      </div>

      {/* circles */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 rounded-md shadow-lg bg-[#F7F8FA] p-4">
        {scores.map((item, idx) => (
          <ScoreCircle
            key={idx}
            label={item.label}
            value={item.value}
            styleClass={item.styleClass}
          />
        ))}
      </div>
    </div>
  );
}

function SeoPage() {
  //  scores for CURRENT SCORE
  const currentScoresMobile = [
    {
      label: "Performance",
      value: 25,
      styleClass:
        "border-4 border-[#E65E52] bg-[#FFEBE9] text-[#E65E52] text-2xl",
    },
    {
      label: "Accessibility",
      value: 85,
      styleClass:
        "border-4 border-[#FBBC05] bg-[#FEF7E2] text-[#FBBC05] text-2xl",
    },
    {
      label: "Best Practices",
      value: 71,
      styleClass:
        "border-4 border-[#FBBC05] bg-[#FEF7E2] text-[#FBBC05] text-2xl",
    },
    {
      label: "SEO",
      value: 100,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "PWA",
      value: "---",
      styleClass:
        "border-4 border-[#BEC1C5] bg-[#F7F8FA] text-[#BEC1C5] text-2xl",
    },
  ];

  const currentScoresDesktop = [
    {
      label: "Performance",
      value: 30,
      styleClass:
        "border-4 border-[#E65E52] bg-[#FFEBE9] text-[#E65E52] text-2xl",
    },
    {
      label: "Accessibility",
      value: 80,
      styleClass:
        "border-4 border-[#FBBC05] bg-[#FEF7E2] text-[#FBBC05] text-2xl",
    },
    {
      label: "Best Practices",
      value: 75,
      styleClass:
        "border-4 border-[#FBBC05] bg-[#FEF7E2] text-[#FBBC05] text-2xl",
    },
    {
      label: "SEO",
      value: 98,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "PWA",
      value: "---",
      styleClass:
        "border-4 border-[#BEC1C5] bg-[#F7F8FA] text-[#BEC1C5] text-2xl",
    },
  ];

  // 2) scores for NEW SCORE
  const newScoresMobile = [
    {
      label: "Performance",
      value: 95,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "Accessibility",
      value: 94,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "Best Practices",
      value: 93,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "SEO",
      value: 100,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "PWA",
      value: "---",
      styleClass:
        "border-4 border-[#BEC1C5] bg-[#F7F8FA] text-[#BEC1C5] text-2xl",
    },
  ];

  const newScoresDesktop = [
    {
      label: "Performance",
      value: 97,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "Accessibility",
      value: 92,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "Best Practices",
      value: 95,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "SEO",
      value: 100,
      styleClass:
        "border-4 border-[#34A853] bg-[#F3FFF6] text-[#34A853] text-2xl",
    },
    {
      label: "PWA",
      value: "---",
      styleClass:
        "border-4 border-[#BEC1C5] bg-[#F7F8FA] text-[#BEC1C5] text-2xl",
    },
  ];

  const [currentDevice, setCurrentDevice] = useState("mobile");
  const [newDevice, setNewDevice] = useState("mobile");

  const finalCurrentScores =
    currentDevice === "mobile" ? currentScoresMobile : currentScoresDesktop;

  const finalNewScores =
    newDevice === "mobile" ? newScoresMobile : newScoresDesktop;

  const codeToCopy = `<iframe id="JotFormIFrame-01951969226c7a3993df3b08ce36191f2d87" title="Chatbot: Customer Support Agent" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allow="geolocation; microphone; camera; fullscreen" src="https://agent.jotform.com/01951969226c7a3993df3b08ce36191f2d87?embedMode=iframe&background=1&shadow=1" frameborder="0" style=" min-width:100%; max-width:100%; height:688px; border:none; width:100%; " scrolling="no" > </iframe>
<script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
<script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-01951969226c7a3993df3b08ce36191f2d87']", "https://www.jotform.com")</script>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white bg-[radial-gradient(circle_at_bottom,_rgba(25,33,61,0.2)_10%,_transparent_60%)]">
      {/* header */}
      <header className="w-full bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 py-4">
        <h1 className="text-lg sm:text-2xl font-semibold text-gray-800">
          SEO OPTIMISER
        </h1>
        <button className="bg-white flex items-center font-semibold text-gray-800 px-3 py-1.5 rounded shadow border border-gray-200 hover:bg-gray-50">
          LOGIN
          <GoArrowRight className="pt-1 pl-1" size={20} />
        </button>
      </header>

      {/* content */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-full px-4 py-6 gap-6 w-full">
        {/* left column */}
        <div className="w-full lg:w-3/4 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden gap-6">
          {/* current score card  */}
          <ScoreCard
            title="CURRENT SCORE"
            link="https://drbatras.com/campaigns/google/GSM/hairloss_l.aspx"
            scores={finalCurrentScores}
            activeDevice={currentDevice}
            onDeviceChange={setCurrentDevice}
          />
          {/* new score card */}
          <ScoreCard
            title="NEW SCORE"
            link="https://qwick-dev-s3.ap-south-1.amazonaws.com/hairloss_l/index.html"
            scores={finalNewScores}
            activeDevice={newDevice}
            onDeviceChange={setNewDevice}
          />

          <div className="bg-white p-4">
            {/* disclaimer */}
            <p className="text-xs text-[#7A7A7A]">
              <strong className="text-[#333333]">Disclaimer:</strong> While our
              AI applies advanced optimizations to boost performance, some
              factors — such as large third-party scripts, heavy frameworks, or
              server constraints — may still limit your overall score. For
              further improvement beyond this point, consider additional actions
              like minimizing external scripts, upgrading hosting, or
              refactoring resource-heavy site components.
            </p>

            <span className="block bg-[#F7F8FA] h-[1px] w-full mt-4"></span>

            <div className="mt-4">
              <h2 className="text-sm font-semibold text-gray-800 mb-2">
                Copy this code and paste it into your website&apos;s
                &lt;head&gt; section
              </h2>

              {/*  code box  */}
              <div className="relative bg-[#2D3141] text-[#FFFFFF] rounded p-4 overflow-x-auto">
                <pre className="text-xs leading-5 whitespace-pre-wrap break-all font-mono">
                  {codeToCopy}
                </pre>
              </div>

              <div className="mt-4 flex flex-wrap justify-end items-center gap-2">
                <a href="#how-to-embed" className="text-sm text-[#333333] mr-2">
                  How to Embed on your Platform?
                </a>
                <button
                  onClick={handleCopyCode}
                  className="text-[#4285F4] font-semibold text-sm rounded hover:opacity-80"
                >
                  Copy Code
                </button>
                <MdOutlineContentCopy className="text-[#4285F4]" size={20} />
              </div>

              <span className="block bg-[#F7F8FA] h-[1px] w-full mt-4"></span>
            </div>

            {/* footerr content */}
            <p className="text-xs text-[#7A7A7A] mt-4">
              For more personalized SEO changes and page updates, talk to our AI
              anytime. The more instructions you give, the smarter your AI
              becomes at optimizing your landing pages. One has to be logged in
              to use Admin AI, and when someone clicks on it, it opens the SEO
              AI agent for the page.
            </p>

            {/*  AI button */}
            <div className="mt-4 w-full flex justify-end">
              <button className="bg-gradient-to-r from-[#19213D] to-[#4285F4] text-white px-4 py-2 rounded text-sm flex items-center hover:opacity-90">
                Admin AI
                <GoArrowRight className="text-white ml-1" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* right column */}
        <div className="w-full lg:w-[30%]">
          <div className="  p-2 h-full flex flex-col items-center ">
            <h2 className="text-[20px] font-semibold text-[#333333] mb-3 text-center">
              Preview
            </h2>

            {/* chat */}
            <div className="relative w-[320px] h-[800px] flex flex-col overflow-hidden">
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
                        <FaWhatsapp className="text-green-500" />
                        <FiPhone className="text-blue-500" />
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
                    <div className="flex-1 px-3 mt-[300px] space-y-3">
                      <div className="flex items-end space-x-2">
                        {/* avatar */}
                        <img
                          src="/images/chat-image.png"
                          alt="Agent Avatar"
                          className="w-8 h-8 rounded-full object-contain border border-[#BEC1C5]"
                        />
                        <div className="relative border border-[#4A77B5] rounded-tr-lg rounded-br-lg rounded-tl-lg px-3 py-2 max-w-[80%]">
                          <p className="leading-5 text-[#333333] text-xs">
                            Hi! I’m Luna, your assistant. Here to guide you with
                            expert advice on Hair Fall Treatment in India.
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
                          Our website uses cookies. By clicking on accept, you
                          give your consent to the use cookies as per our{" "}
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
      </div>
    </div>
  );
}

export default SeoPage;
