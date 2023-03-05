import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogsSlice';
import blogReducer from '../features/blog/blogSlice';
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice';

// configuring the redux store here
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    blogs: blogsReducer,
    relatedBlogs: relatedBlogsReducer,
  },
});
