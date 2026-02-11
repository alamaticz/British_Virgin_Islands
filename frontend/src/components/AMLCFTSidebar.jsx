import React from 'react';
import { NavLink } from 'react-router-dom';

const AMLCFTSidebar = () => {
    const links = [
        { name: 'AML/CFT Policies', path: '/amlcft/policies' },
        { name: 'AML/CFT Strategies', path: '/amlcft/strategies' },
        { name: 'Guidance', path: '/amlcft/guidance' },
        { name: 'FAQs', path: '/amlcft/faqs' },
        { name: 'FATF Guidance', path: '/amlcft/fatf-guidance' },
        { name: 'CFATF', path: '/amlcft/cfatf' },
        { name: 'Public Statements', path: '/amlcft/public-statements' },
        { name: 'Legislation', path: '/amlcft/legislation' },
        { name: 'Risk Assessments', path: '/amlcft/risk-assessments' },
        { name: 'AML/CFT Media', path: '/amlcft/media' },
    ];

    return (
        <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-bvi-navy p-4">
                    <h3 className="text-white font-playfair font-semibold text-lg">AML/CFT</h3>
                </div>
                <nav className="flex flex-col">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `px-4 py-3 text-sm font-medium border-b border-gray-50 flex items-center justify-between transition-colors ${isActive
                                    ? 'text-bvi-red bg-red-50 border-l-4 border-l-bvi-red'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-bvi-navy'
                                }`
                            }
                        >
                            {link.name}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default AMLCFTSidebar;
