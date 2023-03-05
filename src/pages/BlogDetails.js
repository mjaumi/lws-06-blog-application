import React from 'react';
import BlogDescription from '../components/BlogDescription/BlogDescription';
import GoHome from '../components/GoHome/GoHome';
import RelatedBlogs from '../components/RelatedBlogs/RelatedBlogs';

const BlogDetails = () => {
    return (
        <>
            <GoHome />
            <section className='post-page-container'>
                <BlogDescription />
                <RelatedBlogs />
            </section>
        </>
    );
};

export default BlogDetails;