import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../features/blogs/blogsSlice';
import Loading from '../Loading/Loading';
import BlogItem from './BlogItem';

const BlogsContainer = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const { isLoading, blogs, isError, error } = useSelector(state => state.blogs);
    const { sortText } = useSelector(state => state.filters);

    // fetching all blogs from server here
    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    // copy of blogs for mutation while sorting
    const blogsForSorting = [...blogs];

    // this function is sorting the blogs as per the sort select text
    const sortBlogs = (b1, b2) => {
        switch (sortText) {
            case 'most_liked':
                return (b1.likes < b2.likes) ? 1 : (b1.likes > b2.likes) ? -1 : 0;

            default:
                return 0;
        }
    }

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
                    blogsForSorting
                        .sort((b1, b2) => sortBlogs(b1, b2))
                        .map(blog => <BlogItem
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