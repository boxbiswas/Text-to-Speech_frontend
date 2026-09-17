import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../https/axios';
import toast from 'react-hot-toast';

// Async thunk to fetch all history items for the logged-in user
export const fetchHistory = createAsyncThunk(
    'history/fetchHistory',
    async (_, thunkAPI) => {
        try {
            // Make GET request to the history endpoint
            const response = await api.get('/history');
            return response.data;
        } catch (error) {
            // Extract and display the error message via toast
            const message = error.response?.data?.message || 'Failed to fetch history';
            toast.error(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Async thunk to delete a specific history item by ID
export const deleteHistory = createAsyncThunk(
    'history/deleteHistory',
    async (id, thunkAPI) => {
        try {
            // Make DELETE request to the history endpoint
            await api.delete(`/history/${id}`);
            // Return the deleted ID so the reducer can remove it from state
            return id;
        } catch (error) {
            // Extract and display the error message via toast
            const message = error.response?.data?.message || 'Failed to delete history';
            toast.error(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle fetching history lifecycle
            .addCase(fetchHistory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHistory.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload; // Store fetched history array
            })
            .addCase(fetchHistory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Store error message
            })
            // Handle deleting history lifecycle
            .addCase(deleteHistory.fulfilled, (state, action) => {
                // Filter out the deleted item from the current items array
                state.items = state.items.filter(item => item.id !== action.payload);
                toast.success('Deleted successfully');
            });
    }
});

export default historySlice.reducer;
