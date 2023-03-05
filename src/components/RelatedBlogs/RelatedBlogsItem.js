import React from 'react';
import Tag from '../Tags/Tag';
import { Link } from 'react-router-dom';

const RelatedBlogsItem = ({ blog }) => {
    // destructuring the blog object here
    const { id, title, image, createdAt, tags } = blog || {};

    // rendering related blogs item card here
    return (
        <div className='card'>
            <Link to={`/blog-details/${id}`}>
                <img src={image} className='card-image' alt='' />
            </Link>
            <div className='p-4'>
                <Link to={`/blog-details/${id}`} className='text-lg post-title lws-RelatedPostTitle'>
                    {title}
                </Link>
                <div className='mb-0 tags'>
                    {
                        tags.map((tag, index) => <Tag
                            key={tag}
                            tag={tags.length - index === 1 ? `#${tag}` : `#${tag}, `}
                        />)
                    }
                </div>
                <p>{createdAt}</p>
            </div>
        </div>
    );
};

export default RelatedBlogsItem;