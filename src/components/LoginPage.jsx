import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-gray-50 bg-[radial-gradient(circle_at_bottom,rgba(77,145,225,0.23)_8%,transparent_60%)] py-6 sm:py-12">
      {/* Header */}
      <div className="absolute top-6 left-0 right-0 px-6 flex items-center justify-between">
        <img
          src="/images/qwick-logo.png"
          alt="Qwick.ai"
          className="h-8 object-contain"
          loading="lazy"
        />
        <a
          href="#"
          className="flex items-center rounded shadow text-sm py-2 px-4 text-[#225FC3] hover:bg-gray-100 transition-colors"
        >
          Sign up
          <GoArrowRight size={20} className="ml-1" />
        </a>
      </div>

      <div className="px-4">
        <div className="relative mx-auto w-full max-w-xl rounded-md shadow-lg bg-white border border-[#E3E6EA] p-8 sm:p-10">
          <h1 className="text-3xl font-bold mb-3 text-[#333333]">Login</h1>
          <p className="text-[#666F8D] text-xs md:text-sm mb-6">
            Log in to unlock AI-powered SEO insights and optimize your pages
            effortlessly.
          </p>

          {/* Email Field */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#333333]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder=""
            className="mb-1 mt-1 w-full rounded-[10px] border border-[#BEC1C5] px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="text-[#666F8D] text-sm mb-4">
            Example: you@yourcompany.com
          </div>

          {/* Password Field with Toggle Button */}
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#333333]"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder=""
              className="mb-6 mt-1 w-full rounded-[10px] border border-[#BEC1C5] px-3 py-2 pr-10 text-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-4 top-0 right-0 flex items-center pr-3 text-[#666F8D] cursor-pointer"
            >
              {showPassword ? (
                <FaRegEye size={20} />
              ) : (
                <FaRegEyeSlash size={20} />
              )}
            </button>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            className="mb-4 w-full flex items-center justify-center rounded bg-[#225FC3] px-4 py-2 text-white hover:bg-[#1b4e9f] transition-colors cursor-pointer"
          >
            Continue
            <GoArrowRight className="ml-1" size={22} />
          </button>

          <div className="flex items-center justify-left mb-4">
            <span className="text-[#666F8D]">Or continue with Google</span>
          </div>

          {/* Register with Google Button */}
          <button
            type="button"
            className="flex w-full sm:w-auto items-center justify-center sm:justify-start rounded-[8px] shadow-lg bg-[#F7F8FA] px-4 py-2 text-[#3C4043] cursor-pointer"
          >
            <FcGoogle className="mr-2" size={24} />
            Register with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
