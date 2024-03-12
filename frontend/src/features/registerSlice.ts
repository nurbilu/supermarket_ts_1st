import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store'; // Adjust based on your store configuration
import { registerAPI } from './registerAPI';
import axios from 'axios';

interface RegisterState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: RegisterState = {
    status: 'idle',
    error: null,
};

export const register = createAsyncThunk(
    'register/registerUser',
    async (userData: { username: string; password: string; email: string; firstName: string; lastName: string }, { rejectWithValue }) => {
        try {
            const response = await registerAPI(userData);
            return response.data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                // Now we can access err.response due to the axios type guard
                return rejectWithValue(err.response?.data);
            }
            return rejectWithValue('An unexpected error occurred');
        }
    }
);

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export const selectRegisterStatus = (state: RootState) => state.register.status;
export const selectRegisterError = (state: RootState) => state.register.error;

export default registerSlice.reducer;
