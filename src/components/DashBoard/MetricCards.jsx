import React from "react";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";

const MetricCards = () => {
  const metrics = [
    {
      title: "TOTAL NUMBER OF ACTIVE SEM PAGES",
      value: "120",
      change: "+16.8%",
      positive: true,
    },
    {
      title: "TOTAL NUMBER OF CONVERSATION",
      value: "38,485",
      change: "+36%",
      positive: true,
    },
    {
      title: "TOTAL NUMBER OF\nUSERS",
      value: "12,426",
      change: "+36%",
      positive: true,
    },
    {
      title: "AVERAGE NUMBER OF TAP PER USERS",
      value: "50+",
      change: "+36%",
      positive: true,
    },
    {
      title: "NUMBER OF LEAD\nCONVERTED",
      value: "8,485",
      change: "+36%",
      positive: true,
    },
    {
      title: "AVERAGE NUMBER OF\nMESSAGE PER CONVERSATION",
      value: "30",
      change: "-14%",
      positive: false,
    },
  ];

  return (
    <div className=" overflow-hidden p-2">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 font-jakarta">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="bg-[#F7F7FC] rounded-lg shadow p-3 sm:p-2 flex flex-col justify-between"
          >
            <div className="mb-2">
              <p
                className={`text-[#0C0C0D] font-medium text-xs leading-tight tracking-wide-sm uppercase ${
                  metric.title.includes("\n") ? "whitespace-pre-line" : ""
                }`}
              >
                {metric.title}
              </p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-lg sm:text-2xl font-bold text-[#19213D]">
                {metric.value}
              </p>
              <div className="flex items-center">
                <span
                  className={`text-xs ${
                    metric.positive ? "text-[#22C55E]" : "text-[#EF4444]"
                  }`}
                >
                  {metric.change}
                </span>
                {metric.change.startsWith("+") && (
                  <IoIosArrowRoundUp
                    className={`ml-1 w-3 h-3 ${
                      metric.positive ? "text-[#22C55E]" : "text-[#EF4444]"
                    }`}
                  />
                )}
                {metric.change.startsWith("-") && (
                  <IoIosArrowRoundDown className="ml-1 w-3 h-3 text-[#EF4444]" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricCards;
