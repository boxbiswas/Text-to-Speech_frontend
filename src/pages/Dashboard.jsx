import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVoices } from '../redux/slices/ttsSlice';
import TextInput from '../components/tts/TextInput';
import LanguageSelector from '../components/tts/LanguageSelector';
import VoiceSelector from '../components/tts/VoiceSelector';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.tts);

    useEffect(() => {
        dispatch(fetchVoices());
    }, [dispatch]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Main Text Input */}
            <div className="lg:col-span-8">
                <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(15,23,42,0.04)] p-8 border border-white/65 min-h-[500px] flex flex-col">
                    <h1 className="text-2xl font-bold text-[#111827] mb-8 tracking-tight">TTS Studio</h1>
                    
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                            Failed to load voices: {error}
                        </div>
                    )}
                    
                    <div className="flex-1 flex flex-col">
                        <TextInput />
                    </div>
                </div>
            </div>

            {/* Right Column - Controls */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(15,23,42,0.04)] p-8 border border-white/65">
                    <h2 className="text-[18px] font-bold text-[#111827] mb-6">Voice Settings</h2>
                    
                    <div className="space-y-6">
                        <LanguageSelector />
                        <VoiceSelector />
                        
                        {/* Placeholder for the upcoming Generate Button (Day 8) */}
                        <div className="pt-6 mt-6 border-t border-slate-100">
                            <button className="w-full h-[48px] bg-[#4F46E5] hover:bg-[#4338CA] active:bg-[#3730A3] text-white rounded-[12px] font-semibold transition-colors opacity-50 cursor-not-allowed shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                                Generate Audio
                            </button>
                            <p className="text-center text-[12px] text-[#6B7280] mt-3">Generation comes in Day 8</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
