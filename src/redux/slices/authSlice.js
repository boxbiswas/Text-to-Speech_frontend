import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../https/axios';
import toast from 'react-hot-toast';

// Register User
export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            const response = await api.post('/auth/register', userData);
            toast.success('Registration successful');
            return response.data.user;
        } catch (error) {
            const message = error.response?.data?.message || 'Registration failed';
            toast.error(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Login User
export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const response = await api.post('/auth/login', userData);
            toast.success('Login successful');
            return response.data.user;
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed';
            toast.error(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Logout User
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await api.post('/auth/logout');
            toast.success('Logged out');
            return null;
        } catch (error) {
            return thunkAPI.rejectWithValue('Logout failed');
        }
    }
);

// Check Authentication / Get Me
export const checkAuth = createAsyncThunk(
    'auth/check',
    async (_, thunkAPI) => {
        try {
            const response = await api.get('/auth/me');
            return response.data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue('Not authenticated');
        }
    }
);

const initialState = {
    user: null,
    isAuthenticated: false,
    isCheckingAuth: true, // For initial app load
    loading: false,       // For login/register forms
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Check Auth
            .addCase(checkAuth.pending, (state) => {
                state.isCheckingAuth = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isCheckingAuth = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isCheckingAuth = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            // Login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
            });
    }
});

export default authSlice.reducer;
