import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
    {
        label: "About Us",
        link: "/about-us",
        children: [
            { label: "Mission", link: "/mission" },
            { label: "Accountability", link: "/accountability" },
            { label: "Functions", link: "/functions" },
            {
                label: "Governance",
                link: "/about-us/governance",
                children: [
                    { label: "Board of Commissioners", link: "/about-us/governance/board-of-commissioners" },
                    { label: "Organisational Chart", link: "/organisational-chart" },
                    { label: "Management", link: "/about-us/governance/management" },
                    { label: "Statutory Committees", link: "/statutory-committees" }
                ]
            },
            {
                label: "Divisions",
                link: "/divisions",
                children: [
                    { label: "Registry of Corporate Affairs", link: "/registry-corporate-affairs" },
                    { label: "Banking, Insolvency & Fiduciary", link: "/division/banking-fiduciary" },
                    { label: "Compliance Inspection Unit", link: "/compliance-inspection-unit" },
                    { label: "Corporate Services", link: "/division/corporate-services" },
                    { label: "Human Resources", link: "/division/human-resources" },
                    { label: "Internal Audit Unit", link: "/internal-audit-unit" },
                    { label: "Insurance", link: "/insurance" },
                    { label: "Investment Business", link: "/division/investment-business" },
                    { label: "Legal", link: "/legal" },
                    { label: "Policy, Research & Statistics", link: "/policy-research-statistics" },
                    { label: "Enforcement", link: "/enforcement" }
                ]
            },
            {
                label: "BVI Asia Representative Office",
                link: "/bvi-asia-rep-office",
                children: [
                    { label: "Services", link: "/bvi-asia-rep-office/services" },
                    { label: "Our Team", link: "/bvi-asia-rep-office/team" },
                    { label: "Contact Us", link: "/bvi-asia-rep-office/contact" }
                ]
            },
            { label: "Useful Links", link: "/useful-links" }
        ]
    },
    {
        label: "Entities",
        link: "/entities",
        children: [
            {
                label: "Regulated Entities",
                link: "/regulated-entities",
                children: [
                    { label: "Banking, Financing & Money Services", link: "/regulated-entities/banking" },
                    { label: "Trust & Corporate Services", link: "/regulated-entities/trust" },
                    { label: "Insurance", link: "/regulated-entities/insurance" },
                    { label: "Investment Business", link: "/regulated-entities/investment" },
                    { label: "Insolvency Practitioners", link: "/insolvency-practitioners" },
                    { label: "Registered Agents", link: "/registered-agents" },
                    { label: "Virtual Assets Service Providers", link: "/vasp" }

                ]
            },
            {
                label: "Other Entities",
                link: "/other-entities",
                children: [
                    { label: "Approved Auditors", link: "/approved-auditors" },
                    { label: "Corporate Compliance Officers", link: "/corporate-compliance-officers" },
                    { label: "Registered Trade Marks Agents", link: "/trade-marks-agents" },
                    { label: "Legal Advocates & Auditors", link: "/legal-advocates" }
                ]
            }
        ]
    },
    {
        label: "Beneficial Ownership",
        link: "/beneficial-ownership",
        children: [
            { label: "FAQs", link: "/beneficial-ownership/faqs" }
        ]
    },
    {
        label: "AML/CFT",
        link: "/amlcft",
        children: [
            { label: "AML/CFT Policies", link: "/amlcft/policies" },
            { label: "AML/CFT Strategies", link: "/amlcft/strategies" },
            { label: "Guidance", link: "/amlcft/guidance" },
            { label: "FAQs", link: "/amlcft/faqs" },
            { label: "FATF Guidance", link: "/amlcft/fatf-guidance" },
            { label: "CFATF", link: "/amlcft/cfatf" },
            { label: "Public Statements", link: "/amlcft/public-statements" },
            { label: "Legislation", link: "/amlcft/legislation" },
            { label: "Risk Assessments", link: "/amlcft/risk-assessments" },
            { label: "AML/CFT Media", link: "/amlcft/media" }
        ]
    },
    {
        label: "Sandbox",
        link: "/sandbox",
        children: [
            { label: "About Us", link: "/sandbox/about" },
            { label: "Key Resources", link: "/sandbox/resources" },
            { label: "Forms", link: "/sandbox/forms" },
            { label: "Publications", link: "/sandbox/publications" },
            { label: "Sandbox Participants", link: "/sandbox/participants" },
            { label: "Contact Us", link: "/sandbox/contact" }
        ]
    },
    {
        label: "International Sanctions",
        link: "/international-sanctions",
        children: [
            { label: "Amendments Post Brexit", link: "/sanctions/brexit" },
            { label: "About Sanctions", link: "/sanctions/about" },
            { label: "Legislative Framework", link: "/sanctions/legislation" },
            { label: "Consolidated List", link: "/sanctions/list" },
            { label: "Financial Sanctions Notices", link: "/sanctions/notices" },
            { label: "UK Sanctions List", link: "/sanctions/uk-list" },
            { label: "Sanctions By Regime", link: "/sanctions/regime" },
            { label: "Guidance and Forms", link: "/sanctions/guidance" },
            { label: "Public Notices", link: "/sanctions/public-notices" },
            { label: "Training and Media", link: "/sanctions/training" },
            { label: "General Licences", link: "/sanctions/licences" },
            { label: "UN Consolidated List", link: "/sanctions/un-list" },
            { label: "UN Secretariat Updates", link: "/sanctions/un-updates" }
        ]
    },
    {
        label: "Library",
        link: "/library",
        children: [
            { label: "Publications", link: "/library/publications" },
            { label: "Legislation", link: "/library/legislation" },
            { label: "Annual Reports", link: "/library/annual-reports" },
            { label: "Guidance", link: "/library/guidance" },
            { label: "Alerts", link: "/library/alerts" },
            { label: "Enforcement Action", link: "/library/enforcement" },
            { label: "Industry Newsletters", link: "/library/newsletters" },
            { label: "Forms", link: "/library/forms" }
        ]
    },
    {
        label: "News",
        link: "/news",
        children: [
            { label: "Latest News", link: "/news/latest" },
            { label: "Press Releases", link: "/news/press-releases" },
            { label: "Industry Updates", link: "/news/industry-updates" },
            { label: "Consultative Documents", link: "/news/consultative-documents" }
        ]
    },
    {
        label: "Annual Returns",
        link: "/annual-returns",
        children: [
            { label: "Guidance", link: "/annual-returns/guidance" },
            { label: "Returns", link: "/annual-returns/returns" }
        ]
    },
    { label: "Careers", link: "/careers" },
    { label: "Contact Us", link: "/contact" },
    { label: "Events", link: "/events" }
];

const MenuItem = ({ item, depth = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <li
            className={`relative group ${depth === 0 ? 'inline-block' : 'block'}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Link
                to={item.link}
                className={`
                    block transition-colors duration-200
                    ${depth === 0
                        ? 'px-3 py-4 text-sm font-bold text-bvi-navy uppercase hover:text-bvi-red hover:bg-gray-50'
                        : 'px-4 py-2 text-sm text-gray-700 hover:text-bvi-red hover:bg-gray-50 border-b border-gray-100 last:border-none'
                    }
                    ${isOpen ? 'text-bvi-red bg-gray-50' : ''}
                `}
            >
                <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {hasChildren && depth > 0 && (
                        <svg className="w-3 h-3 ml-2 transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                    {hasChildren && depth === 0 && (
                        <svg className={`w-3 h-3 ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </div>
            </Link>

            {/* Dropdown */}
            {hasChildren && (
                <ul
                    className={`
                        absolute z-50 bg-white shadow-lg border-t-2 border-bvi-red
                        min-w-[240px] transition-all duration-200 ease-in-out
                        ${depth === 0 ? 'left-0 top-full' : 'left-full top-0'}
                        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}
                    `}
                >
                    {item.children.map((child, index) => (
                        <MenuItem key={index} item={child} depth={depth + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 hidden md:block z-40 relative shadow-sm">
            <div className="bvi-container">
                <ul className="flex flex-wrap items-center justify-center space-x-1 lg:space-x-4">
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} item={item} />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
