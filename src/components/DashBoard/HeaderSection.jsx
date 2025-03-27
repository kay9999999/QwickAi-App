import React, { useState } from 'react';
import { FiSettings, FiSearch, FiBell, FiMoreHorizontal, FiMoreVertical } from 'react-icons/fi';
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineAppstore, AiOutlineCopy } from 'react-icons/ai';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { PiStack } from "react-icons/pi";
import { TbTemplate } from "react-icons/tb";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { US, CN, ES, SA } from 'country-flag-icons/react/3x2';
import Logo from "../../components/Header/Logo";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { FaChevronDown } from 'react-icons/fa';
import { GoGraph } from "react-icons/go";

const HeaderSection = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleLangDropdown = () => setIsLangDropdownOpen(!isLangDropdownOpen);
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLangDropdownOpen(false);
  };

  // Demo data for charts
  const lineChartData = [
    { name: 'Jan', value1: 15000, value2: 20000, value3: 25000 },
    { name: 'Feb', value1: 20000, value2: 25000, value3: 30000 },
    { name: 'Mar', value1: 25000, value2: 30000, value3: 35000 },
    { name: 'Apr', value1: 35000, value2: 32000, value3: 25000 },
    { name: 'May', value1: 30000, value2: 35000, value3: 28000 },
    { name: 'Jun', value1: 25000, value2: 30000, value3: 35000 },
  ];

  const barChartData = Array(25).fill().map((_, idx) => ({
    name: idx + 1,
    value: Math.floor(Math.random() * 200) + 50,
  }));

  return (
    <>
      {/* Header */}
      <header className="py-2 px-3 sm:px-4 flex items-center justify-between border-t rounded-t-lg bg-white shadow-sm">
        <div className="flex items-center">
          <Logo className="text-[#225FC3] w-24 sm:w-32 md:w-40" color="black" />
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="text-gray-600 hover:text-gray-900 p-1">
            <FiSearch size={18} />
          </button>
          <div className="relative">
            <button className="text-gray-600 hover:text-gray-900" onClick={toggleLangDropdown}>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
                {selectedLanguage === 'English' && <US width="100%" height="100%" className="scale-[1.5]" />}
                {selectedLanguage === 'Chinese' && <CN width="100%" height="100%" className="scale-[1.5]" />}
                {selectedLanguage === 'Español' && <ES width="100%" height="100%" className="scale-[1.5]" />}
                {selectedLanguage === 'Arabic' && <SA width="100%" height="100%" className="scale-[1.5]" />}
              </div>
            </button>
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 sm:w-40 bg-white rounded-md shadow-lg z-50">
                <div className="py-1">
                  {['English', 'Chinese', 'Español', 'Arabic'].map((lang) => (
                    <button
                      key={lang}
                      className="flex items-center px-3 py-1.5 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => selectLanguage(lang)}
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center overflow-hidden mr-2">
                        {lang === 'English' && <US width="100%" height="100%" className="scale-[1.5]" />}
                        {lang === 'Chinese' && <CN width="100%" height="100%" className="scale-[1.5]" />}
                        {lang === 'Español' && <ES width="100%" height="100%" className="scale-[1.5]" />}
                        {lang === 'Arabic' && <SA width="100%" height="100%" className="scale-[1.5]" />}
                      </div>
                      <span>{lang}</span>
                      {selectedLanguage === lang && <span className="ml-auto text-green-500">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className="text-gray-600 hover:text-gray-900 p-1">
            <FiBell size={18} />
          </button>
          <button className="text-gray-600 hover:text-gray-900 p-1">
            <FiSettings size={18} />
          </button>
          <div className="flex items-center gap-1 sm:gap-2">
            <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Profile" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
            <div className="hidden sm:block text-left">
              <p className="text-xs text-gray-500">Admin</p>
              <p className="text-sm font-medium text-gray-700">Carolyn Perkins</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white px-3 py-2 sm:px-4 shadow-sm">
        <nav className="flex space-x-2 sm:space-x-4 overflow-x-auto whitespace-nowrap">
          {[
            { icon: MdOutlineDashboardCustomize, label: 'Dashboard', active: true },
            { icon: AiOutlineCopy, label: 'My Pages' },
            { icon: PiStack, label: 'Versions' },
            { icon: AiOutlineAppstore, label: 'Agents' },
            { icon: TbTemplate, label: 'Template' },
            { icon: FiSettings, label: 'Settings' },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`flex items-center px-2 py-1.5 sm:px-3 sm:py-2 ${active ? 'text-[#4F46E5]' : 'text-[#666F8D] hover:text-[#4F46E5]'}`}
            >
              <Icon className={`mr-1 sm:mr-2 ${active ? 'text-[#4F46E5]' : ''}`} size={16} />
              <span className="font-inter font-semibold text-xs sm:text-sm">{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default HeaderSection;
