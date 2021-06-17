import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ParticlesBg from 'particles-bg';
import HeaderAnimation from '../HeaderAnimation/HeaderAnimation';

const Header = () => {
    return (
        <header className="d-flex justify-content-center align-items-center">
            {/* <ParticlesBg color="#222831" num={20} type="thick" bg={true} /> */}
            {/* <ParticlesBg color="#F4821F" type="tadpole" bg={true} /> */}
            {/* <ParticlesBg type="cobweb" bg={true} /> */}
            <HeaderAnimation></HeaderAnimation>
            <div className="header-gritting text-center p-5">
                <h1>Hi, I'm <span className="color-primary font-secondary">MAHADI HASAN</span></h1>
                <h1>I'm a Front-End Developer</h1>
                <a href="#about">
                    <button className="header-btn btn-custom">View My Work <span className="ms-2 header-btn-icon"><FontAwesomeIcon icon={faArrowRight} className="header-btn-icon" /></span> </button>
                </a>
            </div>
        </header>
    );
};

export default Header;