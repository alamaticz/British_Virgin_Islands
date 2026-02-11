import React from 'react';

const AboutSection = () => {
    return (
        <section className="bg-[#003366] py-20 relative overflow-hidden">
            {/* Pattern Overlay - simplified diagonal lines */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            -45deg,
            #fff,
            #fff 1px,
            transparent 1px,
            transparent 10px
          )`
                }}
            ></div>

            <div className="bvi-container relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-4xl font-bold text-white mb-10">About the Commission</h2>

                    <p className="text-white text-lg leading-relaxed mb-12">
                        The BVI Financial Services Commission is the Territory's single regulatory authority for financial services business. The Commission authorises and licences entities and persons to conduct financial services business in compliance with relevant BVI legislation.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="min-w-[180px] border-2 border-white text-white py-3 px-8 font-bold text-[15px] hover:bg-white hover:text-[#003366] transition-colors rounded-sm uppercase tracking-tight">
                            Learn More
                        </button>
                        <button className="min-w-[180px] border-2 border-white text-white py-3 px-8 font-bold text-[15px] hover:bg-white hover:text-[#003366] transition-colors rounded-sm uppercase tracking-tight">
                            Our Mission
                        </button>
                        <button className="min-w-[180px] border-2 border-white text-white py-3 px-8 font-bold text-[15px] hover:bg-white hover:text-[#003366] transition-colors rounded-sm uppercase tracking-tight">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
