import React from 'react';

const Header = () => {
    return (
        <div className="bg-white py-4">
            <div className="bvi-container flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-[#003366] rounded-full flex items-center justify-center p-1 shadow-sm">
                        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-white">
                            {/* Simplified Lighthouse Logo */}
                            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" />
                            <path d="M50 20 L40 40 L40 85 L60 85 L60 40 Z" />
                            <rect x="35" y="85" width="30" height="4" />
                            <path d="M40 35 L30 30 M60 35 L70 30 M50 30 L50 20" stroke="white" strokeWidth="2" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-[#003366] font-bold text-2xl leading-none">British Virgin Islands</div>
                        <div className="text-[#003366] text-lg font-medium tracking-tight">Financial Services Commission</div>
                    </div>
                </div>

                {/* Top Links & Search */}
                <div className="flex flex-col items-end space-y-4">
                    <div className="flex items-center space-x-6 text-[#D23333] text-sm font-medium">
                        <a href="#" className="flex items-center space-x-1 hover:opacity-80">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                            <span>Home</span>
                        </a>
                        <a href="#" className="flex items-center space-x-1 hover:opacity-80">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                            <span>Careers</span>
                        </a>
                        <a href="#" className="flex items-center space-x-1 hover:opacity-80">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                            <span>Contact Us</span>
                        </a>
                        <a href="#" className="flex items-center space-x-1 hover:opacity-80">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                            <span>Holiday Closures</span>
                        </a>
                    </div>

                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-3 pr-10 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#003366] text-sm text-gray-600 italic"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D23333]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
