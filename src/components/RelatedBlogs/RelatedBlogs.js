import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice';
import Loading from '../Loading/Loading';
import RelatedBlogsItem from './RelatedBlogsItem';

const RelatedBlogs = ({ currentBlogId, tags }) => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const { isLoading, relatedBlogs, isError, error } = useSelector(state => state.relatedBlogs);

    // fetching all the related videos from the server
    useEffect(() => {
        dispatch(fetchRelatedBlogs({ tags, blogId: currentBlogId }))
    }, [dispatch, tags, currentBlogId]);

    // deciding what content to render here
    let content = null;

    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && !isError) {
        content = <h3>{error}</h3>;
    }

    if (!isLoading && !isError && !relatedBlogs.length) {
        content = <h3>No Related Blog Found!!</h3>;
    }

    if (!isLoading && !isError && relatedBlogs.length) {
        content = relatedBlogs.map(blog => <RelatedBlogsItem
            key={blog.id}
            blog={blog}
        />);
    }

    // rendering related blogs side menu here
    return (
        <aside>
            <h4 className='mb-4 text-xl font-medium' id='lws-relatedPosts'>Related Posts</h4>
            <div className='space-y-4 related-post-container'>
                {content}
            </div>
        </aside>
    );
};

export default RelatedBlogs;