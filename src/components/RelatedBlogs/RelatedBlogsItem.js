import React from 'react';
import relatedImg from '../../assets/images/git.webp';

const RelatedBlogsItem = () => {

    // rendering related blogs item card here
    return (
        <div className='card'>
            <a href='post.html'>
                <img src={relatedImg} className='card-image' alt='' />
            </a>
            <div className='p-4'>
                <a href='post.html' className='text-lg post-title lws-RelatedPostTitle'>
                    Top Github Alternatives
                </a>
                <div className='mb-0 tags'>
                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <p>2010-03-27</p>
            </div>
        </div>
    );
};

export default RelatedBlogsItem;