import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../https/axios';
import toast from 'react-hot-toast';

const storedUser = JSON.parse(localStorage.getItem('user'));

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.post('/auth/login', credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.post('/auth/register', credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Registration failed');
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.post('/auth/logout');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Logout failed');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: storedUser || null,
        isAuthenticated: !!storedUser,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
        }
    },
    extraReducers: (builder) => {
        builder
            // Login user
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                localStorage.setItem('user', JSON.stringify(action.payload.user));
                toast.success('Login successful');
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })

            // Register user
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                localStorage.setItem('user', JSON.stringify(action.payload.user));
                toast.success('Registration successful!');
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload);
            })

            // Logout user
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                localStorage.removeItem('user');
                toast.success('Logged out successfully');
            })
            .addCase(logoutUser.rejected, (state, action) => {
                toast.error(action.payload);
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
