import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../features/blogs/blogsSlice';
import Loading from '../Loading/Loading';
import BlogItem from './BlogItem';

const BlogsContainer = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const { isLoading, blogs, isError, error } = useSelector(state => state.blogs);

    // fetching all blogs from server here
    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    // deciding what content to render here
    let content = null;

    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && !isError) {
        content = <h3>{error}</h3>;
    }

    if (!isLoading && !isError && !blogs.length) {
        content = <h3>No Blogs Found!!</h3>;
    }

    if (!isLoading && !isError && blogs.length) {
        content = (
            <main className='post-container' id='lws-postContainer'>
                {
                    blogs.map(blog => <BlogItem
                        key={blog.id}
                        blog={blog}
                    />)
                }
            </main>
        );
    }

    // rendering blogs container here
    return (
        <>
            {content}
        </>
    );
};

export default BlogsContainer;