import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-[600px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1600')" }}>
            {/* Blurred background effect */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

            <div className="bvi-container relative z-10 w-full">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold text-[#003366] leading-[1.1] mb-12">
                        Vigilance,<br />
                        Integrity,<br />
                        Accountability
                    </h1>

                    <div className="relative max-w-sm">
                        <select className="w-full bg-white border border-gray-200 px-4 py-4 rounded-sm text-lg text-gray-700 appearance-none focus:outline-none shadow-sm cursor-pointer">
                            <option>I would like to...</option>
                            <option>Contact Us</option>
                            <option>Search Entities</option>
                            <option>Report Financial Crime</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-6 h-6 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="w-3 h-3 bg-[#D23333] rounded-full scale-110"></div>
            </div>
        </div>
    );
};

export default Hero;
