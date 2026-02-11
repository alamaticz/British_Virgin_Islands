import React from 'react';
import { Outlet } from 'react-router-dom';
import AMLCFTSidebar from '../components/AMLCFTSidebar';

const AMLCFTLayout = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="bvi-container">
                <div className="flex flex-col md:flex-row gap-8">
                    <AMLCFTSidebar />
                    <div className="flex-1 bg-white p-8 rounded-lg shadow-sm border border-gray-100 min-h-[500px]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AMLCFTLayout;
