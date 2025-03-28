import React, { useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

const LeadSection = () => {
  const leadsData = [
    {
      pageId: "PAGEIDA001",
      project: "#1BCT",
      createdDate: "Jan 7, 2022",
      leadFilter: "Yes",
      conversation: "View Chat",
      name: "Olivia Rhye",
      email: "olivia@untitleui.com",
      contact: "(257) 739-8248",
      reportAvail: "Yes",
      intent: "Low",
    },
    {
      pageId: "PAGEIDA001",
      project: "#2BCT",
      createdDate: "Jan 7, 2022",
      leadFilter: "Yes",
      conversation: "View Chat",
      name: "Phoenix Baker",
      email: "phoenix@untitleui.com",
      contact: "(803) 285-7573",
      reportAvail: "Yes",
      intent: "High",
    },
    {
      pageId: "PAGEIDA001",
      project: "#3BCT",
      createdDate: "Jan 7, 2022",
      leadFilter: "Yes",
      conversation: "View Chat",
      name: "Lane Steiner",
      email: "lane@untitleui.com",
      contact: "(320) 548-1279",
      reportAvail: "Yes",
      intent: "High",
    },
    {
      pageId: "PAGEIDA001",
      project: "#4BCT",
      createdDate: "Jan 5, 2022",
      leadFilter: "No",
      conversation: "View Chat",
      name: "N/A",
      email: "N/A",
      contact: "N/A",
      reportAvail: "No",
      intent: "Low",
    },
    {
      pageId: "PAGEIDA001",
      project: "#5BCT",
      createdDate: "Jan 5, 2022",
      leadFilter: "Yes",
      conversation: "View Chat",
      name: "Candice Wu",
      email: "candice@untitleui.com",
      contact: "N/A",
      reportAvail: "Yes",
      intent: "Medium",
    },
    {
      pageId: "PAGEIDA001",
      project: "#6BCT",
      createdDate: "Jan 3, 2022",
      leadFilter: "Yes",
      conversation: "View Chat",
      name: "Drew Cano",
      email: "drew@untitleui.com",
      contact: "(818) 479-3104",
      reportAvail: "Yes",
      intent: "High",
    },
    {
      pageId: "PAGEIDA001",
      project: "#7BCT",
      createdDate: "Jan 3, 2022",
      leadFilter: "No",
      conversation: "View Chat",
      name: "Orlando Diggs",
      email: "orlando@untitleui.com",
      contact: "(804) 335-2403",
      reportAvail: "Yes",
      intent: "High",
    },
    {
      pageId: "PAGEIDA001",
      project: "#8BCT",
      createdDate: "Jan 3, 2022",
      leadFilter: "No",
      conversation: "View Chat",
      name: "Orlando Diggs",
      email: "orlando@untitleui.com",
      contact: "(804) 335-2403",
      reportAvail: "Yes",
      intent: "High",
    },
    {
      pageId: "PAGEIDA001",
      project: "#9BCT",
      createdDate: "Jan 4, 2022",
      leadFilter: "No",
      conversation: "View Chat",
      name: "Orlando Diggs",
      email: "orlando@untitleui.com",
      contact: "(804) 335-2403",
      reportAvail: "Yes",
      intent: "High",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 8;

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leadsData.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(leadsData.length / leadsPerPage);

  const paginate = (pageNumber) => {
    const safePageNumber = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(safePageNumber);
  };

  const exportToCSV = () => {
    // Create CSV headers
    const headers = Object.keys(leadsData[0]).join(",") + "\n";

    // Create CSV rows
    const rows = leadsData
      .map((lead) =>
        Object.values(lead)
          .map((value) => `"${value}"`) // Wrap values in quotes to handle commas
          .join(",")
      )
      .join("\n");

    // Combine headers and rows
    const csvContent = headers + rows;

    // Create a Blob with the CSV data
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a download link
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "leads_export.csv");
    link.style.visibility = "hidden";

    // Append to DOM, trigger click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="rounded-[6.84px] border-[0.86px] p-3 sm:p-4 lg:p-6 border-[#EAECF0] mt-2 bg-white w-full"
      style={{
        boxShadow: `
          0px 1.71px 3.42px -1.71px rgba(16, 24, 40, 0.06),
          0px 3.42px 6.84px -1.71px rgba(16, 24, 40, 0.10)
        `,
      }}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex items-center">
          <h2 className="font-jakarta font-medium text-base sm:text-lg leading-23.94 tracking-normal text-[#101828]">
            GENERATED LEADS
          </h2>
          <span className="flex items-center justify-center h-5 bg-[#515DEF1A] px-2 rounded-full font-inter font-medium text-[10.26px] leading-[15.39px] text-[#625DCD] ml-1 whitespace-nowrap">
            100 users
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0">
            <input
              type="text"
              placeholder="Search here"
              className="w-full sm:w-[200px] pl-8 pr-4 py-2 border border-[#EAECF0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
            />
            <svg
              className="absolute left-2 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 p-2 cursor-pointer">
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span className="font-montserrat font-semibold text-sm leading-[20px] tracking-normal text-center align-middle text-[#6B7280]">
                Filter
              </span>
            </button>
            <button
              className="flex items-center gap-2 p-2 border border-[#EAECF0] rounded-md text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={exportToCSV}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="font-montserrat font-semibold text-sm leading-[20px] tracking-normal text-center align-middle text-[#6B7280]">
                Export
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="relative">
        <div className="overflow-x-auto -mx-3 sm:-mx-4 lg:-mx-6">
          <div className="min-w-[1000px] px-3 sm:px-4 lg:px-6">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="font-inter font-medium text-xs leading-tight text-[#667085] bg-[#F9FAFB] border-b-[0.86px] sm:border-b-[1px] border-[#EAECF0]">
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Page ID <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Lead ID <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Created Date{" "}
                      <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Lead Filled{" "}
                      <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Conversations{" "}
                      <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Name <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Email Address{" "}
                      <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Contact Number{" "}
                      <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Report Avail{" "}
                      <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                  <th className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center">
                      Intent <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentLeads.length === 0 ? (
                  <tr>
                    <td
                      colSpan="10"
                      className="text-center py-4 font-inter text-[#667085]"
                    >
                      No leads available
                    </td>
                  </tr>
                ) : (
                  currentLeads.map((lead, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#EAECF0] hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-inter font-bold text-xs leading-[7.7px] tracking-normal underline decoration-solid text-[#625DCD]">
                        {lead.pageId}
                      </td>
                      <td className="py-3 px-4 font-inter font-bold text-xs leading-[7.7px] tracking-normal text-[#333333]">
                        {lead.project}
                      </td>
                      <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">
                        {lead.createdDate}
                      </td>
                      <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">
                        {lead.leadFilter}
                      </td>
                      <td className="py-3 px-4 font-jakarta font-bold text-xs leading-[17.1px] tracking-normal text-[#625DCD]">
                        <a href="#" className="text-blue-600 hover:underline">
                          {lead.conversation}
                        </a>
                      </td>
                      <td className="py-3 px-4 font-inter font-medium text-xs leading-[17.1px] tracking-normal text-[#333333]">
                        {lead.name}
                      </td>
                      <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">
                        {lead.email}
                      </td>
                      <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">
                        {lead.contact}
                      </td>
                      <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">
                        {lead.reportAvail}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full font-inter font-medium text-[10.26px] leading-[15.39px] tracking-normal ${
                            lead.intent === "High"
                              ? "bg-[#ECFDF3] text-[#027A48]"
                              : lead.intent === "Medium"
                              ? "bg-[#FFB13D1A] text-[#FFB13D]"
                              : "bg-[#EBEBEB] text-[#8D8D8D]"
                          }`}
                        >
                          <span
                            className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 flex-shrink-0 ${
                              lead.intent === "High"
                                ? "bg-[#027A48]"
                                : lead.intent === "Medium"
                                ? "bg-[#FFB13D]"
                                : "bg-[#8D8D8D]"
                            }`}
                          />
                          <span className="truncate">{lead.intent}</span>
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
        <button
          className="inline-flex items-center justify-center gap-1.5 
          w-[97px] h-[30px] 
          font-inter font-medium text-xs 
          text-[#344054] 
          rounded-md 
          border border-[#D0D5DD] 
          hover:bg-gray-50 
          transition-colors 
          cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Previous
        </button>

        <div className="flex flex-wrap justify-center gap-1">
          {[1, 2, 3, "...", 8, 9, 10].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (typeof item === "number") {
                  paginate(item);
                }
              }}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm ${
                item === currentPage
                  ? "bg-blue-50 text-blue-600"
                  : "text-[#667085] hover:bg-gray-50"
              } ${typeof item !== "number" ? "pointer-events-none" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="inline-flex items-center justify-center gap-1.5 
          w-[74px] h-[30px] 
          font-inter font-medium text-xs 
          text-[#344054] 
          rounded-md 
          border border-[#D0D5DD] 
          hover:bg-gray-50 
          transition-colors
          cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 10}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LeadSection;
