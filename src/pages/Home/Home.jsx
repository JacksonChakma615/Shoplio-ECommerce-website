import React from 'react';
import Hero from './HomeComponent/Hero';
import HomeCategory from './HomeComponent/HomeCategory';
import PopularProducts from './HomeComponent/PopularProducts/PopularProducts';
import LatestExclusive from './HomeComponent/LatestExclusive';
import NewProducts from './HomeComponent/NewProducts';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Hero></Hero>
            <HomeCategory></HomeCategory>
            <PopularProducts></PopularProducts>
            <LatestExclusive></LatestExclusive>
            <NewProducts></NewProducts>
        </div>
    );
};

export default Home;