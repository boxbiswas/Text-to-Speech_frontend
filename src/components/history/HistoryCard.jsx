import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteHistory } from '../../redux/slices/historySlice';
import { Trash2, Play, Download, Clock } from 'lucide-react';

const HistoryCard = ({ item }) => {
    const dispatch = useDispatch();
    const audioRef = useRef(null);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this audio?")) {
            dispatch(deleteHistory(item.id));
        }
    };

    const formattedDate = new Date(item.createdAt).toLocaleString('en-US', { 
        month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true 
    });

    return (
        <div className="bg-white/75 backdrop-blur-[18px] border border-white/60 rounded-[24px] p-6 shadow-[0_4px_24px_rgba(15,23,42,0.04)] relative group transition-all hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)] flex flex-col">
            
            {/* Header: Date and Voice Metadata */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center space-x-2 text-[12px] font-medium text-[#6B7280] mb-1">
                        <Clock size={14} />
                        <span>{formattedDate}</span>
                    </div>
                    <div className="text-[14px] font-semibold text-[#374151] flex items-center space-x-2">
                        <span className="bg-[#EEF2FF] text-[#4F46E5] px-2 py-0.5 rounded-full text-[12px]">{item.language}</span>
                        <span>{item.voice}</span>
                        <span className="text-[#9CA3AF] text-[12px]">• {item.audioFormat.toUpperCase()}</span>
                    </div>
                </div>
                <button 
                    onClick={handleDelete}
                    className="p-2 text-[#9CA3AF] hover:text-red-500 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    title="Delete"
                >
                    <Trash2 size={18} />
                </button>
            </div>

            {/* Text Snippet */}
            <div className="mb-6 flex-1">
                <p className="text-[#111827] text-[15px] leading-relaxed line-clamp-3">
                    {item.text}
                </p>
            </div>

            {/* Audio Player and Download */}
            <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100/80 mt-auto flex items-center space-x-3">
                <audio 
                    ref={audioRef}
                    src={item.audioUrl} 
                    controls 
                    className="w-full h-10 outline-none" 
                />
                <a 
                    href={item.audioUrl}
                    download={`speech_${item.id}.${item.audioFormat}`}
                    className="p-2.5 bg-white border border-slate-200 shadow-sm rounded-full text-[#4F46E5] hover:bg-[#EEF2FF] hover:border-[#4F46E5]/30 transition-all flex-shrink-0"
                    title={`Download ${item.audioFormat.toUpperCase()}`}
                >
                    <Download size={18} />
                </a>
            </div>
        </div>
    );
};

export default HistoryCard;
