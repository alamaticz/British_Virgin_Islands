import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ title, category, date }) => (
    <article className="mb-6 border-b border-gray-100 pb-4 last:border-0">
        <h4 className="font-bold text-bvi-navy mb-2 hover:text-bvi-red transition-colors text-sm leading-snug">
            <Link to="#">{title}</Link>
        </h4>
        <div className="flex items-center text-xs text-gray-500 mb-1">
            <span className="uppercase tracking-wider font-semibold text-gray-400 mr-2">{category}</span>
        </div>
        <div className="text-xs text-gray-400 font-medium">
            {date}
        </div>
    </article>
);

const NewsSection = () => {
    return (
        <div className="py-16 bg-white">
            <div className="bvi-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content Area (News, Sanctions, Alerts) */}
                    <div className="lg:col-span-9">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* News Feed */}
                            <div>
                                <h2 className="section-title text-2xl font-serif font-bold text-bvi-navy mb-6 pb-2 border-b-2 border-bvi-red inline-block">News</h2>
                                <div>
                                    <NewsItem
                                        title="BVI FSC Industry Circular 3 of 2026 - Survey on the Effectiveness of FSC AML/CFT/CPF Outreach"
                                        category="Industry Updates"
                                        date="4th February 2026"
                                    />
                                    <NewsItem
                                        title="Industry Circular 2 of 2026 - MTR Registration Portal Opens"
                                        category="Industry Updates"
                                        date="3rd February 2026"
                                    />
                                    <NewsItem
                                        title="Press Release 2 of 2026 - FSC Set to Host MTR Forums & Round Table Meetings"
                                        category="Press Releases"
                                        date="30th January 2026"
                                    />
                                    <Link to="/news" className="text-bvi-red text-sm font-bold hover:underline mt-4 inline-block">More News &rarr;</Link>
                                </div>
                            </div>

                            {/* Sanctions Feed */}
                            <div>
                                <h2 className="section-title text-2xl font-serif font-bold text-bvi-navy mb-6 pb-2 border-b-2 border-bvi-red inline-block">Sanctions</h2>
                                <div>
                                    <NewsItem
                                        title="Financial Sanctions Update: Russia"
                                        category="Sanctions"
                                        date="27th January 2026"
                                    />
                                    <NewsItem
                                        title="Financial Sanctions Update: Syria"
                                        category="Sanctions"
                                        date="27th January 2026"
                                    />
                                    <NewsItem
                                        title="Financial Sanctions Update: Democratic People’s Republic of Korea"
                                        category="Sanctions"
                                        date="27th January 2026"
                                    />
                                    <Link to="/international-sanctions" className="text-bvi-red text-sm font-bold hover:underline mt-4 inline-block">More Sanctions &rarr;</Link>
                                </div>
                            </div>

                            {/* Alerts Feed */}
                            <div>
                                <h2 className="section-title text-2xl font-serif font-bold text-bvi-navy mb-6 pb-2 border-b-2 border-bvi-red inline-block">Alerts</h2>
                                <div>
                                    <NewsItem
                                        title="Public Statement 2 of 2026 - PAULINA KOSINSKA"
                                        category="Public Statements"
                                        date="10th February 2026"
                                    />
                                    <NewsItem
                                        title="Public Statement 2 of 2026 - Sorin Iancu"
                                        category="Alerts"
                                        date="10th February 2026"
                                    />
                                    <NewsItem
                                        title="Public Statement 1 of 2026 - assurrityfund.com"
                                        category="Public Statements"
                                        date="13th January 2026"
                                    />
                                    <Link to="/library/alerts" className="text-bvi-red text-sm font-bold hover:underline mt-4 inline-block">More Alerts &rarr;</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Sidebar / About Block */}
                    <div className="lg:col-span-3">
                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 h-full">
                            <h2 className="text-xl font-serif font-bold text-bvi-navy mb-4">About the Commission</h2>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                The BVI Financial Services Commission is the Territory’s single regulatory authority for financial services business. The Commission authorises and licences entities and persons to conduct financial services business in compliance with relevant BVI legislation.
                            </p>
                            <div className="space-y-3">
                                <Link to="/about-us" className="block w-full text-center py-2 px-4 border border-bvi-navy text-bvi-navy hover:bg-bvi-navy hover:text-white transition-all text-sm font-semibold uppercase tracking-wider rounded-sm">Learn More</Link>
                                <Link to="/mission" className="block w-full text-center py-2 px-4 border border-gray-300 text-gray-600 hover:border-bvi-navy hover:text-bvi-navy transition-all text-sm font-semibold uppercase tracking-wider rounded-sm">Our Mission</Link>
                                <Link to="/subscribe" className="block w-full text-center py-2 px-4 bg-bvi-red text-white hover:bg-[#b01e2b] transition-all text-sm font-semibold uppercase tracking-wider rounded-sm shadow-sm">Subscribe</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsSection;
