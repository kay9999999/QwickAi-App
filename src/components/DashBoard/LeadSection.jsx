import React from 'react';
import { IoIosArrowRoundDown } from "react-icons/io";

const LeadSection = () => {
  const leadsData = [
    {
      pageId: 'PAGEIDA001', 
      project: '#1BCT',
      createdDate: 'Jan 7, 2022',
      leadFilter: 'Yes',
      conversation: 'View Chat',
      name: 'Olivia Rhye',
      email: 'olivia@untitleui.com',
      contact: '(257) 739-8248',
      reportAvail: 'Yes',
      intent: 'Low',
    },
    {
      pageId: 'PAGEIDA001',
      project: '#2BCT',
      createdDate: 'Jan 7, 2022',
      leadFilter: 'Yes',
      conversation: 'View Chat',
      name: 'Phoenix Baker',
      email: 'phoenix@untitleui.com',
      contact: '(803) 285-7573',
      reportAvail: 'Yes',
      intent: 'High',
    },
    {
      pageId: 'PAGEIDA001',
      project: '#3BCT',
      createdDate: 'Jan 7, 2022',
      leadFilter: 'Yes',
      conversation: 'View Chat',
      name: 'Lane Steiner',
      email: 'lane@untitleui.com',
      contact: '(320) 548-1279',
      reportAvail: 'Yes',
      intent: 'High',
    },
    {
      pageId: 'PAGEIDA001',
      project: '#4BCT',
      createdDate: 'Jan 5, 2022',
      leadFilter: 'No',
      conversation: 'View Chat',
      name: 'N/A',
      email: 'N/A',
      contact: 'N/A',
      reportAvail: 'No',
      intent: 'Low',
    },
    {
      pageId: 'PAGEIDA001',
      project: '#5BCT',
      createdDate: 'Jan 5, 2022',
      leadFilter: 'Yes',
      conversation: 'View Chat',
      name: 'Candice Wu',
      email: 'candice@untitleui.com',
      contact: 'N/A',
      reportAvail: 'Yes',
      intent: 'Medium',
    },
    {
      pageId: 'PAGEIDA001',
      project: '#6BCT',
      createdDate: 'Jan 3, 2022',
      leadFilter: 'Yes',
      conversation: 'View Chat',
      name: 'Drew Cano',
      email: 'drew@untitleui.com',
      contact: '(818) 479-3104',
      reportAvail: 'Yes',
      intent: 'High',
    },
    {
      pageId: 'PAGEIDA001',
      project: '#7BCT',
      createdDate: 'Jan 3, 2022',
      leadFilter: 'No',
      conversation: 'View Chat',
      name: 'Orlando Diggs',
      email: 'orlando@untitleui.com',
      contact: '(804) 335-2403',
      reportAvail: 'Yes',
      intent: 'High',
    },
  ];

  return (
    <div
      className="rounded-[6.84px] border-[0.86px] p-6 border-[#EAECF0] mt-2 bg-white w-full"
      style={{
        boxShadow: `
          0px 1.71px 3.42px -1.71px rgba(16, 24, 40, 0.06),
          0px 3.42px 6.84px -1.71px rgba(16, 24, 40, 0.10)
        `,
      }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="font-jakarta font-medium text-lg leading-23.94 tracking-normal text-[#101828]">GENERATED LEADS</h2>
          <span className="flex items-center justify-center h-5 bg-[#515DEF1A] px-2 rounded-full font-inter font-medium text-[10.26px] leading-[15.39px] text-[#625DCD] ml-1 whitespace-nowrap">
            100 users
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="pl-8 pr-4 py-2 border border-[#EAECF0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
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
          <button className="p-2 border border-[#EAECF0] rounded-md">
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
          </button>
          <button className="p-2 border border-[#EAECF0] rounded-md">
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
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
                  Created Date <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                </span>
              </th>
              <th className="py-3 px-4 whitespace-nowrap">
                <span className="inline-flex items-center">
                  Lead Filled <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                </span>
              </th>
              <th className="py-3 px-4 whitespace-nowrap">
                <span className="inline-flex items-center">
                  Conversations <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                </span>
              </th>
              <th className="py-3 px-4 whitespace-nowrap">
                <span className="inline-flex items-center">
                  Name <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                </span>
              </th>
              <th className="py-3 px-4 whitespace-nowrap">
                <span className="inline-flex items-center">
                  Email Address <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                </span>
              </th>
              <th className="py-3 px-4 whitespace-nowrap">
                <span className="inline-flex items-center">
                  Contact Number <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
                </span>
              </th>
              <th className="py-3 px-4 whitespace-nowrap">
                <span className="inline-flex items-center">
                  Report Avail <IoIosArrowRoundDown className="w-4 h-4 ml-1" />
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
            {leadsData.map((lead, index) => (
              <tr key={index} className="border-b border-[#EAECF0] hover:bg-gray-50">
                <td className="py-3 px-4 font-inter font-bold text-xs leading-[7.7px] tracking-normal underline decoration-solid text-[#625DCD]">{lead.pageId}</td>
                <td className="py-3 px-4 font-inter font-bold text-xs leading-[7.7px] tracking-normal text-[#333333]">{lead.project}</td>
                <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">{lead.createdDate}</td>
                <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">{lead.leadFilter}</td>
                <td className="py-3 px-4 font-jakarta font-bold text-xs leading-[17.1px] tracking-normal text-[#625DCD]">
                  <a href="#" className="text-blue-600 hover:underline">
                    {lead.conversation}
                  </a>
                </td>
                <td className="py-3 px-4 font-inter font-medium text-xs leading-[17.1px] tracking-normal text-[#333333]">{lead.name}</td>
                <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">{lead.email}</td>
                <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">{lead.contact}</td>
                <td className="py-3 px-4 font-inter font-normal text-xs leading-[17.1px] tracking-normal text-[#667085]">{lead.reportAvail}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full font-inter font-medium text-[10.26px] leading-[15.39px] tracking-normal ${
                      lead.intent === 'High'
                        ? 'bg-[#ECFDF3] text-[#027A48]'
                        : lead.intent === 'Medium'
                        ? 'bg-[#FFB13D1A] text-[#FFB13D]'
                        : 'bg-[#EBEBEB] text-[#8D8D8D]'
                    }`}
                  >
                    <span 
                      className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${
                        lead.intent === 'High'
                          ? 'bg-[#027A48]'
                          : lead.intent === 'Medium'
                          ? 'bg-[#FFB13D]'
                          : 'bg-[#8D8D8D]'
                      }`}
                    ></span>
                    {lead.intent}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4">
        <button className="px-3 py-1 border border-[#EAECF0] rounded-md text-sm text-[#667085] hover:bg-gray-50">
          Previous
        </button>
        <div className="flex space-x-1">
          {[1, 2, 3, '...', 10].map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 border border-[#EAECF0] rounded-md text-sm ${
                page === 1 ? 'bg-blue-50 text-blue-600' : 'text-[#667085] hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="px-3 py-1 border border-[#EAECF0] rounded-md text-sm text-[#667085] hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default LeadSection; 