<<<<<<< HEAD
import React from "react";
import { GoArrowRight } from "react-icons/go";
import {
  FiChevronDown,
  FiTrendingUp,
  FiTarget,
  FiHeadphones,
} from "react-icons/fi";

// Hero Section Component
function HeroSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
        Boost Your SEM Performance
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover our data-driven solutions to improve your search engine
        marketing and drive more qualified traffic to your website.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center">
          Get Started <GoArrowRight className="ml-2" />
        </button>
        <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 flex items-center">
          Learn More <FiChevronDown className="ml-2" />
        </button>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
      <div className="text-blue-600 mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

// Features Section Component
function FeaturesSection() {
  // Example feature data with ES6 imports
  const features = [
    {
      title: "Data Insights",
      description:
        "Utilize real-time analytics to fine-tune your SEM strategy.",
      icon: FiTrendingUp,
    },
    {
      title: "Optimized Campaigns",
      description: "Increase conversion rates with targeted optimizations.",
      icon: FiTarget,
    },
    {
      title: "Expert Support",
      description:
        "Our team of experts is here to help you every step of the way.",
      icon: FiHeadphones,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
        Our Features
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

// Testimonials Section Component (Sample Layout)
function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-lg shadow">
          <p className="text-gray-600 italic text-center mb-4">
            "Since we started using this platform, our SEM results have improved
            dramatically. The insights are game-changing!"
          </p>
          <p className="text-gray-800 font-bold text-center">
            — Alex Johnson, Marketing Director
          </p>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-sm hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

// Complete Page Component
function SEMLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default SEMLandingPage;
=======
import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import QwickChat from "./QwickChat";
import GoogleSignInPopup from "./GoogleSignInPopup";

const SEMPage = () => {
  const [currentPair, setCurrentPair] = useState(0);
  const [showTick, setShowTick] = useState({});
  const [isAllSet, setIsAllSet] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const totalPairs = Math.max(4, 2);

  useEffect(() => {
    if (currentPair < totalPairs) {
      const spinnerTimer = setTimeout(() => {
        setShowTick((prev) => ({ ...prev, [currentPair]: true }));
        if (currentPair < 2) {
          setShowTick((prev) => ({ ...prev, [currentPair + 4]: true }));
        }
        console.log(`Pair ${currentPair + 1}: PiSpinner -> FaCheckCircle`);
      }, 1500);

      const tickTimer = setTimeout(() => {
        setCurrentPair((prev) => prev + 1);
        console.log(`Moving to next pair: ${currentPair + 2}`);
      }, 2000);

      return () => {
        clearTimeout(spinnerTimer);
        clearTimeout(tickTimer);
      };
    } else {
      setIsAllSet(true);
    }
  }, [currentPair]);

  const allPointsLoaded = isAllSet || currentPair >= totalPairs;

  return (
    <div className="flex flex-col lg:flex-row items-start justify-start p-1 h-[796px] rounded-2xl border border-[#F0F2F5] pb-[24px] gap-[16px]">

      {/* Main-Content */}
      <div className="w-full lg:max-w-[987px] bg-white rounded-lg shadow-md">
        <div className="flex space-x-4 mb-4 rounded-lg border-b border-[#E3E6EA] pt-[12px] pb-[12px] px-4">
          <button className="bg-[#625DCD] text-white w-[102px] h-[37px] rounded-lg gap-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]">
            SEM Page
          </button>
          <button className="px-4 py-2 text-[#666F8D] border border-[#F0F2F5] w-[99px] h-[37px] rounded-lg pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[10px]">
            SEO Page
          </button>
        </div>
        <div className="w-full bg-white rounded-2xl pr-[12px] pb-[24px] pl-[12px] gap-[24px]">
          <div className="p-6 bg-[#F8F9FC] shadow-[0px_4px_8px_0px_#0000001A]">
            <div className="flex items-start h-[58px] space-x-3 mb-6">
              <div className="w-14 h-14">
                {allPointsLoaded ? (
                  <DotLottieReact
                    src="https://lottie.host/61343c87-3edf-4bd5-9b6b-7561a7f6e5ce/ARsbCMpRr2.lottie"
                    loop
                    autoplay
                    key="all-set-animation"
                  />
                ) : (
                  <DotLottieReact
                    src="https://lottie.host/c5c79112-2dc0-405e-a6b1-525095387c6f/a9SiSJRbpr.lottie"
                    loop
                    autoplay
                    key="loading-animation"
                  />
                )}
              </div>
              <div>
                {allPointsLoaded ? (
                  <h2 className="text-xl font-semibold text-[#27303A]">ALL SET!</h2>
                ) : (
                  <h2 className="text-xl font-semibold mb-2 text-[#27303A]">
                    Hold On For A Moment.
                  </h2>
                )}

        {allPointsLoaded ? (
                <p className="text-[#2F3F53] text-sm sm:text-base">
                  Qwick.ai has successfully updated all settings. Your website is
                  now ready to publish! 🚀
                </p>
                 ) : (
                    <p className="text-[#2F3F53] text-sm sm:text-base">
                  Qwick.ai is updating and configuring settings based on your shared website. You can modify them anytime.
                </p>
                 )}
              </div>
            </div>

            <div className="space-y-2 h-auto">
              <h3 className="text-lg font-semibold mb-4">Branding</h3>
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className={`bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F6FF_100%)] min-h-[55px] h-auto transition-opacity duration-500 rounded-lg pt-[5px] pb-[5px] shadow-sm ${
                    currentPair >= i
                      ? showTick[i]
                        ? "border rounded-lg shadow-sm"
                        : "opacity-100"
                      : "opacity-0"
                  }`}
                  style={
                    currentPair >= i && showTick[i]
                      ? { borderColor: "#625DCD", borderWidth: "1px" }
                      : {}
                  }
                >
                  <div className="flex items-center justify-between mx-2 sm:mx-4">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="bg-[linear-gradient(180deg,#19213D_0%,#625DCD_100%)] text-white w-8 h-8 flex items-center justify-center">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-xs sm:text-sm">
                          {i === 0 && "Brand Logo - Smart AI"}
                          {i === 1 && "Theme"}
                          {i === 2 && "Greeting Message - Smart AI"}
                          {i === 3 && "Links - Smart AI"}
                          {i !== 0 && i !== 2 && i !== 3 && (
                            <span className="text-gray-500"> (Default)</span>
                          )}
                        </h4>
                        <p className="text-gray-500 text-[10px] sm:text-sm">
                          {i === 0 &&
                            "Upload your brand identity for a personalized experience."}
                          {i === 1 &&
                            "Select a color scheme that matches your brand."}
                          {i === 2 && "Define your key message to attract users."}
                          {i === 3 &&
                            "Necessary links such as Home, Privacy Policy, and Terms & Conditions will be attached to your landing page."}
                        </p>
                      </div>
                    </div>

                    {currentPair >= i ? (
                      showTick[i] ? (
                        <FaCheckCircle className="text-green-500 w-5 h-5 transition-opacity duration-500" />
                      ) : (
                        <PiSpinner className="w-5 h-5 animate-spin text-gray-400 transition-opacity duration-500" />
                      )
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Agent</h3>
            <div className="space-y-4">
              {Array.from({ length: 2 }, (_, i) => {
                const adjustedIndex = i + 4;
                return (
                  <div
                    key={i}
                    className={`bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F6FF_100%)] min-h-[55px] h-auto transition-opacity duration-500 rounded-lg pt-[5px] pb-[5px] shadow-sm ${
                      currentPair >= i
                        ? showTick[adjustedIndex]
                          ? "opacity-100 border rounded-lg shadow-sm"
                          : "opacity-100"
                        : "opacity-0"
                    }`}
                    style={
                      currentPair >= i && showTick[adjustedIndex]
                        ? { borderColor: "#625DCD", borderWidth: "1px" }
                        : {}
                    }
                  >
                    <div className="flex items-center justify-between mx-2 sm:mx-4">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="bg-[linear-gradient(180deg,#19213D_0%,#625DCD_100%)] text-white w-8 h-8 flex items-center justify-center">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-xs sm:text-sm">
                            {i === 0 && "Agent Picture"}
                            {i === 1 && "Agent Name"}
                            <span className="text-gray-500"> (Default)</span>
                          </h4>
                          <p className="text-gray-500 text-[10px] sm:text-sm">
                            {i === 0 &&
                              "Choose an avatar or upload a custom image for your assistant."}
                            {i === 1 && "Give your chatbot a recognizable name."}
                          </p>
                        </div>
                      </div>

                      {currentPair >= i ? (
                        showTick[adjustedIndex] ? (
                          <FaCheckCircle className="text-green-500 w-5 h-5 transition-opacity duration-500" />
                        ) : (
                          <PiSpinner className="w-5 h-5 animate-spin text-gray-400 transition-opacity duration-500" />
                        )
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Edit and Publish buttons */}
            {allPointsLoaded && (
              <div className="flex justify-end space-x-5 mt-6">
                <button className="w-[111px] h-[43px] rounded-lg border border-[#F0F2F5] py-2 px-4 bg-white shadow-sm cursor-pointer">
                  Edit
                </button>
                <button
                  className="w-[174px] h-[43px] py-2 pr-4 pl-10 rounded-lg flex items-center shadow-[0px_1px_2px_0px_#0000000D] text-white bg-[#625DCD] gap-2 cursor-pointer"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <span>Publish</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* QwickChat Component */}
      <div className="hidden lg:block w-[340px] mt-4 lg:mt-0">
        <QwickChat />
      </div>

      <GoogleSignInPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default SEMPage;
>>>>>>> c9e3ec3f87aec0f67fd3b969b9f408df7be53777
