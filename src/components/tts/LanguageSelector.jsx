import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slices/ttsSlice';

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const { availableLanguages, language } = useSelector((state) => state.tts);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (code) => {
        dispatch(setLanguage(code));
        setIsOpen(false);
    };

    const selectedLanguage = availableLanguages.find(l => l.code === language);

    return (
        <div className="flex flex-col space-y-1.5 w-full relative" ref={dropdownRef}>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF] px-1">
                Language
            </label>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                disabled={availableLanguages.length === 0}
                className="w-full h-[44px] px-4 flex items-center justify-between bg-white/75 backdrop-blur-[18px] border border-slate-400/25 rounded-[12px] shadow-[0_2px_8px_rgba(15,23,42,0.04)] text-[15px] text-[#111827] outline-none focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
                <span className="truncate">
                    {availableLanguages.length === 0 ? 'Loading...' : (selectedLanguage ? selectedLanguage.name : 'Select language')}
                </span>
                <svg className={`w-4 h-4 text-[#A39B8F] transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && availableLanguages.length > 0 && (
                <div className="absolute top-[100%] left-0 w-full mt-2 bg-white/90 backdrop-blur-[24px] border border-white/80 rounded-[12px] shadow-[0_16px_40px_rgba(15,23,42,0.12)] max-h-60 overflow-y-auto z-50 py-1 scrollbar-thin">
                    {availableLanguages.map((lang) => (
                        <div
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            className={`px-4 py-2.5 cursor-pointer text-[14px] transition-colors ${language === lang.code ? 'bg-[#EEF2FF] text-[#3730A3] font-medium' : 'text-[#374151] hover:bg-slate-50'}`}
                        >
                            {lang.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
