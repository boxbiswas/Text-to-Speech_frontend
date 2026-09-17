import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ttsReducer from './slices/ttsSlice';
import historyReducer from './slices/historySlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tts: ttsReducer,
        history: historyReducer,
    },
});