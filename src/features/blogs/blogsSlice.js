import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBlogs from './blogsAPI';

// initial state
const initialState = {
    isLoading: false,
    blogs: [],
    isError: false,
    error: '',
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const blogs = await getBlogs();
    return blogs;
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.isLoading = true;
                state.blogs = [];
                state.isError = false;
                state.error = '';
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.blogs = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default blogsSlice.reducer;