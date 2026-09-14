import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../../redux/slices/ttsSlice';
import { Trash2 } from 'lucide-react';

const MAX_CHARS = 1000;

const TextInput = () => {
    const dispatch = useDispatch();
    const text = useSelector((state) => state.tts.text);

    const handleChange = (e) => {
        const val = e.target.value;
        if (val.length <= MAX_CHARS) {
            dispatch(setText(val));
        }
    };

    const handleClear = () => {
        dispatch(setText(''));
    };

    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const isNearLimit = charCount > MAX_CHARS * 0.9;

    return (
        <div className="w-full flex flex-col space-y-2">
            <div className="flex justify-between items-center px-1">
                <label htmlFor="tts-text" className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    Text to Synthesize
                </label>
                {charCount > 0 && (
                    <button
                        onClick={handleClear}
                        className="flex items-center text-[12px] font-medium text-[#6B7280] hover:text-[#DC2626] transition-colors"
                    >
                        <Trash2 size={14} className="mr-1" />
                        Clear text
                    </button>
                )}
            </div>

            <textarea
                id="tts-text"
                value={text}
                onChange={handleChange}
                placeholder="Type or paste the text you want to convert to speech..."
                className="w-full h-48 sm:h-64 p-5 bg-white/75 backdrop-blur-[18px] border border-slate-400/25 rounded-[12px] text-[16px] leading-relaxed text-[#111827] placeholder:text-[#9CA3AF] shadow-[0_2px_8px_rgba(15,23,42,0.04)] resize-none outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/10 transition-all duration-200"
            />

            <div className="flex justify-between items-center px-2 pt-1 text-[13px]">
                <span className="text-[#6B7280] font-medium">
                    {wordCount} {wordCount === 1 ? 'word' : 'words'}
                </span>
                <span className={`font-medium transition-colors duration-200 ${isNearLimit ? 'text-[#DC2626]' : 'text-[#6B7280]'}`}>
                    {charCount} / {MAX_CHARS}
                </span>
            </div>
        </div>
    );
};

export default TextInput;
