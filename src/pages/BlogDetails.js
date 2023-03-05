import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogDescription from '../components/BlogDescription/BlogDescription';
import GoHome from '../components/GoHome/GoHome';
import Loading from '../components/Loading/Loading';
import RelatedBlogs from '../components/RelatedBlogs/RelatedBlogs';
import { fetchBlog } from '../features/blog/blogSlice';

const BlogDetails = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const { isLoading, blog, isError, error } = useSelector(state => state.blog);

    // integration of react-router-dom hooks here
    const { blogId } = useParams();

    // fetching individual blog from the server using blogId
    useEffect(() => {
        dispatch(fetchBlog(blogId));
    }, [blogId, dispatch]);

    // deciding what content to render here
    let content = null;

    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && !isError) {
        content = <h3>{error}</h3>;
    }

    if (!isLoading && !isError && !blog.id) {
        content = <h3>No Blog Found!!</h3>;
    }

    if (!isLoading && !isError && blog.id) {
        content = (
            <>
                <BlogDescription blog={blog} />
                <RelatedBlogs />
            </>
        );
    }

    // rendering the blog details page here
    return (
        <>
            <GoHome />
            <section className='post-page-container'>
                {content}
            </section>
        </>
    );
};

export default BlogDetails;