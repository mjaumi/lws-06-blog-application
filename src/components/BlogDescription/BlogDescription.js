import React from 'react';
import Tag from '../Tags/Tag';

const BlogDescription = ({ blog }) => {
    // destructuring the blog object here
    const { title, image, likes, tags, isSaved, description } = blog || {};

    // rendering blog description component here
    return (
        <main className='post'>
            <img src={image} alt={title} className='w-full rounded-md' id='lws-megaThumb' />
            <div>
                <h1 className='mt-6 text-2xl post-title' id='lws-singleTitle'>
                    {title}
                </h1>
                <div className='tags' id='lws-singleTags'>
                    {
                        tags.map((tag, index) => <Tag
                            key={tag}
                            tag={tags.length - index === 1 ? `#${tag}` : `#${tag}, `}
                        />)
                    }
                </div>
                <div className='btn-group'>
                    <button className='like-btn' id='lws-singleLinks'>
                        <i className='fa-regular fa-thumbs-up'></i> {likes}
                    </button>
                    <button className={`${isSaved && 'active'} save-btn`} id='lws-singleSavedBtn'>
                        <i className='fa-regular fa-bookmark'></i> Saved
                    </button>
                </div>
                <div className='mt-6'>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default BlogDescription;