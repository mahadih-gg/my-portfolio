import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Navbar></Navbar>
            <About></About>
        </div>
    );
};

export default Home;