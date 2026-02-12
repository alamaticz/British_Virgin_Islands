import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-6">
            <div className="bvi-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Address */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-bvi-navy font-serif mb-4">British Virgin Islands<br />Financial Services Commission</h4>
                        <div className="text-gray-600 text-sm leading-relaxed">
                            <p>18 Pasea Estate Road</p>
                            <p>Road Town, TORTOLA, VG1110</p>
                            <p>BRITISH VIRGIN ISLANDS</p>
                        </div>
                    </div>

                    {/* Column 2: Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-bvi-navy font-serif mb-4">Contact Us</h4>
                        <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                            <p><span className="font-semibold">T:</span> (284) 494-1324</p>
                            <p className="pl-4">(284) 494-4190</p>
                            <p className="pl-4">(284) 347-4001</p>
                            <p className="pl-4">(284) 852-4123 (Client Support)</p>
                            <p><span className="font-semibold">F:</span> (284) 494-5016</p>
                            <p><span className="font-semibold">E:</span> <a href="mailto:commissioner@bvifsc.vg" className="text-bvi-red hover:underline">commissioner@bvifsc.vg</a></p>
                        </div>
                    </div>

                    {/* Column 3: Business Hours */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-bvi-navy font-serif mb-4">Business Hours</h4>
                        <div className="text-gray-600 text-sm leading-relaxed">
                            <p>Monday - Friday</p>
                            <p>8:30a.m. - 4:30p.m.</p>
                        </div>
                    </div>

                    {/* Column 4: Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-bvi-navy font-serif mb-4">Quick Links</h4>
                        <ul className="text-gray-600 text-sm space-y-2">
                            <li><Link to="/terms-of-use" className="hover:text-bvi-red transition-colors">Terms of Use</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-bvi-red transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/site-map" className="hover:text-bvi-red transition-colors">Site Map</Link></li>
                            <li><Link to="/contact" className="hover:text-bvi-red transition-colors">Contact Us</Link></li>
                            <li><a href="https://www.bvifsc.vg/subscribe" target="_blank" rel="noopener noreferrer" className="hover:text-bvi-red transition-colors">Subscribe</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 pt-6 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} British Virgin Islands Financial Services Commission. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
