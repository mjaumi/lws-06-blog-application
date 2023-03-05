import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../Tags/Tag';

const BlogItem = ({ blog }) => {
    // destructuring the blog object here
    const { id, title, image, createdAt, likes, tags, isSaved } = blog || {};

    // rendering blog item component here
    return (
        <div className='lws-card'>
            <Link to={`/blog-details/${id}`}>
                <img src={image} className='lws-card-image' alt='Top Github Alternatives' />
            </Link>
            <div className='p-4'>
                <div className='lws-card-header'>
                    <p className='lws-publishedDate'>{createdAt}</p>
                    <p className='lws-likeCount'><i className='fa-regular fa-thumbs-up'></i>{likes}</p>
                </div>
                <Link to={`/blog-details/${id}`} className='lws-postTitle'> {title} </Link>
                <div className='lws-tags'>
                    {
                        tags.map((tag, index) => <Tag
                            key={tag}
                            tag={tags.length - index === 1 ? `#${tag}` : `#${tag},`}
                        />)
                    }
                </div>
                {
                    isSaved &&
                    <div className='flex gap-2 mt-4'>
                        <span className='lws-badge'> Saved </span>
                    </div>
                }
            </div>
        </div>
    );
};

export default BlogItem;