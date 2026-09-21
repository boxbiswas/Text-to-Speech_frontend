import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ttsReducer from './slices/ttsSlice';
import historyReducer from './slices/historySlice';

const appReducer = combineReducers({
    auth: authReducer,
    tts: ttsReducer,
    history: historyReducer,
});

const rootReducer = (state, action) => {
    // When the logout action is fulfilled, reset the entire Redux state
    if (action.type === 'auth/logoutUser/fulfilled') {
        state = undefined;
    }
    return appReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
});