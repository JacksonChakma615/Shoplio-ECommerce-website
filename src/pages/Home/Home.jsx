import React from 'react';
import Hero from './HomeComponent/Hero';
import HomeCategory from './HomeComponent/HomeCategory';
import PopularProducts from './HomeComponent/PopularProducts/PopularProducts';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeCategory></HomeCategory>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;