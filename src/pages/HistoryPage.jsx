import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from '../redux/slices/historySlice';
import HistoryCard from '../components/history/HistoryCard';

const HistoryPage = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.history);

    useEffect(() => {
        dispatch(fetchHistory());
    }, [dispatch]);

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-2xl font-bold text-[#111827] tracking-tight">Speech History</h1>
                    <p className="text-[#6B7280] mt-1 text-[15px]">Review and download your previously generated audio clips.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/50 shadow-sm">
                    <span className="text-sm font-medium text-[#4F46E5]">{items.length} clips</span>
                </div>
            </div>

            {error && (
                <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                    Failed to load history: {error}
                </div>
            )}

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="h-64 bg-white/40 backdrop-blur-[10px] rounded-[24px] border border-white/50 animate-pulse"></div>
                    ))}
                </div>
            ) : items.length === 0 ? (
                <div className="bg-white/70 backdrop-blur-[18px] rounded-[32px] shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-white/65 p-16 text-center">
                    <div className="w-16 h-16 bg-[#EEF2FF] text-[#4F46E5] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">No history yet</h3>
                    <p className="text-[#6B7280]">Go to the Studio to generate your first text-to-speech audio.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map(item => (
                        <HistoryCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HistoryPage;
