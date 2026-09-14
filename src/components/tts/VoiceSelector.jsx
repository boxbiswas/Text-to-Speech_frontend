import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVoice } from '../../redux/slices/ttsSlice';

const VoiceSelector = () => {
    const dispatch = useDispatch();
    const { availableVoices, language, voice } = useSelector((state) => state.tts);

    // Only show voices that belong to the currently selected language
    const filteredVoices = useMemo(() => {
        return availableVoices.filter(v => v.languageCode === language);
    }, [availableVoices, language]);

    const handleChange = (e) => {
        dispatch(setVoice(e.target.value));
    };

    return (
        <div className="flex flex-col space-y-1.5 w-full">
            <label htmlFor="voice" className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF] px-1">
                Voice Profile
            </label>
            <div className="relative">
                <select
                    id="voice"
                    value={voice}
                    onChange={handleChange}
                    disabled={filteredVoices.length === 0}
                    className="w-full h-[44px] px-4 bg-white/75 backdrop-blur-[18px] border border-slate-400/25 rounded-[12px] shadow-[0_2px_8px_rgba(15,23,42,0.04)] text-[15px] text-[#111827] appearance-none outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                    {filteredVoices.length === 0 ? (
                        <option value="">No voices available</option>
                    ) : (
                        filteredVoices.map((v) => (
                            <option key={v.id} value={v.id}>
                                {v.name} ({v.gender})
                            </option>
                        ))
                    )}
                </select>
                {/* Custom dropdown chevron */}
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#A39B8F]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default VoiceSelector;
