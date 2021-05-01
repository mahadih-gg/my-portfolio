import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="d-flex justify-content-center align-items-center">
            <div className="header_gritting text-center">
                <h1>Hi, I'm <span className="color-custom">MAHADI HASAN</span></h1>
                <h1>I'm a Front-End Developer</h1>
                <a href="#about">
                    <button className="header-btn">View My Work <span className="ms-2 header-btn-icon"><FontAwesomeIcon icon={faArrowRight} className="header-btn-icon" /></span> </button>
                </a>
            </div>
        </header>
    );
};

export default Header;