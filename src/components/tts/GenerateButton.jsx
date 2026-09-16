import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateAudio } from '../../redux/slices/ttsSlice';

const GenerateButton = () => {
    const dispatch = useDispatch();
    const { loading, text, voice } = useSelector(state => state.tts);

    const isButtonDisabled = loading || !text.trim() || !voice;

    const handleGenerate = () => {
        dispatch(generateAudio());
    };

    return (
        <div className="pt-6 mt-6 border-t border-slate-100">
            <button 
                onClick={handleGenerate}
                disabled={isButtonDisabled}
                className={`w-full h-[48px] rounded-[12px] font-semibold transition-colors shadow-[0_2px_8px_rgba(15,23,42,0.04)] flex items-center justify-center ${isButtonDisabled ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-[#4F46E5] hover:bg-[#4338CA] active:bg-[#3730A3] text-white'}`}
            >
                {loading ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                    </span>
                ) : (
                    'Generate Audio'
                )}
            </button>
        </div>
    );
};

export default GenerateButton;
