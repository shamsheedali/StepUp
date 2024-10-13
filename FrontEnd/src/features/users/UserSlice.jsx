import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from '../../api/users';

// Async thunk for signup
export const signupUser = createAsyncThunk(
    'user/signup',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await signUp(userData);
            return response;  // Payload is the user data
        } catch (error) {
            return rejectWithValue(error.response.data);  // Return error response if failed
        }
    }
);


const initialState = {
    loading: false,
    userInfo: null,  // Will hold user data on successful login/signup
    error: null,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Signup cases
        builder
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }    
});

export default userSlice.reducer;