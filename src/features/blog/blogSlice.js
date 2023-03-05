import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBlog from './blogAPI';
import updateBlog from './patchBlogAPI';

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

// patching individual blog with async thunk
export const patchBlog = createAsyncThunk('patch/patchBlog', async ({ id, isSaved, likes }) => {
    const updatedBlog = await updateBlog({ id, isSaved, likes });
    return updatedBlog;
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
            })
            .addCase(patchBlog.fulfilled, (state, action) => {
                state.blog.isSaved = action.payload.isSaved;
                state.blog.likes = action.payload.likes;
            });
    },
});

export default blogSlice.reducer;