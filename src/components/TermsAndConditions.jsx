import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Logo = ({ className, color = "#625DCD" }) => (
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

function TermsAndConditions() {
  const [activeTab, setActiveTab] = useState("traditional");

  return (
    <div className="bg-gray-50">
      <div className="min-h-screen bg-white bg-[radial-gradient(circle_at_bottom,rgba(25,33,61,0.12)_10%,transparent_60%)] flex flex-col border border-[#F0F2F5] rounded-[16px] pb-16">
        {/* Header */}
        <header className="flex justify-between items-center p-4 sm:p-5">
          <Link to="/" className="text-2xl font-bold">
            <Logo className="w-32 sm:w-40 md:w-[167px]" color="#625DCD" />
          </Link>
          <Link
            to="/login-page"
            className="text-[#625DCD] border border-gray-200 bg-white rounded-lg flex items-center gap-1 p-2 sm:p-3 font-medium text-xs sm:text-sm leading-[130%] tracking-normal text-center"
          >
            Login
            <IoMdArrowForward className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="max-w-4xl w-full mx-auto p-8">
            <div className="bg-white p-8 rounded-[10px] shadow-md border border-[#E3E6EA]">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab("traditional")}
                  className={`flex-1 text-center py-2 transition-colors
                    ${
                      activeTab === "traditional"
                        ? "border-b-2 border-[#333333] text-[#333333] font-semibold"
                        : "border-b-2 border-[#BEC1C5] text-[#333333] font-normal"
                    }`}
                >
                  Traditional Terms & Conditions
                </button>
                <button
                  onClick={() => setActiveTab("chatBase")}
                  className={`flex-1 text-center py-2 transition-colors
                    ${
                      activeTab === "chatBase"
                        ? "border-b-2 border-[#333333] text-[#333333] font-semibold"
                        : "border-b-2 border-[#BEC1C5] text-[#333333] font-normal"
                    }`}
                >
                  Chat Base Terms & Conditions
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "traditional" && (
                <div>
                  <h3 className="text-black text-lg font-semibold mb-2">
                    What is Lorem Ipsum?
                  </h3>
                  <p className="mb-4 text-sm sm:text-base leading-relaxed text-[#333]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <h3 className="text-black text-lg font-semibold mb-2">
                    Why do we use it?
                  </h3>
                  <p className="mb-4 text-sm sm:text-base leading-relaxed text-[#333]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <h3 className="text-black text-lg font-semibold mb-2">
                    Where does it come from?
                  </h3>
                  <p className="mb-4 text-sm sm:text-base leading-relaxed text-[#333]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance.
                  </p>
                </div>
              )}

              {activeTab === "chatBase" && (
                <div>
                  {/* Chat Container */}
                  <div className="min-h-screen bg-[#F7F8FA] border border-[#BEC1C5] rounded-[16px] p-4 flex flex-col">
                    {/* Chat Header */}
                    <div className="flex items-start mb-3">
                      <img
                        src="/images/emma.png"
                        alt="Emma's avatar"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <div className="flex items-center space-x-5">
                          <span className="font-semibold text-sm text-[#19213D]">
                            Emma
                          </span>
                          <span className="text-xs text-[#666F8D] pt-0.5">
                            2:45 PM
                          </span>
                        </div>
                        <p className="text-[#666F8D] mt-1 text-sm font-normal">
                          Hi! I'm Luna, your assistant. Tap to know more about
                          our terms &amp; conditions.
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="block mb-6 mt-4 shadow-[0_0_0_0.4px_#BEC1C5]" />

                    {/* Prompt Buttons */}
                    <div className="flex flex-wrap gap-[6.6px] mb-4 justify-end">
                      {[
                        "Prompt 1",
                        "Prompt 2",
                        "Prompt 3",
                        "Prompt 4",
                        "Prompt 5",
                        "Prompt 6",
                      ].map((prompt) => (
                        <button
                          key={prompt}
                          className="font-normal px-3 py-2 border border-[#625DCD] rounded-t-[6.6px] rounded-bl-[6.6px] text-xs text-[#333333] hover:bg-gray-100 transition-colors"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>

                    {/* Input Area pinned at bottom */}
                    <div className="mt-auto">
                      <div className="flex items-center bg-white border border-[#F0F2F5] rounded-[16px] p-4 justify-between">
                        <input
                          type="text"
                          placeholder="Type Here"
                          className="flex-grow outline-none text-sm text-[#666F8D]"
                        />
                        <button className="text-white bg-[#625DCD] hover:bg-[#5148b3] transition-colors rounded-md p-2">
                          <IoIosSend />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TermsAndConditions;
