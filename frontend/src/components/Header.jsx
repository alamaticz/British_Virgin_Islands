import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="top-header" className="bg-white py-4 md:py-6 border-b border-gray-100">
            <div className="bvi-container flex items-center justify-between">
                {/* Logo */}
                <Link to="/" id="logo" className="flex-shrink-0 group">
                    <img
                        src="/logo.png"
                        alt="British Virgin Islands Financial Services Commission"
                        className="h-12 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Top Right Section */}
                <div id="top-right" className="flex flex-col items-end space-y-4">
                    {/* Mobile Controls (visible on mobile only) */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button id="mobile-search-button" className="text-bvi-navy hover:text-bvi-red p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <div id="mobile-nav-button">
                            <a id="hamburger" href="#menu" className="block text-bvi-navy hover:text-bvi-red p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Desktop Utility Nav & Search */}
                    <div className="hidden md:flex flex-col items-end space-y-3">
                        {/* Secondary Menu */}
                        <nav className="flex items-center space-x-6 text-sm font-bold text-bvi-red uppercase tracking-wider">
                            <Link to="/" className="hover:text-bvi-navy transition-colors duration-200">Home</Link>
                            <Link to="/careers" className="hover:text-bvi-navy transition-colors duration-200">Careers</Link>
                            <Link to="/contact" className="hover:text-bvi-navy transition-colors duration-200">Contact Us</Link>
                            <div className="flex items-center space-x-1 hover:text-bvi-navy transition-colors duration-200 cursor-pointer">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
                                <a href="#" target="_blank" rel="noreferrer">Holiday Closures</a>
                            </div>
                        </nav>

                        {/* Search Form */}
                        <form className="relative flex items-center group">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-bvi-navy focus:ring-1 focus:ring-bvi-navy text-sm placeholder-gray-500 text-gray-700 bg-white shadow-inner transition-all duration-200"
                            />
                            <button type="submit" className="absolute right-0 top-0 bottom-0 px-4 text-white bg-bvi-red hover:bg-[#b01e2b] transition-colors duration-200 rounded-r-sm flex items-center justify-center cursor-pointer">
                                <span className="font-bold text-xs uppercase tracking-wider mr-1">Submit</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
