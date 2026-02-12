import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const actionLinks = [
        { label: "Contact Us", link: "/contact" },
        { label: "Search Entities", link: "/regulated-entities" },
        { label: "Report Financial Crime", link: "/report-financial-crime" },
        { label: "Verify a Certificate", link: "/verify-certificate" },
        { label: "View Legislation", link: "/library/legislation" }
    ];

    return (
        <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.png')" }} // Ensure this file exists in public/
            >
                {/* Overlay for better text readability if needed, though original seems clean */}
                {/* <div className="absolute inset-0 bg-black/10"></div> */}
            </div>

            <div className="bvi-container relative h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="md:col-span-7 lg:col-span-6 text-white space-y-2 md:space-y-4 animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight drop-shadow-md">
                            <span className="block text-bvi-navy">Vigilance,</span>
                            <span className="block text-bvi-navy">Integrity,</span>
                            <span className="block text-bvi-navy">Accountability</span>
                        </h1>
                    </div>

                    {/* Right/Bottom Action Section */}
                    <div className="md:col-span-5 lg:col-span-6 flex justify-start md:justify-end mt-8 md:mt-0">
                        {/* "I would like to..." Dropdown Component */}
                        <div className="relative w-full max-w-sm">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full bg-white/95 backdrop-blur-sm text-bvi-navy text-left px-6 py-4 rounded-sm shadow-xl flex items-center justify-between group hover:bg-white transition-all duration-300 border-l-4 border-bvi-red"
                            >
                                <span className="text-xl font-serif font-medium">I would like to...</span>
                                <div className={`bg-bvi-red text-white p-2 rounded-full transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-sm shadow-2xl border-t-2 border-bvi-red z-20 animate-fade-in origin-top">
                                    <ul className="py-2">
                                        {actionLinks.map((link, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={link.link}
                                                    className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-bvi-red transition-colors border-b border-gray-100 last:border-none flex items-center"
                                                >
                                                    <svg className="w-4 h-4 mr-3 text-bvi-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* Slider Dots (Static for now as mostly single hero image per scrape) */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button className="w-3 h-3 rounded-full bg-bvi-red"></button>
                <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors"></button>
                <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors"></button>
            </div>
        </div>
    );
};

export default Hero;
