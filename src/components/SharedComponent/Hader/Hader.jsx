import React from 'react';
import TopHader from './TopHader';
import MidHader from './MidHader';
import Navbar from './Navbar';

const Hader = () => {
    return (
        <div>
            <TopHader></TopHader>
            <MidHader></MidHader>
            <Navbar></Navbar>
        </div>
    );
};

export default Hader;