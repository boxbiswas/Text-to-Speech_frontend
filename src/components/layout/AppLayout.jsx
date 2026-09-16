import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const AppLayout = () => {
    return (
        <div className="min-h-screen bg-[#F7F9FC] flex flex-col relative overflow-hidden">
            {/* Subtle ambient gradients as per DESIGN.md */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#0EA5E9] opacity-[0.05] blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 flex flex-col min-h-screen w-full">
                <Navbar />
                <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
