import React from 'react';

const HistoryPage = () => {
    return (
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] p-8 border border-white/65">
            <h1 className="text-2xl font-bold text-[#111827] mb-6 tracking-tight">Generation History</h1>
            
            <div className="py-16 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F3F4F6] mb-4">
                    <svg className="w-8 h-8 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-[#111827] mb-1">No history yet</h3>
                <p className="text-[#6B7280]">Your generated text-to-speech files will appear here.</p>
            </div>
        </div>
    );
};

export default HistoryPage;
