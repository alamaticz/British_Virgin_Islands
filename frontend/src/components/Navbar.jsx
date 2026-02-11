import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="bvi-container">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img className="h-12 w-auto" src="/logo.png" alt="British Virgin Islands Financial Services Commission" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                        <Link to="/entities" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Entities</Link>
                        <Link to="/beneficial-ownership" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Beneficial Ownership</Link>

                        {/* AML/CFT Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="text-gray-700 group-hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                                AML/CFT
                                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link to="/amlcft/policies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">AML/CFT Policies</Link>
                                        <Link to="/amlcft/strategies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">AML/CFT Strategies</Link>
                                        <Link to="/amlcft/guidance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Guidance</Link>
                                        <Link to="/amlcft/faqs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">FAQs</Link>
                                        <Link to="/amlcft/fatf-guidance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">FATF Guidance</Link>
                                        <Link to="/amlcft/cfatf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">CFATF</Link>
                                        <Link to="/amlcft/public-statements" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Public Statements</Link>
                                        <Link to="/amlcft/legislation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Legislation</Link>
                                        <Link to="/amlcft/risk-assessments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Risk Assessments</Link>
                                        <Link to="/amlcft/media" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">AML/CFT Media</Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/sandbox" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Sandbox</Link>
                        <Link to="/international-sanctions" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">International Sanctions</Link>
                        <Link to="/library" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Library</Link>
                        <Link to="/news" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">News</Link>
                        <Link to="/annual-returns" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Annual Returns</Link>
                        <Link to="/events" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Events</Link>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden lg:block relative">
                        <input type="text" placeholder="Search" className="bg-gray-100 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
