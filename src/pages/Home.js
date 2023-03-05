import React from 'react';
import BlogsContainer from '../components/BlogsContainer/BlogsContainer';
import SideBar from '../components/SideBar/SideBar';

const Home = () => {

    // rendering the home page here
    return (
        <section className='wrapper'>
            <SideBar />
            <BlogsContainer />
        </section>
    );
};

export default Home;