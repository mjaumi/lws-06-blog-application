import React from 'react';
import { useDispatch } from 'react-redux';
import { patchBlog } from '../../features/blog/blogSlice';
import Tag from '../Tags/Tag';

const BlogDescription = ({ blog }) => {
    // destructuring the blog object here
    const { id, title, image, likes, tags, isSaved, description } = blog || {};

    // integration of react-redux hooks here
    const dispatch = useDispatch();

    // handler function to handle the save feature
    const saveBtnHandler = () => {
        dispatch(patchBlog({
            id,
            isSaved: !isSaved,
            likes,
        }));
    }

    // handler function to handle the like feature
    const likeBtnHandler = () => {
        dispatch(patchBlog({
            id,
            isSaved: isSaved,
            likes: likes + 1,
        }));
    }

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
                    <button onClick={likeBtnHandler} className='like-btn' id='lws-singleLinks'>
                        <i className='fa-regular fa-thumbs-up'></i> {likes}
                    </button>
                    <button onClick={saveBtnHandler} className={`${isSaved && 'active'} save-btn`} id='lws-singleSavedBtn'>
                        <i className='fa-regular fa-bookmark'></i> {isSaved ? 'Saved' : 'Save'}
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