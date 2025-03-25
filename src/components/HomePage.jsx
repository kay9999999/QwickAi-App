import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import { IoMdArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Logo = ({ className, color = "white" }) => (
  <svg
    width="116"
    height="30"
    viewBox="0 0 167 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1.61548 33.0539C9.71282 31.5038 28.344 23.8421 38.9368 5.55048C39.0902 5.28543 38.8256 4.97634 38.5419 5.09019L36.9599 5.7251M2.58826 35.6566C10.7022 34.1034 27.9381 29.905 40.39 14.1257C40.5659 13.9029 40.9269 13.99 40.9735 14.2704L41.1753 15.4854M1.93974 37.934H4.20956C4.38865 37.934 4.53383 37.7884 4.53383 37.6087V35.494M36.4735 37.934H33.8794C33.7003 37.934 33.5552 37.7884 33.5552 37.6087V21.8296M10.6948 33.7046V37.6087C10.6948 37.7884 10.84 37.934 11.019 37.934H15.5587C15.7378 37.934 15.883 37.7884 15.883 37.6087V32.2405M10.6948 29.8005V23.4563C10.6948 23.2766 10.5496 23.1309 10.3705 23.1309H4.85809C4.679 23.1309 4.53383 23.2766 4.53383 23.4563V31.9152M15.883 27.035V16.2987C15.883 16.1191 16.0281 15.9734 16.2072 15.9734H21.8818C22.0609 15.9734 22.206 16.1191 22.206 16.2987V23.1309M22.206 29.1498V37.6087C22.206 37.7884 22.3512 37.934 22.5303 37.934H27.7185C27.8976 37.934 28.0427 37.7884 28.0427 37.6087V25.7337M28.0427 18.5761V8.16517C28.0427 7.98549 28.1879 7.83983 28.367 7.83983H33.2309C33.41 7.83983 33.5552 7.98549 33.5552 8.16517V13.208M4.20956 20.6909H10.5326M15.883 13.208H22.206M28.2049 5.39976H34.5279"
      stroke={color}
      strokeWidth="1.57452"
      strokeLinecap="round"
    />
    <path
      d="M73.4873 17.6631L77.9195 31.2105C77.9793 31.3934 78.2392 31.3905 78.2949 31.2063L82.197 18.3056C82.2539 18.1175 82.521 18.1198 82.5747 18.3089L86.2272 31.1722C86.2806 31.3601 86.5456 31.3639 86.6043 31.1775L90.8588 17.6631"
      stroke={color}
      strokeWidth="2.75541"
      strokeLinecap="round"
    />
    <path
      d="M70.1699 21.3253C70.1699 27.5927 65.0891 32.6735 58.8216 32.6735C52.5542 32.6735 47.4734 27.5927 47.4734 21.3253C47.4734 15.0578 52.5542 9.97705 58.8216 9.97705C65.0891 9.97705 70.1699 15.0578 70.1699 21.3253ZM50.3151 21.3253C50.3151 26.0233 54.1236 29.8318 58.8216 29.8318C63.5197 29.8318 67.3282 26.0233 67.3282 21.3253C67.3282 16.6272 63.5197 12.8187 58.8216 12.8187C54.1236 12.8187 50.3151 16.6272 50.3151 21.3253Z"
      fill={color}
    />
    <path
      d="M115.575 29.0175C116.148 29.5093 116.219 30.3834 115.637 30.8635C114.724 31.6154 113.651 32.1579 112.492 32.4444C110.888 32.8409 109.2 32.7275 107.664 32.12C106.128 31.5125 104.819 30.4412 103.9201 29.0551C103.021 27.669 102.577 26.0372 102.649 24.3867C102.721 22.7362 103.306 21.1493 104.322 19.8467C105.338 18.5441 106.735 17.5908 108.318 17.1194C109.902 16.6479 111.593 16.6819 113.156 17.2165C114.285 17.6028 115.308 18.2367 116.151 19.0653C116.69 19.5942 116.542 20.4587 115.929 20.8988C115.316 21.3389 114.47 21.1799 113.886 20.7016C113.408 20.3106 112.862 20.0052 112.271 19.8031C111.246 19.4525 110.137 19.4302 109.098 19.7394C108.06 20.0486 107.144 20.6739 106.477 21.5282C105.811 22.3825 105.427 23.4233 105.38 24.5058C105.333 25.5883 105.624 26.6586 106.214 27.5677C106.803 28.4768 107.662 29.1794 108.669 29.5779C109.677 29.9763 110.784 30.0507 111.836 29.7906C112.442 29.6407 113.012 29.3841 113.522 29.0361C114.146 28.6105 115.002 28.5257 115.575 29.0175Z"
      fill={color}
    />
    <path
      d="M96.7061 31.8047V17.6631"
      stroke={color}
      strokeWidth="2.75541"
      strokeLinecap="round"
    />
    <path
      d="M164.621 31.8047V17.6631"
      stroke={color}
      strokeWidth="2.75541"
      strokeLinecap="round"
    />
    <path
      d="M122.022 31.8038L122.022 11.2024"
      stroke={color}
      strokeWidth="2.75541"
      strokeLinecap="round"
    />
    <path
      d="M122.022 26.04L131.45 18.0089"
      stroke={color}
      strokeWidth="2.75541"
      strokeLinecap="round"
    />
    <path
      d="M131.45 31.449L126.038 24.4655"
      stroke={color}
      strokeWidth="2.75541"
      strokeLinecap="round"
    />
    <path
      d="M67.5511 31.2778L65.2815 28.4844"
      stroke={color}
      strokeWidth="2.75541"
      strokeLinecap="round"
    />
    <ellipse cx="137.733" cy="30.9281" rx="2.09506" ry="2.09506" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M150.74 16.7836C146.352 16.7836 142.796 20.3401 142.796 24.7273C142.796 29.1146 146.352 32.6711 150.74 32.6711H156.125C157.538 32.6711 158.683 31.5256 158.683 30.1125V24.7273C158.683 20.3401 155.127 16.7836 150.74 16.7836ZM150.672 29.9343C153.516 29.9343 155.822 27.6285 155.822 24.784C155.822 21.9395 153.516 19.6336 150.672 19.6336C147.827 19.6336 145.521 21.9395 145.521 24.784C145.521 27.6285 147.827 29.9343 150.672 29.9343Z"
      fill={color}
    />
  </svg>
);

function HomePage({ isSettingUp, onStartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
    {
      id: "checkingScripts",
      status: "pending",
      label: "Crafting your AI Persona",
    },
    {
      id: "minifyingAssets",
      status: "pending",
      label: "Customising fields to fit your needs",
    },
    {
      id: "lazyLoading",
      status: "pending",
      label: "Building Intelligence for smarter conversations",
    },
    {
      id: "preloading",
      status: "pending",
      label: "Training your AI to understand users better",
    },
    {
      id: "initializing",
      status: "pending",
      label: "Finalizing Setup - Your AI will be ready in moments",
    },
  ]);

  useEffect(() => {
    if (isSettingUp) {
      const timers = steps.map((_, index) =>
        setTimeout(() => {
          setSteps((prev) =>
            prev.map((step, i) =>
              i === index ? { ...step, status: "loading" } : step
            )
          );
          setCurrentStep(index + 1);
          setTimeout(() => {
            setSteps((prev) =>
              prev.map((step, i) =>
                i === index ? { ...step, status: "completed" } : step
              )
            );
            if (index === steps.length - 1) {
              navigate("/seo-page");
            }
          }, 800);
        }, index * 3000)
      );

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [isSettingUp]);

  if (isSettingUp) {
    return (
      <div className="min-h-screen bg-white bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.1)_0%,transparent_60%)] flex flex-col">
        <header className="flex justify-between items-center p-4 sm:p-5">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            <Logo
              className="text-[#225FC3] w-32 sm:w-40 md:w-[167px]"
              color="#191D23"
            />
          </Link>
          <Link
            to="/login-page"
            className="text-[#191D23] border border-gray-200 bg-white rounded-lg flex items-center gap-1 p-2 sm:p-3 font-medium text-xs sm:text-sm leading-[130%] tracking-normal text-center"
          >
            Login
            <IoMdArrowForward className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </header>

        <main className="flex-grow flex items-center justify-center px-4 sm:px-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-left w-full max-w-[427px] min-h-[250px] sm:min-h-[293px] border-b border-gray-400 flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg max-sm:text-2xl md:text-3xl text-[#333333] font-semibold text-[28px] leading-[121%] tracking-normal whitespace-nowrap text-center">
              Setting Up Your AI...!
            </h2>
            <p className="text-sm  text-center text-[#333333] font-normal leading-[121%] tracking-normal">
              We’re setting things up! Your AI is being customized and trained
              for smarter conversations. This won’t take long—thank you for your
              patience!
            </p>
            <ul className="list-none text-sm ">
              {currentStep >= 1 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal mb-3">
                  {steps[0].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[0].label}
                </li>
              )}
              {currentStep >= 2 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal mb-3">
                  {steps[1].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[1].label}
                </li>
              )}
              {currentStep >= 3 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal mb-3">
                  {steps[2].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[2].label}
                </li>
              )}
              {currentStep >= 4 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal mb-3">
                  {steps[3].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[3].label}
                </li>
              )}
              {currentStep >= 5 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal">
                  {steps[4].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[4].label}
                </li>
              )}
            </ul>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="text-white relative overflow-hidden min-h-screen bg-[#0f0f20] flex flex-col">
      {/* Container */}
      <div className="absolute inset-0 z-0 min-h-full">
        <div className="inline-flex h-[768px] items-start justify-center absolute top-0 left-[-500px]">
          <div
            className="relative w-[1200px] h-[812px] mb-[-44px] blur-[0.5px] bg-gradient-to-r from-[rgba(0,187,255,1)] to-[rgba(0,187,255,0)]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(0, 187, 255, 1) 0%, rgba(0, 187, 255, 0) 100%)",
            }}
          />
          <div
            className="relative w-[1240px] h-[812px] mb-[-44px] blur-[0.5px] bg-gradient-to-r from-[rgba(210,97,255,1)] to-[rgba(210,97,255,0)]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(210, 97, 255, 1) 0%, rgba(210, 97, 255, 0) 100%)",
            }}
          />
        </div>

        <div
          className="absolute w-[1600px] h-full top-0 left-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(147, 0, 209, 0) 0%, rgba(16, 0, 41, 1) 100%)",
          }}
        />
      </div>
      {/* Content Container */}
      <div className="relative z-10 flex-grow">
        {/* Header / Navbar */}
        <div className="text-white">
          <div className="container relative sm:px-3 md:px-5 mx-auto flex justify-between items-center w-[1244px] max-md:w-[90%] max-sm:w-[90%] mt-10">
            <div className="flex items-center space-x-2">
              <Logo className="max-md:w-[120px] max-md:h-[30px] max-sm:w-[100px] max-sm:h-[25px]" />
            </div>
            {/* Hamburger Icon */}
            <button
              className="flex flex-col justify-center items-center space-y-1
                       focus:outline-none focus:ring-0
                       max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5 cursor-pointer"
              onClick={handleHamburgerClick}
            >
              <GiHamburgerMenu size={24} />
            </button>

            {isMenuOpen && (
              <div
                className="fixed inset-0  backdrop-blur-xs z-40 transition-opacity"
                onClick={() => setIsMenuOpen(false)} // Close menu on overlay click
              ></div>
            )}

            {/* Popup Menu (always rendered for fade in/out animation) */}
            <div
              className={`
              absolute top-10 right-5 bg-white text-black rounded-xl shadow-lg p-4 w-52 z-50
              transform transition-all duration-300 ease-in-out
              ${
                isMenuOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }
            `}
            >
              <ul className="space-y-4">
                <button
                  onClick={() => navigate("/terms-conditions")}
                  className=" cursor-pointer text-[#2B2B2A] text-sm font-semibold"
                >
                  Privacy policy
                </button>
                <hr className="text-[#ECECEC]" />
                <button
                  onClick={() => navigate("/terms-conditions")}
                  className=" cursor-pointer text-[#2B2B2A] text-sm font-semibold"
                >
                  Terms of Services
                </button>
                <hr className="text-[#ECECEC]" />
                <li>
                  <button
                    onClick={() => navigate("/login-page")}
                    className="flex justify-center w-full bg-[#625DCD] text-white py-3 px-2 rounded-md text-sm cursor-pointer"
                  >
                    Login
                    <GoArrowRight size={20} className="ml-1" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/signup-page")}
                    className="flex justify-center w-full border border-[#ECECEC] text-[#625DCD] py-3 px-2 rounded-md text-sm cursor-pointer"
                  >
                    Sign up
                    <GoArrowRight size={20} className="ml-1" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex overflow-hidden relative justify-center items-center w-full">
          <div className="flex relative flex-col gap-6 items-center w-[1244px] min-h-[578px] h-auto max-md:px-4 max-md:py-2 max-md:w-full max-md:mt-10 min-[320px]:w-full bg-transparent">
            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center mt-10 sm:mt-10 text-3xl sm:text-4xl md:text-[65px]">
              <h1 className="mb-2 sm:mb-3 font-bold w-full max-w-[740px] px-4">
                <span className="text-[#FFFFFF4D] text-opacity-30 font-bold leading-tight sm:leading-snug tracking-normal [-webkit-text-stroke:0.5px_white]">
                  Generate{" "}
                </span>
                <span className="text-white font-bold leading-tight sm:leading-snug tracking-normal">
                  And
                  <br /> Publish your{" "}
                </span>
                <span className="text-[#FFFFFF4D] text-opacity-30 font-bold leading-tight sm:leading-snug tracking-normal [-webkit-text-stroke:0.5px_white]">
                  site
                </span>
                <span className="text-white font-bold leading-tight sm:leading-snug tracking-normal">
                  {" "}
                  with
                  <br /> AI in{" "}
                </span>
                <span className="text-[#FFFFFF4D] text-opacity-30 font-bold leading-tight sm:leading-snug tracking-normal [-webkit-text-stroke:0.5px_white]">
                  Seconds.
                </span>
              </h1>
              <p className="text-sm md:text-[18px] lg:text-xl text-[#F7F8FA] font-normal leading-relaxed tracking-normal px-4 text-center max-w-[740px]">
                Turn your website into an interactive experience! Empower users
                with real-time answers and seamless form-filling assistance that
                aligns with your brand.
              </p>
            </div>

            <SearchInput onStartClick={onStartClick} />

            {/* Learn more */}
            <div className="-mt-20 mb-10 text-center flex items-center gap-3">
              <p className="text-base sm:text-lg text-[#7e7f81] font-normal leading-relaxed tracking-normal [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                Learn more about Qwick.ai
              </p>
              <FaArrowDown className="text-[#7e7f81]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
