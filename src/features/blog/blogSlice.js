import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBlog from './blogAPI';

// initial state
const initialState = {
    isLoading: false,
    blog: {},
    isError: false,
    error: '',
};

// fetching individual blog by blogId with async thunk
export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (blogId) => {
    const blog = await getBlog(blogId);
    return blog;
});

// creating blogs slice here
const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchBlog.pending, (state) => {
                state.isLoading = true;
                state.blog = {};
                state.isError = false;
                state.error = '';
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload;
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.blog = {};
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default blogSlice.reducer;