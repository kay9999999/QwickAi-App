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
import Logo from "./Logo";

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
              navigate("/sem-page");
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
