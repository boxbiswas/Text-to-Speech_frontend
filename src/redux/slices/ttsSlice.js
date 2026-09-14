import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../https/axios';
import toast from 'react-hot-toast';

export const fetchVoices = createAsyncThunk(
    'tts/fetchVoices',
    async (_, thunkAPI) => {
        try {
            const response = await api.get('/tts/voices');
            return response.data; // { languages: [...], voices: [...] }
        } catch (error) {
            const message = error.response?.data?.message || 'Failed to fetch voices';
            toast.error(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const initialState = {
    text: '',
    language: '',
    voice: '',
    audioUrl: null,
    availableLanguages: [],
    availableVoices: [],
    loading: false,
    error: null,
};

const ttsSlice = createSlice({
    name: 'tts',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
            // Automatically select the first voice available for this new language
            const voicesForLang = state.availableVoices.filter(v => v.languageCode === action.payload);
            if (voicesForLang.length > 0) {
                state.voice = voicesForLang[0].id;
            } else {
                state.voice = '';
            }
        },
        setVoice: (state, action) => {
            state.voice = action.payload;
        },
        setAudioUrl: (state, action) => {
            state.audioUrl = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVoices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVoices.fulfilled, (state, action) => {
                state.loading = false;
                state.availableLanguages = action.payload.languages;
                state.availableVoices = action.payload.voices;

                // Set sensible defaults if not already set
                if (action.payload.languages.length > 0 && !state.language) {
                    state.language = action.payload.languages[0].code;
                    
                    const voicesForLang = action.payload.voices.filter(v => v.languageCode === state.language);
                    if (voicesForLang.length > 0) {
                        state.voice = voicesForLang[0].id;
                    }
                }
            })
            .addCase(fetchVoices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { setText, setLanguage, setVoice, setAudioUrl } = ttsSlice.actions;

export default ttsSlice.reducer;
