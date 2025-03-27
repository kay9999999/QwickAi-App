import React from 'react';
import { RiHome6Line } from "react-icons/ri";
import HeaderSection from './DashBoard/HeaderSection';
import LeadSection from './DashBoard/LeadSection';
import ChartSection from './DashBoard/ChartSection';
import MetricCards from './DashBoard/MetricCards';

const Dashboard = () => {
  return (
    <div className="bg-[#f7f8fa] min-h-screen flex flex-col">
      <HeaderSection />

      {/* Main Content */}
      <main className="flex-grow px-3 py-4 sm:px-4 sm:py-6 lg:px-6">
        {/* User Welcome  */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h2 className="font-jakarta font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-[#102828]">
            Hello, Carolyn Perkins
          </h2>
          <div className="flex items-center mt-1">
            <RiHome6Line className="mr-1 text-[#BFB5C3] w-3 h-3 sm:w-4 sm:h-4" />
            <span className="w-1 h-1 bg-[#BFB5C3] rounded-full mr-1"></span>
            <p className="font-inter text-[#19213D] font-medium text-[10px] sm:text-xs">
              DASHBOARD
            </p>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-lg shadow">
          {/* Metrics Cards  */}
          <div className="rounded-tl-lg rounded-tr-lg p-3">
            <MetricCards />
          </div>

          {/* Charts Section  */}
          <div>
            <ChartSection />
          </div>

          {/* Lead Section  */}
          <div className="rounded-bl-lg rounded-br-lg p-3 sm:p-4 lg:p-6">
            <LeadSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

