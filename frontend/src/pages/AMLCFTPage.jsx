import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AMLCFTPage = ({ title }) => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Derive slug from path: /amlcft/policies -> amlcft-policies
    // Special cases: /amlcft/cfatf -> cfatf
    const slug = location.pathname.split('/').pop();
    // Map simple slugs to scraper filenames if needed (e.g. policies -> amlcft-policies)
    // Scraper uses: amlcft-policies, amlcft-strategies, guidance, faqs, fatf-guidance, cfatf, public-statements, legislation, risk-assessments, amlcft-media
    const slugMap = {
        "policies": "amlcft-policies",
        "strategies": "amlcft-strategies",
        "guidance": "guidance",
        "faqs": "faqs",
        "fatf-guidance": "fatf-guidance",
        "cfatf": "cfatf",
        "public-statements": "public-statements",
        "legislation": "legislation",
        "risk-assessments": "risk-assessments",
        "media": "amlcft-media"
    };

    const activeSlug = slugMap[slug] || slug;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/api/aml-content/${activeSlug}`);
                if (!response.ok) {
                    throw new Error('Content not found');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error(err);
                setError("Content coming soon or not available.");
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [activeSlug]);

    return (
        <div className="bg-white min-h-[600px]">
            {/* Header section similar to original site */}
            <div className="border-b border-gray-200 mb-8 pb-4">
                <h1 className="text-3xl font-serif text-[#003366] mb-2">{data ? data.title : title}</h1>
            </div>

            {loading && <div className="text-gray-500 italic p-8">Loading content...</div>}

            {error && (
                <div className="text-red-600 bg-red-50 p-4 rounded border border-red-100">
                    <p>{error}</p>
                    <p className="mt-2 text-sm text-gray-600">
                        Please try refreshing the page or contact support if the issue persists.
                    </p>
                </div>
            )}

            {data && (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area */}
                    <div className="flex-1">
                        <div
                            className="prose max-w-none text-gray-700 space-y-4 font-sans leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: data.content_html }}
                        />
                    </div>

                    {/* Documents Sidebar - Styled like "Related Documents" or Downloads */}
                    {data.attachments && data.attachments.length > 0 && (
                        <div className="w-full lg:w-80 flex-shrink-0">
                            <div className="bg-[#f8f9fa] border-t-4 border-[#003366] p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-[#003366] mb-4 uppercase tracking-wider border-b border-gray-200 pb-2">
                                    Documents
                                </h3>
                                <ul className="space-y-3">
                                    {data.attachments.map((doc, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={`http://localhost:8000/pdfs/${doc.filename}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-start text-sm text-gray-600 hover:text-[#D23333] transition-colors"
                                            >
                                                <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                </svg>
                                                <span className="group-hover:underline leading-snug">
                                                    {doc.name}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AMLCFTPage;
