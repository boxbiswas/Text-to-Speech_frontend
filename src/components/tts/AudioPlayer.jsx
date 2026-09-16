import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AudioPlayer = () => {
    const { audioUrl } = useSelector(state => state.tts);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioUrl && audioRef.current) {
            // Play automatically when new audio is generated
            audioRef.current.play().catch(e => console.log("Autoplay prevented", e));
        }
    }, [audioUrl]);

    if (!audioUrl) return null;

    return (
        <div className="mt-8 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-[#111827] mb-4">Generated Audio</h3>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 shadow-inner">
                <audio 
                    ref={audioRef}
                    src={audioUrl} 
                    controls 
                    className="w-full h-12 outline-none" 
                />
            </div>
            <div className="mt-4 flex justify-end">
                <a 
                    href={audioUrl} 
                    download="generated_audio.mp3" 
                    className="text-sm text-[#4F46E5] hover:text-[#4338CA] font-medium flex items-center gap-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download MP3
                </a>
            </div>
        </div>
    );
};

export default AudioPlayer;
