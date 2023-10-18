import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Footer></Footer>
        </div>
    );
};

export default Home;