import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRelatedBlogs from './relatedBlogsAPI';

// initial state
const initialState = {
    isLoading: false,
    relatedBlogs: [],
    isError: false,
    error: '',
};

// fetching all the related blogs with async thunk
export const fetchRelatedBlogs = createAsyncThunk('relatedBlogs/fetchRelatedBlogs', async ({ tags, blogId }) => {
    const relatedBlogs = await getRelatedBlogs({ tags, blogId });
    return relatedBlogs;
});

// creating blogs slice here
const relatedBlogsSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchRelatedBlogs.pending, (state) => {
                state.isLoading = true;
                state.relatedBlogs = [];
                state.isError = false;
                state.error = '';
            })
            .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedBlogs = action.payload;
            })
            .addCase(fetchRelatedBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedBlogs = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default relatedBlogsSlice.reducer;