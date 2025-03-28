import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaChevronDown } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FiMoreHorizontal } from "react-icons/fi";

const ChartSection = () => {
  // Demo data for charts
  const lineChartData = [
    { name: "Jan", value1: 15000, value2: 20000, value3: 25000 },
    { name: "Feb", value1: 20000, value2: 25000, value3: 30000 },
    { name: "Mar", value1: 25000, value2: 30000, value3: 35000 },
    { name: "Apr", value1: 35000, value2: 32000, value3: 25000 },
    { name: "May", value1: 30000, value2: 35000, value3: 28000 },
    { name: "Jun", value1: 25000, value2: 30000, value3: 35000 },
  ];

  const barChartData = Array(25)
    .fill()
    .map((_, idx) => ({
      name: idx + 1,
      value: Math.floor(Math.random() * 200) + 50,
    }));

  return (
    <div className=" p-3 sm:p-4">
      {/* Charts Container */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Left Chart */}
        <div className="lg:w-1/2">
          <div className="bg-[#F7F7FC] rounded-lg shadow p-3 sm:p-4 h-[317px] flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
              <div className="flex space-x-4 sm:space-x-8">
                {["Total Users ", "Total Conversion", "Intent Status"].map(
                  (text, idx) => (
                    <button
                      key={idx}
                      className={`text-xs sm:text-sm ${
                        idx === 0
                          ? "font-inter text-[#19213D] font-medium"
                          : "text-black/40"
                      }`}
                    >
                      {text}
                    </button>
                  )
                )}
              </div>
              <hr className="w-full sm:w-px sm:h-6 bg-gray-300 my-2 sm:mx-4" />
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <button className="text-xs sm:text-sm font-inter font-normal leading-4 tracking-normal text-[#19213D]">
                  This Week
                </button>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <button className="text-xs sm:text-sm font-inter font-normal leading-4 tracking-normal text-[#19213D]">
                  Last Week
                </button>
              </div>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={lineChartData}
                  margin={{ top: 10, right: 0, left: 10, bottom: 0 }}
                >
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontFamily: "Font Family",
                      fontWeight: "400",
                      fontSize: "10.26px",
                      lineHeight: "13.68px",
                      letterSpacing: "0px",
                      textAlign: "center",
                      verticalAlign: "middle",
                      fill: "rgba(0, 0, 0, 0.4)",
                    }}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value1"
                    stroke="#5e72e4"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Chart */}
        <div className="lg:w-1/2">
          <div className="bg-[#F7F7FC] rounded-lg shadow p-3 sm:p-4 h-[317px] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-base sm:text-lg font-poppins font-medium text-[#1C1C1C] leading-tight mt-2">
                Header
              </h3>
              <button className="text-gray-400">
                <FiMoreHorizontal size={16} />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={lineChartData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="1 1"
                    vertical={false}
                    stroke="#f0f0f0"
                    strokeOpacity={0.4}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 40000]}
                    ticks={[0, 10000, 20000, 30000, 40000]}
                    tickFormatter={(value) => `${value / 1000}k`}
                    tick={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: 14,
                      fill: "#949596",
                      textAnchor: "end",
                      style: { lineHeight: "110%", letterSpacing: 0 },
                    }}
                    width={30}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value1"
                    stroke="#5e72e4"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value2"
                    stroke="#2dce89"
                    strokeWidth={1.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center text-[#585757] font-poppins text-sm font-medium tracking-normal leading-[110%]">
                  <span className="w-2 h-2 rounded-full bg-[#56CA00] mr-1"></span>
                  Search Engine Traffic
                </div>
                <div className="flex items-center text-[#585757] font-poppins text-sm font-medium tracking-normal leading-[110%]">
                  <span className="w-2 h-2 rounded-full bg-[#16B1FF] mr-1"></span>
                  Direct Traffic
                </div>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[#585757] font-poppins text-sm font-medium tracking-normal leading-[110%]">
                  98 123
                </span>
                <span className="text-[#585757] font-poppins text-sm font-medium tracking-normal leading-[110%]">
                  98 753
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {/* Bar Chart */}
        <div className="bg-[#F7F7FC] rounded-lg shadow p-3 sm:p-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-lg font-poppins font-medium text-[#949596]">
                Label
              </h3>
              <p className="text-sm sm:text-3xl font-poppins font-medium tracking-normal text-[#1C1C1C]">
                14,744
              </p>
            </div>
            <div className="flex flex-col items-end">
              <button className="text-[#1C1C1C] mb-1">
                <FiMoreHorizontal size={16} />
              </button>
              <div className="flex items-center mt-4">
                <span className="w-2 h-2 rounded-full bg-[#4285F4] mr-1"></span>
                <span className="text-xs sm:text-sm font-medium text-[#585757]">
                  Legend
                </span>
              </div>
            </div>
          </div>

          <div className="h-[230px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barChartData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#5e72e4"
                  barSize={8}
                  radius={[4, 4, 0, 0]}
                >
                  {barChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index % 3 === 0 ? "#625DCD" : "#4B8BF5"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* New Line Div Before Desktop/Mobile Stats */}
          <div className="h-[12px] flex mt-2">
            <div className="w-1/2" style={{ background: "#625DCD" }}></div>
            <div
              className="w-1/2"
              style={{
                background:
                  "linear-gradient(0deg, #4285F4, #4285F4), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              }}
            ></div>
          </div>

          {/* Desktop and Mobile Stats */}
          <div className="flex justify-between text-sm font-poppins font-normal tracking-normal text-[#BABABA] mt-4">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(0deg,#4285F4,#4285F4),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))] mr-1"></span>
              <span>Desktop: 80%</span>
            </div>
            <div className="flex items-center mr-30">
              <span className="w-2 h-2 rounded-full bg-[#625DCD] mr-1"></span>
              <span>Mobile: 22%</span>
            </div>
          </div>
        </div>

        {/* Middle Line Chart */}
        <div className="bg-[#F7F7FC] rounded-lg shadow p-3 sm:p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-poppins font-medium tracking-normal leading-[110%] text-[#1C1C1C]">
              Header
            </h3>
            <div className="relative">
              <select
                className="text-[10px] sm:text-sm text-[#585757] font-poppins bg-transparent border-none appearance-none pr-6 pl-1 focus:outline-none cursor-pointer"
                defaultValue="Last 7 days"
              >
                <option value="Last 2 days">Last 2 days</option>
                <option value="Last 7 days">Last 7 days</option>
                <option value="Last 14 days">Last 14 days</option>
                <option value="Last 30 days">Last 30 days</option>
              </select>
              <FaChevronDown
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                size={18}
              />
            </div>
          </div>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineChartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="1 1"
                  vertical={false}
                  stroke="#f0f0f0"
                  strokeOpacity={0.4}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 40000]}
                  ticks={[0, 10000, 20000, 30000, 40000]}
                  tickFormatter={(value) => `${value / 1000}k`}
                  tick={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 14,
                    fill: "#949596",
                    textAnchor: "end",
                    style: { lineHeight: "110%", letterSpacing: 0 },
                  }}
                  width={30}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value1"
                  stroke="#5e72e4"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="value2"
                  stroke="#2dce89"
                  strokeWidth={1.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-[#F7F7FC] rounded-lg shadow p-3 sm:p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-poppins font-medium tracking-normal leading-[110%] text-[#1C1C1C]">
              Header
            </h3>
            <div className="flex mr-4">
              <button className="text-gray-400">
                <FiMoreHorizontal size={16} />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md mx-auto h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[{ value: 75 }, { value: 25 }]}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                  >
                    <Cell fill="#5e72e4" />
                    <Cell fill="#f0f0f0" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  user
                </p>
                <span className="text-xl sm:text-3xl font-bold text-gray-800">
                  32,455
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] sm:text-xs text-gray-600 mt-2 sm:mt-4">
            <div className="flex gap-2 sm:gap-4">
              <div className="flex items-center text-sm font-poppins font-medium tracking-normal leading-[110%] text-[#1C1C1C]">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                Legend1
              </div>
              <div className="flex items-center text-sm font-poppins font-medium tracking-normal leading-[110%] text-[#1C1C1C]">
                <span className="w-2 h-2 rounded-full bg-gray-400 mr-1"></span>
                Legend2
              </div>
            </div>
            <GoGraph className="text-[#CCCCCC]" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
