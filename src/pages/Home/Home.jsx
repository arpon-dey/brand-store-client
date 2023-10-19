import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Categories></Categories>
           <Footer></Footer>
        </div>
    );
};

export default Home;