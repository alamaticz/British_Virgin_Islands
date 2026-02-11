import React from 'react';

const NewsSection = () => {
    const sections = [
        {
            title: "News",
            items: [
                {
                    title: "BVI FSC Industry Circular 3 of 2026 - Survey on the Effectiveness of FSC AML/CFT/CPF Outreach",
                    category: "Industry Updates",
                    date: "4th February 2026",
                    link: "#"
                },
                {
                    title: "Industry Circular 2 of 2026 - MTR Registration Portal Opens",
                    category: "Industry Updates",
                    date: "3rd February 2026",
                    link: "#"
                },
                {
                    title: "Press Release 2 of 2026 - FSC Set to Host MTR Forums & Round Table Meetings in North America, Europe and Asia",
                    category: "Press Releases",
                    date: "30th January 2026",
                    link: "#"
                }
            ]
        },
        {
            title: "Sanctions",
            items: [
                {
                    title: "Financial Sanctions Update: Russia",
                    category: "Sanctions",
                    date: "27th January 2026",
                    link: "#"
                },
                {
                    title: "Financial Sanctions Update: Syria",
                    category: "Sanctions",
                    date: "27th January 2026",
                    link: "#"
                },
                {
                    title: "Financial Sanctions Update: Democratic People's Republic of Korea",
                    category: "Sanctions",
                    date: "27th January 2026",
                    link: "#"
                }
            ]
        },
        {
            title: "Alerts",
            items: [
                {
                    title: "Public Statement 1 of 2026 - assurrityfund.com",
                    category: "Public Statements",
                    date: "13th January 2026",
                    link: "#"
                },
                {
                    title: "Public Statement 23 of 2025 - NICOLETA OPREA",
                    category: "Public Statements",
                    date: "15th December 2025",
                    link: "#"
                },
                {
                    title: "ALEMAN, CORDERO, GALINDO & LEE TRUST (BVI) LIMITED",
                    category: "Enforcement Action",
                    date: "28th November 2025",
                    link: "#"
                }
            ]
        }
    ];

    return (
        <section className="py-20 bg-[#F4F4F4]">
            <div className="bvi-container grid grid-cols-1 lg:grid-cols-3 gap-8">
                {sections.map((section, idx) => (
                    <div key={idx} className="flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-[#333] mb-4 relative pb-2 uppercase tracking-tight">
                            {section.title}
                            <div className="absolute bottom-0 left-0 w-12 h-[3px] bg-[#D23333]"></div>
                        </h2>

                        <div className="flex-grow space-y-2">
                            {section.items.map((item, iIdx) => (
                                <div key={iIdx} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between h-[160px]">
                                    <h3 className="text-[#D23333] font-bold text-[15px] leading-tight line-clamp-3 hover:underline">
                                        {item.title}
                                    </h3>
                                    <div className="mt-4">
                                        <p className="text-[#003366] text-[13px] font-bold">{item.category}</p>
                                        <p className="text-[#666] text-[12px]">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-between items-center text-[#D23333] text-[13px] font-bold uppercase tracking-tight">
                            <a href="#" className="hover:underline">More {section.title}</a>
                            <div className="flex space-x-2">
                                <button className="p-1 border border-[#D23333] rounded hover:bg-[#D23333] hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button className="p-1 border border-[#D23333] rounded hover:bg-[#D23333] hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
