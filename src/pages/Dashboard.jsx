import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVoices } from '../redux/slices/ttsSlice';
import TextInput from '../components/tts/TextInput';
import LanguageSelector from '../components/tts/LanguageSelector';
import VoiceSelector from '../components/tts/VoiceSelector';
import FormatSelector from '../components/tts/FormatSelector';
import GenerateButton from '../components/tts/GenerateButton';
import AudioPlayer from '../components/tts/AudioPlayer';

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
                <div className="bg-white/70 backdrop-blur-[18px] rounded-[32px] shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-8 border border-white/65 min-h-[500px] flex flex-col relative z-10">
                    <h1 className="text-2xl font-bold text-[#111827] mb-8 tracking-tight">TTS Studio</h1>
                    
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                            Failed to load voices: {error}
                        </div>
                    )}
                    
                    <div className="flex-1 flex flex-col">
                        <TextInput />
                    </div>
                    
                    {/* Audio Player automatically appears when audio is generated */}
                    <AudioPlayer />
                </div>
            </div>

            {/* Right Column - Controls */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-white/70 backdrop-blur-[18px] rounded-[32px] shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-8 border border-white/65 relative z-10">
                    <h2 className="text-[18px] font-bold text-[#111827] mb-6">Voice Settings</h2>
                    
                    <div className="space-y-6">
                        <LanguageSelector />
                        <VoiceSelector />
                        <FormatSelector />
                        
                        {/* Generate Audio Action */}
                        <GenerateButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
