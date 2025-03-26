import React, { useState, memo, useMemo } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Logo from "./Header/Logo";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";



// Extracted components for better code organization and reduced re-rendering
const ChatHeader = memo(({ isLogoBlurred, isBreadCrumbBlurred }) => (
  <div className="flex justify-between items-center rounded-t-lg p-2 border-b border-gray-200 bg-white shadow-[0px_3.26px_6.53px_0px_#0000001A]">
    <div className="flex items-center space-x-2">
      {isLogoBlurred ? (
        <div className="h-6 w-20 border-gray-500 rounded-2xl bg-black/16"></div>
      ) : (
        <Logo className="text-[#225FC3] h-6 w-auto" color="black" />
      )}
    </div>

    {isBreadCrumbBlurred ? (
      <div className="h-6 w-10 border-gray-500 rounded-lg bg-black/5"></div>
    ) : (
      <div className="flex items-center gap-3">
        <button className="text-[#333333] cursor-pointer">
          <IoLogoWhatsapp className="w-5 h-5 text-green-500"/>
        </button>
        <button className="text-[#333333] cursor-pointer">
          <BsTelephone className="w-4 h-4 text-blue-500"/>
        </button>
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
      </div>
    )}
  </div>
));

const StaticContent = memo(() => (
  <div className="flex flex-col items-center justify-center h-full space-y-6 w-[300px] ml-4 lg:ml-0 xl:ml-4 relative">
    <div
      className="absolute w-[166px] h-[166px] left-[6px] top-[243px] rounded-full"
      style={{
        background: "rgb(98, 93, 205)",
        filter: "blur(200px)",
        zIndex: 0,
      }}
    />

    <div className="relative z-10">
      <div className="w-full flex justify-center items-center mx-auto mb-4">
        <Logo className="text-[#225FC3] h-8 w-40" color="blue" />
      </div>

      <div className="text-center">
        <h2 className="font-roboto font-semibold text-[20px] leading-[28px] tracking-[-0.3px] text-center text-[#333333]">
          Experience the best homeopathic treatment in India for hair,
          skin, and various ailments
        </h2>
        <p className="text-sm text-[#7A7A7A] mt-2 font-roboto font-medium leading-7 tracking-wide">
          Our expert doctors offer personalized homeopathy treatments
        </p>
        <div className="w-[100px] h-[1px] mx-auto mt-3 mb-4" 
             style={{ border: "1px solid #3333331A" }}/>
      </div>

      <h2 className="font-roboto font-semibold text-[22px] leading-[28px] tracking-[-0.3px] text-center text-[#333333]">
        Largest chain of <br />
        <span className="text-[#625DCD]">homeopathy clinics</span> &
        India's<br /> most trusted brand
      </h2>

      <StatisticCards />
    </div>
  </div>
));

const StatisticCards = memo(() => {
  const cardStyle = {
    borderImageSource: "linear-gradient(180deg, rgba(51, 51, 51, 0.4) 0%, rgba(98, 93, 205, 0.4) 100%)",
    borderImageSlice: "1"
  };
  
  const stats = [
    { value: "150K+", label: "Happy Patients" },
    { value: "200+", label: "Clinics Globally" },
    { value: "300+", label: "Doctors" },
    { value: "91%", label: "Success Rate" }
  ];
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 font-montserrat">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center px-4 py-2 w-18 h-18 border-transparent bg-white rounded-xl"
          style={cardStyle}
        >
          <span className="text-base font-bold text-[#0073AE]">{stat.value}</span>
          <span className="text-xs text-[#333333] text-center">{stat.label}</span>
        </div>
      ))}
    </div>
  );
});

const GreetingContent = memo(() => (
  <div className="flex flex-col items-center justify-center h-full space-y-8 w-[300px] ml-4 lg:ml-0 xl:ml-4">
    <div className="relative">
      <div className="w-62 h-62 rounded-full border-4 border-white shadow-lg overflow-hidden">
        <img
          src="/chat-agent.png"
          alt="AI Assistant"
          className="w-full object-fill -scale-x-100 scale-[1.2] transform-gpu"
        />
      </div>
    </div>

    <div className="text-center space-y-2">
      <h2 className="text-[#333333] font-medium text-lg">Hi!</h2>
      <p className="text-[#333333] font-medium">
        I'm Smriti, your dedicated assistant
      </p>
      <p className="text-sm text-[#999999] max-w-[280px]">
        Here to guide you with expert advice on Hair Fall and Growth
        Treatment with brand name
      </p>
    </div>

    <div className="mt-10 opacity-70">
      <Logo className="w-32 h-auto" color="blue" />
    </div>
  </div>
));

const HairTreatmentSection = memo(({ arePromptBlurred, isHairTreatmentOpen, setIsHairTreatmentOpen }) => (
  arePromptBlurred ? (
    <div className="h-4 rounded-2xl bg-black/5"></div>
  ) : (
    <div className="mt-2 border-[0.82px] border-[#5E5E5E] rounded-xl p-2 relative">
      <div className="absolute -top-3 left-4">
        <span className="bg-[#625DCD] text-white px-3 py-1 rounded-full text-xs font-medium">
          Hair treatment
        </span>
      </div>
      
      <div className="flex items-center justify-between mb-2 mt-2">
        <span className="font-roboto text-[17px] text-[#231F20] font-semibold leading-[100%] tracking-[0%] text-center align-middle">
          Hair Treatment in India
        </span>
          
        <button 
          className="text-[#333333] cursor-pointer"
          onClick={() => setIsHairTreatmentOpen(!isHairTreatmentOpen)}
        >
          <svg
            className={`w-4 h-4 transition-transform ${isHairTreatmentOpen ? '' : 'transform rotate-180'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      
      {isHairTreatmentOpen && (
        <div>
          <div className="flex space-x-2 overflow-x-auto">
            <button className="flex items-center space-x-1 text-[#333333] text-[10px] font-medium px-2 py-1 rounded-full">
              <div className="flex -space-x-2 mr-1">
                {[1, 2, 1, 2].map((num, i) => (
                  <img 
                    key={i}
                    src={`/avatar${num}.jpg`}
                    alt={`Avatar ${num}`}
                    className="w-6 h-6 rounded-full border border-white"
                    style={{objectFit: 'cover'}} 
                  />
                ))}
              </div>
              <span className="font-inter font-normal text-[9.79px] leading-[100%] tracking-[0%]">100k+ Happy Customers</span>
            </button>
          </div>
          
          <p className="text-[#7A7A7A] font-inter font-normal text-[9.79px] leading-[100%] tracking-[0%] mt-2">
            Asked these question
          </p>
        </div>
      )}
    </div>
  )
));

const ChatMessage = memo(({ isAvatarBlurred, isTextBlurred }) => (
  <div className="flex items-end space-x-2">
    {isAvatarBlurred ? (
      <div className="h-8 w-8 rounded-2xl bg-black/8"></div>
    ) : (
      <img
        src="/chat-agent.png"
        alt="Agent Avatar"
        className="w-8 h-8 rounded-full object-cover object-position-top scale-x-[-1] transform-gpu border border-[#BEC1C5]"
      />
    )}
    {isTextBlurred ? (
      <div className="w-64 h-20 rounded-2xl bg-black/5"></div>
    ) : (
      <div className="relative border border-[#4A77B5] rounded-tr-lg rounded-br-lg rounded-tl-lg px-3 py-2 max-w-[80%]">
        <p className="font-roboto font-normal text-[10px] leading-[100%] tracking-[0%] text-[#333333]">
          Hi! I'm Luna, your assistant.
          
          Here to guide you with expert advice on Hair Fall Treatment in India.
        </p>
        <span className="text-[10px] text-[#333333] block mt-1.5 italic">
          8:20 PM
        </span>
      </div>
    )}
  </div>
));

const PromptButtons = memo(({ arePromptBlurred }) => {
  const prompts = [
    "What are some of the common causes?",
    "Learn more about Hair loss",
    "How is male hair loss diagnosed?",
    "What treatments are available for Hair Loss?",
    "How effective are the treatments?",
    "What aftercare is recommended for Hair Loss?"
  ];
  
  const buttonStyle = {
    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
    border: "0.82px solid transparent",
    borderImage: "linear-gradient(180deg, rgb(59, 104, 167), rgb(227, 238, 253)) 1"
  };
  
  return arePromptBlurred ? (
    <div className="grid grid-cols-3 sm:grid-cols-4 space-y-2 mt-4">
      {Array(6).fill(null).map((_, index) => (
        <div key={index} className="w-18 h-8 rounded-2xl bg-black/5"></div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-3 gap-3 mt-2 w-full">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          className="h-[40px] py-1 px-2 text-[#7A7A7A] font-roboto text-[9px] flex items-center justify-center overflow-hidden box-border rounded-[6.53px_6.53px_0px_6.53px] bg-[rgb(255,255,255)]"
          style={buttonStyle}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
});

const CookieConsent = memo(({ isTextBlurred }) => (
  <div className="mt-3">
    {isTextBlurred ? (
      <div className="w-full h-28 rounded-lg bg-black/5"></div>
    ) : (
      <div className="relative rounded-lg p-3 shadow-md" 
           style={{
             background: "rgb(247, 248, 250)",
             backdropFilter: "blur(16.32px)",
             WebkitBackdropFilter: "blur(16.32px)"
           }}>
        <div className="flex items-center justify-between">
          <p className="text-[#7A7A7A] text-[10px] leading-tight flex-1 mr-2">
            Our website uses cookies. By clicking on accept, you give your consent to the use cookies as per our privacy policy.
          </p>
          
          <button className="h-5 w-5 bg-white rounded-full flex items-center justify-center shadow-sm mr-2">
            <svg 
              className="w-3 h-3 text-[#333333]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          
          <button className="bg-[#4A77B5] text-white text-[9px] px-3 py-1 rounded-full whitespace-nowrap">
            Accept
          </button>
        </div>
      </div>
    )}
  </div>
));

const ChatInput = memo(({ isInputBlurred }) => (
  isInputBlurred ? (
    <div className="w-full h-14 rounded-2xl bg-black/5"></div>
  ) : (
    <div className="flex w-full h-[61px] items-center mb-2 bg-white shadow-[0px_-8.16px_8.16px_0px_#0000000D]">
      <div className="flex-1 mx-2 my-2 rounded-full bg-[#F7F8FA] px-3 py-2 flex items-center space-x-2">
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
  )
));

const TabButtons = memo(({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "Static", label: "Static" },
    { id: "Greeting", label: "Greeting" },
    { id: "Conversation", label: "Conversation" }
  ];
  
  return (
    <div className="p-2 flex justify-between gap-4">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`text-sm font-medium w-[112.41921997070312px] h-[31px] rounded-lg border p-[6px] gap-[10px] border-[#BEC1C5] cursor-pointer ${
            activeTab === tab.id
              ? "text-white bg-[#333333]"
              : "bg-white text-[#666F8D]"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
});

const QwickChat = ({ currentPair }) => {
  const [activeTab, setActiveTab] = useState("Conversation");
  const [isHairTreatmentOpen, setIsHairTreatmentOpen] = useState(true);

  // Define blur states once to avoid recalculations on re-renders
  const blurStates = useMemo(() => ({
    isLogoBlurred: currentPair < 1,
    isBreadCrumbBlurred: currentPair < 1,
    isAvatarBlurred: currentPair < 1,
    isInputBlurred: currentPair < 2,
    isTextBlurred: currentPair < 3,
    isChatMenuBlurred: currentPair < 4,
    arePromptBlurred: currentPair < 4
  }), [currentPair]);

  // Memorized content components to prevent re-renders
  const renderMainContent = () => {
    switch(activeTab) {
      case "Static":
        return <StaticContent />;
      case "Greeting":
        return <GreetingContent />;
      default:
        return (
          <div className="space-y-1">
            <HairTreatmentSection 
              arePromptBlurred={blurStates.arePromptBlurred}
              isHairTreatmentOpen={isHairTreatmentOpen}
              setIsHairTreatmentOpen={setIsHairTreatmentOpen}
            />

            <div className="flex-1 px-3 mt-[200px] space-y-3">
              <ChatMessage 
                isAvatarBlurred={blurStates.isAvatarBlurred}
                isTextBlurred={blurStates.isTextBlurred}
              />

              {blurStates.isChatMenuBlurred ? (
                <div className="h-4 rounded-2xl bg-black/5"></div>
              ) : (
                <div className="flex items-center justify-between my-4">
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

            <PromptButtons arePromptBlurred={blurStates.arePromptBlurred} />
          </div>
        );
    }
  };

  return (
    <div className="w-full h-[790px] bg-[#F7F8FA] rounded-2xl flex flex-col p-2 gap-1 border border-gray-200">
      {/* Chat Heading - Only shown in Conversation tab */}
      {activeTab === "Conversation" && (
        <ChatHeader 
          isLogoBlurred={blurStates.isLogoBlurred}
          isBreadCrumbBlurred={blurStates.isBreadCrumbBlurred}
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 p-2 bg-white ${
          activeTab === "Static" || activeTab === "Greeting"
            ? "border-[2px] border-[#625DCD] rounded-lg bg-[linear-gradient(to_bottom_right,_rgba(241,245,249,0.2)_0%,_rgba(241,245,249,0.8)_100%)]"
            : "overflow-y-auto"
        }`}
      >
        {renderMainContent()}
      </div>

      {/* Cookie Consent - Only shown in Conversation tab */}
      {activeTab === "Conversation" && (
        <CookieConsent isTextBlurred={blurStates.arePromptBlurred} />
      )}

      {/* Chat Input - Always shown */}
      <ChatInput isInputBlurred={blurStates.isInputBlurred} />

      {/* Tab Buttons */}
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default QwickChat;


