import React from 'react';

const IconLinks = () => {
    const links = [
        {
            title: "Certificate Verification",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    <circle cx="12" cy="12" r="3" stroke="#D23333" />
                </svg>
            )
        },
        {
            title: "Trust and Corporate Services Providers",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        },
        {
            title: "Micro Business Companies",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Corporate Structures",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="bvi-container grid grid-cols-1 md:grid-cols-4 gap-8">
                {links.map((link, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                        <div className="text-[#D23333] mb-6 transform group-hover:scale-110 transition-transform">
                            {link.icon}
                        </div>
                        <h3 className="text-[#003366] font-bold text-xl mb-6 leading-tight min-h-[56px] flex items-center">
                            {link.title}
                        </h3>
                        <a href="#" className="text-[#D23333] font-medium text-sm hover:underline">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IconLinks;
