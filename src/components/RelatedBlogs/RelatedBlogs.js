import React from 'react';
import RelatedBlogsItem from './RelatedBlogsItem';

const RelatedBlogs = () => {

    // rendering related blogs side menu here
    return (
        <aside>
            <h4 className='mb-4 text-xl font-medium' id='lws-relatedPosts'>Related Posts</h4>
            <div className='space-y-4 related-post-container'>
                <RelatedBlogsItem />
                <RelatedBlogsItem />
            </div>
        </aside>
    );
};

export default RelatedBlogs;