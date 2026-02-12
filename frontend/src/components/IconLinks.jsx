import React from 'react';
import { Link } from 'react-router-dom';

const IconLinks = () => {
    const links = [
        {
            title: "Certificate Verification",
            icon: "/icon-validate.png",
            link: "/verify-certificate"
        },
        {
            title: "Regulated Entities",
            icon: "/icon-monitor.png",
            link: "/regulated-entities"
        },
        {
            title: "Legislation",
            icon: "/icon-certification.png", // Using available icon as placeholder if exact one missing
            link: "/library/legislation"
        },
        {
            title: "Annual Returns",
            icon: "/icon-monitor.png", // Reusing monitor icon or use proper one if available
            link: "/annual-returns"
        }
    ];

    return (
        <div className="bg-gray-50 py-12 border-b border-gray-200">
            <div className="bvi-container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {links.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100"
                        >
                            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors">
                                <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100" />
                            </div>
                            <h3 className="text-bvi-navy font-bold text-lg group-hover:text-bvi-red transition-colors font-serif">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IconLinks;
