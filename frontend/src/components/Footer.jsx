import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#222222] text-white pt-20 pb-10">
            <div className="bvi-container">
                <h2 className="text-3xl font-bold mb-12">British Virgin Islands Financial Services Commission</h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Address */}
                    <div className="flex flex-start space-x-4">
                        <div className="mt-1 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <div className="text-[15px] leading-snug">
                            18 Pasea Estate Road<br />
                            Road Town, TORTOLA, VG1110<br />
                            BRITISH VIRGIN ISLANDS
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-start space-x-4">
                        <div className="mt-1 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <div className="text-[15px] leading-snug">
                            T: (284) 494-1324<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;(284) 494-4190<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;(284) 347-4001<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;(284) 852-4123 (Client Support)<br />
                            F: (284) 494-5016<br />
                            E: commissioner@bvifsc.vg
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex flex-start space-x-4">
                        <div className="mt-1 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div className="text-[15px] leading-snug">
                            Business Hours:<br />
                            Monday - Friday<br />
                            8:30a.m. - 4:30p.m.
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-start space-x-4">
                        <div className="mt-1 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.826a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                        </div>
                        <ul className="text-[15px] leading-relaxed">
                            <li><a href="#" className="hover:underline">Terms of Use</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Site Map</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Subscribe</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
