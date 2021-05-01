import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Navbar></Navbar>
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;